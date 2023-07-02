import React, { useEffect, useState } from 'react';
import "./Home.css";
import MetaData from '../MetaData';
import Stack from 'react-bootstrap/esm/Stack';
import Carousels from "./Carousels";
import ProductsCard from '../Products/ProductsCard';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { getAllProducts } from '../../store/actions/productAction';
import { getAllOrders } from '../../store/actions/orderAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import HomeProductCards from './HomeProductCards';
import LatestProductsTabs from './LatestProductsTabs';
import DiscountProductsTabs from './DiscountProductsTabs';
import BlogCards from './BlogCards';

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );
    const { orders } = useSelector(
        (state) => state.allOrders
    );

    const styles = [
        {
            "featuredProductsStyles": [
                {
                    "cardTitleColor": "text-secondary-color",
                    "cardTitleSize": "font-18",
                    "cardTextColor": "text-blue-300-color",
                    "cardTextSize": "font-17"
                }
            ],
            "trendingProductsStyles": [
                {
                    "cardTitleColor": "text-primary-color",
                    "cardTitleSize": "font-16",
                    "cardTextColor": "text-primary-color",
                    "cardTextSize": "font-14"
                }
            ],
        }
    ];

    // Filter featured products to show ratings above 4
    const filteredRatingProducts = products && products.filter(product => product.ratings > 3);

    // Filter products to show latest products
    const latestProducts = products && products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Filter products to show best seller products
    // Calculate the total quantity sold for each product
    const productQuantitySold = products && products.reduce((result, product) => {
        const totalQuantitySold = orders && orders.reduce((quantitySold, order) => {
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
    const bestSellerProducts = productQuantitySold && productQuantitySold.sort((a, b) => b.totalQuantitySold - a.totalQuantitySold);

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
                            <HomeProductCards key={product._id} product={product} styles={styles[0].featuredProductsStyles} />
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

                    <LatestProductsTabs latestProducts={latestProducts} bestSellerProducts={bestSellerProducts} filteredRatingProducts={filteredRatingProducts} />
                </Stack>
            </Container>

            <Stack className="latest-trending-product mt-5 pt-5 bg-gray-400-color">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6 position-relative">
                            <img
                                className="d-block img-fluid m-auto"
                                src={process.env.PUBLIC_URL + '/assets/content/hekto-latest-trending-bubble.png'}
                                alt={`hekto-latest-trending-bubble`}
                            />
                            <img
                                className="latest-trending-chair d-block img-fluid ps-md-5"
                                src={process.env.PUBLIC_URL + '/assets/content/hekto-latest-trending-chair.png'}
                                alt={`hekto-latest-trending-chair`}
                            />
                        </Col>
                        <Col md="6 latest-trending-product-text mt-5 mt-md-0">
                            <h3 className="text-primary-color fw-bold font-35 mb-3">Unique Features Of Latest &
                                Trending Products</h3>
                            <ul className="text-gray-100-color font-lato ps-4 list-style-none mx-0 mb-4">
                                <li>All frames constructed with hardwood solids and laminates</li>
                                <li>Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails</li>
                                <li>Arms, backs and seats are structurally reinforced</li>
                            </ul>
                            <Stack className="flex-column-reverse flex-md-row" gap={3}>
                                <Button as={Link} to="/products" className=" bg-secondary-color border-0 rounded-0 fw-semibold d-flex align-items-center justify-content-center flex-shrink-0">
                                    Shop Now
                                </Button>
                                {
                                    products && products.map((product, index) => {
                                        if (index === 0) {
                                            return (
                                                <Stack key={index} className="text-primary-color" >
                                                    <span className="text-overflow line-clamp-1 fw-semibold latest-trending-product-name">{product.name}</span>
                                                    <span>{product.price}</span>
                                                </Stack>
                                            )
                                        } else {
                                            return;
                                        }
                                    })
                                }
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Stack >

            <Container>
                <Stack className="trending-products mt-5 pt-5">
                    <h2 className="mb-5 fs-1 fw-bold text-center text-blue-700-color">Trending Products</h2>

                    <Row md={3} lg={4} className="justify-content-center g-4">
                        {
                            bestSellerProducts && bestSellerProducts.slice(0, 4).map((product, index) => {
                                return (
                                    <HomeProductCards key={index} product={product} styles={styles[0].trendingProductsStyles} />
                                )
                            })
                        }
                    </Row>
                    <Row xs={1} md={2} lg={3} className="justify-content-center g-4 mt-3">
                        <Col>
                            <Stack className="trending-product-offers-card bg-pink-200-color p-4 position-relative">
                                <span className="font-26 text-primary-color">23% off on Chairs</span>
                                <Link to="/products" className="font-16 font-lato fw-semibold text-secondary-color">Shop Now</Link>
                                <img
                                    className=" d-block img-fluid trending-product-offers-chair"
                                    src={process.env.PUBLIC_URL + '/assets/content/hekto-latest-trending-chair-offer.png'}
                                    alt={`hekto-latest-trending-chair-offer`}
                                />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack className="trending-product-offers-card bg-gray-400-color p-4 position-relative">
                                <span className="font-26 text-primary-color">50% off on Tv Units</span>
                                <Link to="/products" className="font-16 font-lato fw-semibold text-secondary-color">View Collection</Link>
                                <img
                                    className="d-block img-fluid trending-product-offers-tv"
                                    src={process.env.PUBLIC_URL + '/assets/content/hekto-latest-trending-tv-offer.png'}
                                    alt={`hekto-latest-trending-tv-offer`}
                                />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack className="trending-product-offers-card bg-green-200-color p-4 position-relative">
                                <span className="font-26 text-primary-color">70% off on Sofas</span>
                                <Link to="/products" className="font-16 font-lato fw-semibold text-secondary-color">View Sofas</Link>
                                <img
                                    className="d-block img-fluid trending-product-offers-tv w-50"
                                    src={process.env.PUBLIC_URL + '/assets/content/hekto-latest-trending-sofa-offer.png'}
                                    alt={`hekto-latest-trending-sofa-offer`}
                                />
                            </Stack>
                        </Col>
                    </Row>
                </Stack>

                <Stack className="mt-5 pt-5 discount-products-tab">
                    <h2 className="mb-0 fs-1 fw-bold text-center text-blue-700-color">Discounted Products</h2>

                    <DiscountProductsTabs />
                </Stack>
            </Container>

            <Stack className="mt-5 pt-5 newsletter-section justify-content-center align-items-center">
                <h5 className="fw-bold text-primary-color text-center">Get Latest Update By Subscribing to
                    <br className="d-none d-md-block" />&nbsp;0ur Newslater</h5>
                <Button as={Link} to="/products" className=" bg-secondary-color border-0 rounded-0 fw-semibold d-flex align-items-center justify-content-center mt-2">
                    Shop Now
                </Button>
            </Stack>

            <Container>
                <Stack className="home-blog-cards my-5 py-5">
                    <h2 className="mb-5 fs-1 fw-bold text-center text-blue-700-color">Latest Blogs</h2>

                    <Row xs={1} sm={2} md={3} className="justify-content-center g-4">
                        <BlogCards />
                    </Row >
                </Stack>
            </Container>
        </>
    )
}

export default Home;
