import React, { useEffect, useState } from 'react';
import "./Home.css";
import MetaData from '../MetaData';
import Stack from 'react-bootstrap/esm/Stack';
import Carousels from "./Carousels";
import ProductsCard from '../Products/ProductsCard';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { getAllProducts } from '../../store/actions/productAction';
import { getAllOrders } from '../../store/actions/orderAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import HomeProductCards from './HomeProductCards';
import HomeProductsTabs from './HomeProductsTabs';

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );
    const { orders } = useSelector(
        (state) => state.allOrders
    );

    // Filter featured products to show ratings above 4
    const filteredRatingProducts = products.filter(product => product.ratings > 3);

    // Filter products to show latest products
    const latestProducts = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    // const latestProducts = filteredLatestProduct.filter((product, index) => index < 6);

    // Filter products to show best seller products
    // Calculate the total quantity sold for each product
    const productQuantitySold = products.reduce((result, product) => {
        const totalQuantitySold = orders.reduce((quantitySold, order) => {
            const orderQuantitySold = order.orderItems.reduce((subtotal, item) => {
                if (item.product === product._id) {
                    return subtotal + item.quantity;
                }
                return subtotal;
            }, 0);
            return quantitySold + orderQuantitySold;
        }, 0);

        return [...result, { ...product, totalQuantitySold }];
    }, []);

    // Sort products based on totalQuantitySold in descending order
    const bestSellerProducts = productQuantitySold.sort((a, b) => b.totalQuantitySold - a.totalQuantitySold);
    // const bestSellerProducts = sortedProducts.filter((product, index) => index < 6);

    // For product slideshow
    function generateCarouselItems(products) {
        const items = [];
        let totalSlides;
        if (window.innerWidth > 1143) {
            totalSlides = Math.ceil(products.length / 4);
        } else if (window.innerWidth > 858) {
            totalSlides = Math.ceil(products.length / 3);
        }
        else if (window.innerWidth > 576) {
            totalSlides = Math.ceil(products.length / 2);
        } else {
            totalSlides = Math.ceil(products.length / 1);
        }

        for (let slideNumber = 0; slideNumber < totalSlides; slideNumber++) {
            let startIndex;
            let endIndex;
            if (window.innerWidth > 1143) {
                startIndex = slideNumber * 4;
                endIndex = startIndex + 4;
            } else if (window.innerWidth > 858) {
                startIndex = slideNumber * 3;
                endIndex = startIndex + 3;
            }
            else if (window.innerWidth > 576) {
                startIndex = slideNumber * 2;
                endIndex = startIndex + 2;
            }
            else {
                startIndex = slideNumber * 1;
                endIndex = startIndex + 1;
            }
            const slideProducts = products.slice(startIndex, endIndex);

            items.push(
                <Carousel.Item key={slideNumber} active={(slideNumber === 0).toString()}>
                    <Row className="mb-5 pb-4 justify-content-center">
                        {slideProducts.map((product) => (
                            <HomeProductCards key={product._id} product={product} />
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }

        return items;
    };

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllOrders());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Online Furniture Shopping Store: Shop Online in India for Furniture, Home Decor, Homeware Products @ Hekto"} />

            {/* Carousel Banners */}
            <Carousels />

            {/* Products */}
            <Container>
                <Stack className="mt-5 pt-5">
                    <h2 className="mb-5 fs-1 fw-bold text-center text-blue-700-color">Featured Products</h2>

                    <Carousel className="featured-products-carousel">
                        {generateCarouselItems(filteredRatingProducts)}
                    </Carousel>
                </Stack>

                <Stack className="mt-5 pt-5">
                    <h2 className="mb-0 fs-1 fw-bold text-center text-blue-700-color">Latest Products</h2>

                    <HomeProductsTabs latestProducts={latestProducts} bestSellerProducts={bestSellerProducts} filteredRatingProducts={filteredRatingProducts} />
                </Stack>
                {/* Load more button */}
                {/* <div className="text-center my-4">
                    <Button variant="warning"> <Link className="text-decoration-none text-dark" to={`/products`}>See all products</Link></Button>
                </div> */}
            </Container>
        </>
    )
}

export default Home;
