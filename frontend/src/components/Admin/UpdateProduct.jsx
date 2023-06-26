import React, { useState, useEffect } from 'react';
import MetaData from '../MetaData';
import Sidebar from './Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductDetails, updateProduct } from '../../store/actions/productAction';
import { UPDATE_PRODUCT_RESET } from '../../store/constants/productConstants';

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);
    const { error, product } = useSelector(state => state.productDetails);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [oldImages, setOldImages] = useState([]);

    const categories = [
        "Laptops",
        "Home & Kitchen",
        "Accessories",
        "Fashion",
        "Electronics",
        "Cameras",
        "Smartphones",
        "Smartwatches",
    ];

    const updateProductSubmitHandler = (e) => {
        e.preventDefault();

        const updateProductForm = new FormData();

        updateProductForm.set("name", name);
        updateProductForm.set("price", price);
        updateProductForm.set("description", description);
        updateProductForm.set("category", category);
        updateProductForm.set("stock", stock);

        images.forEach((image) => {
            updateProductForm.append("images", image);
        });
        dispatch(updateProduct(id, updateProductForm));
    };

    const updateProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);
        setOldImages([]);

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
        if (product && product._id !== id) {
            dispatch(getProductDetails(id));
        } else {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
            setCategory(product.category);
            setStock(product.stock);
            setOldImages(product.images);
        };

        if (error || updateError) {
            alert(error || updateError);
        };

        if (isUpdated) {
            alert("Product Updated Successfully");
            navigate("/admin/products");
            dispatch({ type: UPDATE_PRODUCT_RESET });
        }
    }, [navigate, dispatch, isUpdated, id, product, error, updateError]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Update Product - Admin"} />

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" encType="multipart/form-data" onSubmit={updateProductSubmitHandler}>
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
                                <Form.Group className="mb-3 w-100" controlId="categories">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Select aria-label="Select Categories" value={categories} onChange={(e) => setCategory(e.target.value)}>
                                        <option>Categories</option>
                                        {
                                            categories &&
                                            categories.map(item => {
                                                return (
                                                    <option key={item} value={categories}>{item}</option>
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
                                <Form.Control type="file" name="avatar" accept="image/*" onChange={updateProductImagesChange} multiple />
                            </Form.Group>
                            <Stack className="flex-column flex-md-row flex-wrap my-4" gap={3}>
                                {
                                    oldImages && oldImages.map((image, index) => {
                                        return (
                                            <Image key={index} src={image.url} alt="old product preview" rounded thumbnail fluid className="w-25 object-fit" />
                                        )
                                    })
                                }
                                {
                                    imagesPreview.map((image, index) => {
                                        return (
                                            <Image key={index} src={image} alt="product preview" rounded thumbnail fluid className="w-25 object-fit" />
                                        )
                                    })
                                }
                            </Stack>
                            <Stack className="flex-column flex-md-row" gap={2}>
                                <Button className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Update</Button>
                                <Button as={Link} to={"/admin/products"} className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Cancel</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateProduct;
