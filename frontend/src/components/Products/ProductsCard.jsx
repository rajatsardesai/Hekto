import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ReactStars from "react-rating-stars-component";

const ProductsCard = ({ product }) => {

    const productName = product.name.replace(/ /g, "-");

    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    return (
        <Link className="product-cards text-decoration-none" to={`/product/${productName}/${product._id}`}>
            <Col>
                <Card className="cards border-0">
                    <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto object-fit-cover" />
                    <Card.Body className="text-dark">
                        <Card.Title className="text-overflow fw-bold font-18 text-primary-color text-center">{product.name}</Card.Title>
                        <Stack className="align-items-center">
                            <ReactStars {...options} />
                            <span className="text-primary">{product.numberOfReviews} Reviews</span>
                        </Stack>
                        <Card.Text className="text-center font-20 text-secondary-color">
                            ₹{product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    )
}

export default ProductsCard
