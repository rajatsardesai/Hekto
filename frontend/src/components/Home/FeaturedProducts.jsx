import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ product }) => {
    return (
        <>
            <Card className="cards text-decoration-none border-0" as={Link} to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto h-50 object-fit" />
                <Card.Body className="text-dark">
                    <Card.Title className="text-overflow fw-normal fs-6">{product.name}</Card.Title>
                    <Stack direction="horizontal" gap={3}>
                        <span className="text-primary">{product.numberOfReviews} Reviews</span>
                    </Stack>
                    <Card.Text>
                        <sup className="fs-6">₹</sup><span className="fs-4">{product.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default FeaturedProducts;
