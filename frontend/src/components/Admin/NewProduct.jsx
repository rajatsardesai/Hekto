import React, { useEffect, useState } from 'react';
import MetaData from '../MetaData';
import Sidebar from './Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_PRODUCT_RESET } from '../../store/constants/productConstants';
import { createProduct } from '../../store/actions/productAction';

const NewProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success } = useSelector(state => state.newProduct);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const categories = [
        "Sofas",
        "Beds",
        "Wardrobes",
        "Dressing Tables",
        "Dining Tables",
        "Study Tables",
        "Chairs",
        "TV and Media Units",
    ];

    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const newProductForm = new FormData();

        newProductForm.set("name", name);
        newProductForm.set("price", price);
        newProductForm.set("description", description);
        newProductForm.set("category", category);
        newProductForm.set("stock", stock);

        images.forEach((image) => {
            newProductForm.append("images", image);
        });
        dispatch(createProduct(newProductForm));
    };

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    useEffect(() => {
        if (success) {
            navigate("/admin/dashboard");
            dispatch({ type: NEW_PRODUCT_RESET });
        }
    }, [navigate, dispatch, success]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Create New Product - Admin"} />

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" encType="multipart/form-data" onSubmit={createProductSubmitHandler}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Create Product</h5>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </Form.Group>
                            </Stack>
                            <Form.Group className="mb-3 w-100" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" value={categories} controlId="categories">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Select aria-label="Select Categories" onChange={(e) => setCategory(e.target.value)}>
                                        <option>Categories</option>
                                        {
                                            categories &&
                                            categories.map(item => {
                                                return (
                                                    <option key={item} value={item}>{item}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                                </Form.Group>
                            </Stack>
                            <Form.Group className="w-100" controlId="avatar">
                                <Form.Label>Upload images</Form.Label>
                                <Form.Control type="file" name="avatar" accept="image/*" onChange={createProductImagesChange} multiple />
                            </Form.Group>
                            <Stack className="flex-column flex-md-row flex-wrap my-4" gap={3}>
                                {
                                    imagesPreview.map((image, index) => {
                                        return (
                                            <Image key={index} src={image} alt="product preview" rounded thumbnail fluid className="w-25 object-fit-contain" />
                                        )
                                    })
                                }
                            </Stack>
                            <Stack className="flex-column flex-md-row" gap={2}>
                                <Button className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Add</Button>
                                <Button as={Link} to={"/admin/products"} className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Cancel</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewProduct;
