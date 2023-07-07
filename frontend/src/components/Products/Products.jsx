import React, { useEffect, useState } from 'react';
import MetaData from '../MetaData';
import InitLoader from "../Utils/InitLoader";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Stack from 'react-bootstrap/esm/Stack';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import ProductsCard from './ProductsCard';
import ProductFilters from './ProductFilters';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilteredProducts } from '../../store/actions/productAction';

const Products = () => {
    const dispatch = useDispatch();

    // For search filter
    const { keyword } = useParams();

    // For category filter
    const [category, setCategory] = useState("");

    // For price filter
    const [price, setPrice] = useState(50000);

    // For ratings filter
    const [ratings, setRatings] = useState(0);

    const { products, productsCount, filteredProductsCount, resultPerPage, loading: productsLoading, headerLoading: productsHeaderLoading, error: productsError, message } = useSelector(
        (state) => state.products
    );

    // For pagination
    let items = [];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.floor((category ? filteredProductsCount : productsCount) / resultPerPage);
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

    useEffect(() => {
        dispatch(getFilteredProducts(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings]);

    return (
        productsLoading ?
            <InitLoader />
            :
            <>
                {/* Title tag */}
                <MetaData title={"All Products: Shop Online in India for Furniture, Home Decor, Homeware Products @Hekto"} />

                {/* React top loading bar */}
                <HeaderLoading progressLoading={productsHeaderLoading} />

                {/* Header alert */}
                {
                    (productsError) &&
                    <HeaderAlert error={productsError} message={message} />
                }

                {/* Products */}
                <Container>
                    <Stack className="flex-column flex-md-row align-items-start align-items-xs-center justify-content-between my-5">
                        <Stack className="mb-4 mb-md-0">
                            <h2 className="font-22 text-primary-color fw-bold">{keyword ? "Searched Products" : "All Products"}</h2>
                            <span className="font-12 font-lato text-gray-100-color">About {filteredProductsCount} products (0.62 seconds)</span>
                        </Stack>
                        <span className="text-start text-xs-center text-md-end">Per Page: <input disabled type="number" placeholder={resultPerPage} className="w-25" /></span>
                    </Stack>
                    <hr />
                    <Row className="mb-5">
                        <Col md={3}>
                            <ProductFilters price={price} setPrice={setPrice} setCategory={setCategory} setRatings={setRatings} />
                        </Col>
                        <Col md={9}>
                            {/* Products */}
                            <Container className="p-4 text-center">
                                {
                                    products.length > 0 ?
                                        <Row xs={1} md={2} xl={3} className="g-4">
                                            {products && products.map(product => <ProductsCard key={product._id} product={product} />)}
                                        </Row>
                                        : <span>No products to show</span>
                                }
                                {
                                    resultPerPage < (category ? filteredProductsCount : productsCount) &&
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
