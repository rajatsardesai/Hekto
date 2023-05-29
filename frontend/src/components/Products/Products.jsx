import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../store/actions/productAction';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/esm/Stack';

const Products = () => {
    const dispatch = useDispatch();

    // For search filter
    const { keyword } = useParams();

    const { products, productsCount, loading, resultPerPage } = useSelector(
        (state) => state.products
    );

    // For pagination
    let items = [];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.floor(productsCount / resultPerPage) * 2;
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === Number(currentPage)}>
                {number}
            </Pagination.Item>,
        );
    };
    const handlePageChange = (e) => {
        setCurrentPage(e.target.innerText);
    };

    // For price filter
    const [price, setPrice] = useState(50000);
    const priceHandler = (event) => {
        setPrice(event.target.value);
    }

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage, price));
    }, [dispatch, keyword, currentPage, price]);

    // let count = filteredProductsCount;

    return (
        !loading &&
        <>
            <Container fluid className="products-page">
                <Row>
                    <Col md={3} className="mt-5 pt-5">
                        <Form.Label className="mt-5 fs-6 fw-bold">Price</Form.Label>
                        <Form.Range min={0} max={50000} value={price} onChange={priceHandler} />
                        <Stack direction="horizontal" className="justify-content-between">
                            <Form.Label className="fs-6">₹0</Form.Label>
                            <Form.Label className="fs-6">₹{price}</Form.Label>
                        </Stack>
                    </Col>
                    <Col md={9}>
                        {/* Products */}
                        <Container className="my-5">
                            <h2 className="mb-1">{keyword ? "Searched Products" : "Featured Products"}</h2>
                            <span className="text-secondary">Price and other details may vary based on product size and colour.</span>
                            <Row xs={1} md={3} xxl={4} className="g-4 mt-1">
                                {products && products.map(product => <ProductsCard key={product._id} product={product} />)}
                            </Row>
                            {
                                resultPerPage < productsCount &&
                                <div className="my-4">
                                    <Pagination size="lg" onClick={handlePageChange} className="justify-content-center">{items}</Pagination>
                                </div>
                            }
                        </Container >
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products
