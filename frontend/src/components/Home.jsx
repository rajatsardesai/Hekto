import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import Products from './Products/Products';
import Container from 'react-bootstrap/esm/Container';
import MetaData from './MetaData';
import Row from 'react-bootstrap/Row';
import { getProduct } from '../store/actions/productAction';
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    const { products, productsCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Mc-shopee"} />

            {/* Carousel Banners */}
            <Carousel className="home-carousel">
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="banner ad 1"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="banner ad 2"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="banner ad 3"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Products */}
            <Container className="my-5">
                <h2 className="text-center mb-5">Featured Products</h2>
                <Row xs={1} md={2} xl={4} className="g-4">
                    {products && products.map((product, index) => <Products key={index} product={product} />)}
                </Row>
            </Container>
        </>
    )
}

export default Home
