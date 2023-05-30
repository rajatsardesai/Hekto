import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ReactStars from "react-rating-stars-component";

const ProductsCard = ({ product }) => {
    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    return (
        <Link className="product-cards text-decoration-none" to={`/product/${product._id}`}>
            <Col className="">
                <Card className="cards">
                    <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto h-50 object-fit" />
                    <Card.Body className="text-dark">
                        <Card.Title className="text-overflow fw-normal fs-6">{product.name}</Card.Title>
                        <Stack direction="horizontal" gap={3}>
                            <ReactStars {...options} />
                            <span className="text-primary">{product.numberOfReviews} Reviews</span>
                        </Stack>
                        <Card.Text>
                            <sup className="fs-6">₹</sup><span className="fs-4">{product.price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    )
}

export default ProductsCard
