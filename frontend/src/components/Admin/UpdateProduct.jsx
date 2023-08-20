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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductDetails, updateProduct } from '../../store/actions/productAction';
import { UPDATE_PRODUCT_RESET } from '../../store/constants/productConstants';
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
    oldImages: [],
};

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { loading: updateLoading, headerLoading: updateHeaderLoading, error: updateError, message: updateMessage, isUpdated } = useSelector(state => state.product);
    const { headerLoading: productDetailsHeaderLoading, error: productDetailsError, message: productDetailsMessage, product } = useSelector(state => state.productDetails);

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
        }
    });

    const updateProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        const newImages = [];
        const newImagesPreview = [];

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    newImages.push(reader.result);
                    newImagesPreview.push(reader.result);

                    setFieldValue("images", newImages);
                    setFieldValue("imagesPreview", newImagesPreview);
                }
            };

            reader.readAsDataURL(file);
        });

        setFieldValue("images", newImages);
        setFieldValue("imagesPreview", newImagesPreview);
        setFieldValue("oldImages", []);
    };


    useEffect(() => {
        if (product && product._id !== id) {
            dispatch(getProductDetails(" ", id));
        } else {
            setFieldValue("name", product.name);
            setFieldValue("price", product.price);
            setFieldValue("description", product.description);
            setFieldValue("category", product.category);
            setFieldValue("stock", product.stock);
            setFieldValue("oldImages", product.images);
        };

        if (isUpdated) {
            setTimeout(() => {
                navigate("/admin/products");
                dispatch({ type: UPDATE_PRODUCT_RESET });
            }, 5000);
        }
    }, [navigate, dispatch, isUpdated, id, product, updateError, setFieldValue]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Update Product - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={productDetailsHeaderLoading || updateHeaderLoading} />

            {/* Header alert */}
            {
                updateLoading &&
                <HeaderAlert message={updateMessage} />
            }
            {
                (updateError || productDetailsError || isUpdated) &&
                <HeaderAlert error={updateError || productDetailsError} message={updateMessage || productDetailsMessage} />
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
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Edit Product</h5>
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
                                <Form.Group className="mb-3 w-100" controlId="categories">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Select aria-label="Select Categories" autoComplete="off" name="category" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.category && errors.category}>
                                        <option>Categories</option>
                                        {
                                            categories &&
                                            categories.map(item => {
                                                return (
                                                    <option key={item} value={values.category}>{item}</option>
                                                )
                                            })
                                        }
                                        {
                                            errors.category && touched.category ?
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.category}
                                                </Form.Control.Feedback>
                                                : null
                                        }
                                    </Form.Select>
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
                                <Form.Control type="file" name="images" accept="image/*" onChange={updateProductImagesChange} onBlur={handleBlur} isInvalid={touched.images && errors.images} multiple />
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
                                    values.oldImages && values.oldImages.map((image, index) => {
                                        return (
                                            <Image key={index} src={image.url} alt="old product preview" rounded thumbnail fluid className="w-25 object-fit-contain" />
                                        )
                                    })
                                }
                                {
                                    values.imagesPreview.map((image, index) => {
                                        return (
                                            <Image key={index} src={image} alt="product preview" rounded thumbnail fluid className="w-25 object-fit-contain" />
                                        )
                                    })
                                }
                            </Stack>
                            <Stack className="flex-column flex-md-row" gap={2}>
                                <Button className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Update</Button>
                                <Button as={Link} to={"/admin/products"} className="bg-secondary-color border-0 py-2 px-3 rounded-0 w-auto d-flex justify-content-center align-items-center" type="submit">Cancel</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateProduct;
