import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
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
import { useFormik } from "formik";
import { productSchema } from '../../yupSchema';

const initialValues = {
    name: "",
    price: 0,
    description: "",
    category: "",
    stock: 0,
    images: [],
    imagesPreview: [],
};

const NewProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading: newProductLoading, headerLoading: newProductHeaderLoading, error: newProductError, message: newProductMessage, success } = useSelector(state => state.newProduct);

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

    // Form handling and validation -- Formik and Yup
    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: productSchema,
        onSubmit: values => {
            const { name, price, description, category, stock, images } = values;

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
        }
    });

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setFieldValue("images", []);
        setFieldValue("imagesPreview", []);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    values.images.push(reader.result);
                    values.imagesPreview.push(reader.result);

                    setFieldValue("images", values.images);
                    setFieldValue("imagesPreview", values.imagesPreview);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    useEffect(() => {
        if (success) {
            setFieldValue("images", []);
            setFieldValue("imagesPreview", []);
            dispatch({ type: NEW_PRODUCT_RESET });
            navigate("/admin/products");
        }
    }, [navigate, dispatch, success, setFieldValue]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Create New Product - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={newProductHeaderLoading} />

            {/* Header alert */}
            {
                newProductLoading &&
                <HeaderAlert message={newProductMessage} />
            }
            {
                (newProductError || success || newProductLoading) &&
                <HeaderAlert error={newProductError} message={newProductMessage} />
            }


            {/* All products list */}
            <Container className="admin-products my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Create Product</h5>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={values.name} autoComplete="off" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.name && errors.name} />
                                    {
                                        errors.name && touched.name ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" name="price" value={values.price} autoComplete="off" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.price && errors.price} />
                                    {
                                        errors.price && touched.price ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.price}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                            </Stack>
                            <Form.Group className="mb-3 w-100" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={4} name="description" value={values.description} autoComplete="off" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.description && errors.description} />
                                {
                                    errors.description && touched.description ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.description}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" value={categories} controlId="categories">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Select aria-label="Select Categories" autoComplete="off" name="category" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.category && errors.category}>
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
                                    {
                                        errors.category && touched.category ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.category}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control type="number" name="stock" value={values.stock} autoComplete="off" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.stock && errors.stock} />
                                    {
                                        errors.stock && touched.stock ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.stock}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                            </Stack>
                            <Form.Group className="w-100" controlId="avatar">
                                <Form.Label>Upload images</Form.Label>
                                <Form.Control type="file" name="images" accept="image/*" onChange={createProductImagesChange} onBlur={handleBlur} isInvalid={touched.images && errors.images} multiple />
                                {
                                    errors.images && touched.images ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.images}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Stack className="flex-row flex-wrap my-4" gap={3}>
                                {
                                    values.imagesPreview.map((image, index) => {
                                        return (
                                            <Image key={index} src={image} alt="product preview" rounded thumbnail fluid className="w-25 object-fit-contain" />
                                        )
                                    })
                                }
                            </Stack>
                            <Stack className="flex-column flex-md-row" gap={2}>
                                <Button disabled={Object.keys(errors).length !== 0 ? true : false} className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Add</Button>
                                <Button as={Link} to={"/admin/products"} className="bg-secondary-color border-0 py-2 px-3 rounded-0 w-auto d-flex justify-content-center align-items-center" type="submit">Cancel</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewProduct;
