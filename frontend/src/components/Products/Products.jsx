import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ReactStars from "react-rating-stars-component";

const Products = ({ product }) => {
    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    }
    return (
        <Link className="product-card text-decoration-none" to={product._id}>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto" />
                        <Card.Body className="text-dark">
                            <Card.Title>{product.name}</Card.Title>
                            <div className="d-flex align-items-center">
                                <ReactStars {...options} /><span className="ms-2">({product.numberOfReviews} Reviews)</span>
                            </div>
                            <Card.Text>
                                $<span className="fs-4">{product.price}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Link>
    )
}

export default Products
