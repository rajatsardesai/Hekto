import React from 'react';
import "./HomeProductCards.css";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/esm/Stack';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const HomeProductCards = ({ product }) => {

    const options = {
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <>
            <Card className="home-product-cards text-decoration-none border-0 card-shadow p-0 font-lato text-center mx-2" as={Link} to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto object-fit" />
                <Card.Body className="text-dark">
                    <Card.Title className="text-overflow font-18 fw-bold text-secondary-color my-2">{product.name}</Card.Title>
                    <Stack className="home-product-stars">
                        <ReactStars {...options} value={product.ratings} edit={false} />
                    </Stack>
                    <Card.Text>
                        ₹<span className="font-17 text-blue-300-color">{product.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default HomeProductCards;
