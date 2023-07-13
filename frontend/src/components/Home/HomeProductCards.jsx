import React from 'react';
import "./HomeProductCards.css";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/esm/Stack';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';

const HomeProductCards = ({ product, styles }) => {

    const options = {
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <>
            {
                product ?
                    styles && styles.map((style, index) => {
                        return (
                            <Col key={index}>
                                <Card className="home-product-cards text-decoration-none border-0 card-shadow p-0 font-lato text-center mx-auto" as={Link} to={`/product/${product._id}`}>
                                    <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto object-fit-contain" />
                                    <Card.Body className="text-dark">
                                        <Card.Title className={`text-overflow fw-bold  my-2 ${style.cardTitleColor} ${style.cardTitleSize}`}>{product.name}</Card.Title>
                                        <Stack className="home-product-stars">
                                            <ReactStars {...options} value={product.ratings} edit={false} />
                                        </Stack>
                                        <Card.Text>
                                            ₹<span className={`${style.cardTextColor} ${style.cardTextSize}`}>{product.price}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    :
                    <span className="text-center text-dark font-20">No products to show</span>
            }
        </>
    )
}

export default HomeProductCards;
