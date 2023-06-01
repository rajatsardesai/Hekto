import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import ProductFilters from './ProductFilters';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../store/actions/productAction';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import MetaData from '../MetaData';

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

    // For category filter
    const [category, setCategory] = useState("");

    // For ratings filter
    const [ratings, setRatings] = useState(0);

    useEffect(() => {
        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings]);

    // let count = filteredProductsCount;

    return (
        !loading &&
        <>
            {/* Title tag */}
            <MetaData title={"All Products: Buy Latest Products Online at Best Prices in India | Buy New Products Online - eBuy"} />

            {/* Products */}
            <Container fluid className="products-page">
                <Row className="mb-5">
                    <Col md={3} className="mt-5 mt-lg-5">
                        <ProductFilters price={price} setPrice={setPrice} setCategory={setCategory} setRatings={setRatings} />
                    </Col>
                    <Col md={9}>
                        {/* Products */}
                        <Container className="my-5 bg-white p-4">
                            <h2 className="mb-1">{keyword ? "Searched Products" : "All Products"}</h2>
                            <span className="text-secondary">Price and other details may vary based on product size and colour.</span>
                            <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-1">
                                {products && products.map(product => <ProductsCard key={product._id} product={product} />)}
                            </Row>
                            <p className="my-3 text-end">Results per page: {resultPerPage}</p>
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
