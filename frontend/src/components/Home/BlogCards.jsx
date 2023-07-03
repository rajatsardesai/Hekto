import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';

const BlogCards = () => {

    const data = [
        {
            image: "/assets/content/hekto-home-blog-1.png"
        },
        {
            image: "/assets/content/hekto-home-blog-2.png"
        },
        {
            image: "/assets/content/hekto-home-blog-3.png"
        }
    ]

    return (
        <>
            {
                data && data.map((item, index) => {
                    return (
                        <Col key={index}>
                            <Card className="text-decoration-none border-0 card-shadow p-0 mx-auto mx-md-2">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} alt={"blogs"} className="card-image m-auto object-fit-contain" />
                                <Card.Body className="text-dark p-4">
                                    <Card.Title className="text-overflow font-18 fw-bold text-primary-color my-2">Top esssential Trends in 2023</Card.Title>
                                    <Card.Text className="font-lato text-gray-100-color">
                                        More off this less hello samlande lied much over tightly circa horse taped mightly
                                        <Link to={"/products"} className="text-primary-color d-block mt-3">Read More</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}

export default BlogCards;
