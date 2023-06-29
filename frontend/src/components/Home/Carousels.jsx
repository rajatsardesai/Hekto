import React from 'react';
import "./Carousels.css";
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Carousels = () => {
    const slides = [
        {
            image: '/assets/content/hekto-banner-1.jpg',
        },
        {
            image: '/assets/content/hekto-banner-2.jpg',
        },
        {
            image: '/assets/content/hekto-banner-3.jpg',
        }
    ];
    return (
        <>
            <Carousel className="home-carousel mb-5">
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + slide.image}
                            alt={`Slide ${index + 1}`}
                        />
                        <Carousel.Caption as={Container} className="text-dark text-start w-auto h-100 d-flex flex-column align-items-center align-items-lg-start justify-content-center overflow-hidden">
                            <span className="d-none d-lg-block text-secondary-color font-lato font-16 fw-bold mb-3">Best Furniture For Your Castle....</span>
                            <h1 className="fw-bold text-center text-lg-start">New Furniture Collection
                                <br className="d-none d-lg-block" />Trends in 2023</h1>
                            <p className="d-none d-lg-block font-lato font-16 fw-bold text-gray-100-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                <br className="d-none d-lg-block" />in phasellus non in justo.</p>
                            <Button as={Link} to="/products" className="my-0 my-md-2 bg-secondary-color border-0 rounded-0 fw-semibold">
                                Shop Now
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
};

export default Carousels
