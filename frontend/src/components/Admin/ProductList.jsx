import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { deleteProduct, getAdminProduct } from '../../store/actions/productAction';
import { DELETE_PRODUCT_RESET } from '../../store/constants/productConstants';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const ProductList = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state => state.products));
    const { error: deleteError, isDeleted } = useSelector((state => state.product));

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    useEffect(() => {
        if (deleteError) {
            alert(deleteError);
        };

        if (isDeleted) {
            alert("Product deleted successfully");
            dispatch({ type: DELETE_PRODUCT_RESET });
        };

        dispatch(getAdminProduct());
    }, [dispatch, isDeleted, deleteError]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"All Products - Admin"} />

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Stack className="align-items-end mb-3">
                            <Button as={Link} to={"/admin/product"} className="bg-secondary-color border-0 my-2 py-2 px-3 rounded-0" type="submit">Add Product</Button>
                        </Stack>
                        {
                            products.length > 0 ?
                                <Table bordered hover responsive="md">
                                    <thead className="bg-gray-400-color">
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => {
                                                return (
                                                    <tr key={product._id}>
                                                        <td>{product._id}</td>
                                                        <td className="text-overflow line-clamp-1 pb-0">{product.name}</td>
                                                        <td>{product.stock}</td>
                                                        <td>{product.price}</td>
                                                        <td className="d-flex">
                                                            <Button as={Link} to={`/admin/product/${product._id}`} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap me-2">Edit</Button>
                                                            <Button onClick={() => deleteProductHandler(product._id)} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap">Delete</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                :
                                <Stack >
                                    <span className="text-center text-dark font-20">No orders to show</span>
                                </Stack>
                        }
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default ProductList;
