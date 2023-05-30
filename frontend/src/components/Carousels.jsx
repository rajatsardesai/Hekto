import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = ({ banners }) => {
    return (
        <>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    src={banners}
                    alt="banner ad 1"
                />
            </Carousel.Item>
        </>
    )
}

export default Carousels
