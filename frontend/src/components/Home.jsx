import React, { useEffect } from 'react';
import Carousels from "./Carousels";
import ProductsCard from './Products/ProductsCard';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import MetaData from './MetaData';
import Row from 'react-bootstrap/Row';
import { getProduct } from '../store/actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );

    // Filter featured products to show ratings above 4
    const filteredData = products.filter(product => product.ratings > 3);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - eBuy"} />

            {/* Carousel Banners */}
            <Carousels />

            {/* Products */}
            <Container className="my-5 bg-white p-4">
                <h2 className="mb-3 fs-4 fw-bold">Featured Products</h2>
                <Row xs={1} md={2} xl={4} className="g-4">
                    {filteredData && filteredData.map(product => <ProductsCard key={product._id} product={product} />)}
                </Row>
                {/* Load more button */}
                <div className="text-center my-4">
                    <Button variant="warning"> <Link className="text-decoration-none text-dark" to={`/products`}>See all products</Link></Button>
                </div>
            </Container>
        </>
    )
}

export default Home;
