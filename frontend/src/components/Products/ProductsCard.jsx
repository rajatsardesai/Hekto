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
        <Link className="product-card text-decoration-none" to={`/product/${product._id}`}>
            <Col className="h-100">
                <Card className="h-100">
                    <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto" />
                    <Card.Body className="text-dark">
                        <Card.Title>{product.name}</Card.Title>
                        <Stack direction="horizontal" gap={3}>
                            <ReactStars {...options} />
                            <span className="text-primary">{product.numberOfReviews} Reviews</span>
                        </Stack>
                        <Card.Text>
                            $<span className="fs-4">{product.price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    )
}

export default ProductsCard
