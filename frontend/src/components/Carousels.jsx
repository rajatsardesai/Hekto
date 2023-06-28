import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    return (
        <>
            <Carousel className="home-carousel mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + `/assets/style/banner1.jpg`}
                        alt="banner1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + `/assets/style/banner2.jpg`}
                        alt="banner2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + `/assets/style/banner3.jpg`}
                        alt="banner3"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
};

export default Carousels
