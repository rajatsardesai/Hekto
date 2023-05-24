import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import Products from './Products/Products';
import Container from 'react-bootstrap/esm/Container';
import { getProduct } from '../store/actions/productActions';
import { useSelector, useDispatch } from "react-redux";

const product = {
    name: "Raymond",
    images: [{ url: "https://picsum.photos/seed/picsum/200/300" }],
    price: "300",
    _id: "random"
};

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    
    return (
        <>
            {/* Carousel Banners */}
            <Carousel>
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
                <Products product={product} />
            </Container>
        </>
    )
}

export default Home
