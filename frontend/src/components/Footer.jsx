import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-400-color mt-5">
                <Container className="py-5">
                    <Row>
                        <Col sm={12} md={3} lg={4} className="text-center text-md-start mb-5 mb-md-0">
                            <h3 as={Link} to={'/'} className="fs-2 fw-bold mb-3">Hekto</h3>
                            <span className="d-block text-gray-100-color font-lato font-lato">Contact Info</span>
                            <span className="text-gray-100-color font-lato font-lato">Basant Lok, Vasant Vihar, New Delhi, India</span>
                        </Col>
                        <Col sm={12} md={3} lg={2} className="text-center text-md-start mb-5 mb-md-0">
                            <p className="text-dark font-22 mb-4">Catagories</p>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Sofas</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Beds</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Wardrobes</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Dressing Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Dining Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Study Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Chairs</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">TV and Media Units</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md={3} lg={2} className="text-center text-md-start mb-5 mb-md-0">
                            <p className="text-dark font-22 mb-4 text-nowrap">Customer Care</p>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/account"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">My Account</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Discount</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/orders"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Orders History</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md="auto" className="text-center text-md-start">
                            <p className="text-dark font-22 mb-4">Pages</p>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Products</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/blogs"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Blogs</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/contact"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Contact</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <footer className="footer-social-media bg-gray-600-color py-3">
                <Container>
                    <Stack className="flex-column flex-md-row justify-content-between align-items-center">
                        <span className="font-lato font-semibold text-gray-100-color mb-3 mb-md-0">&copy;Webecy - All Rights Reserved</span>
                        <Stack direction="horizontal" className="justify-content-center">
                            <Link to="https://www.facebook.com" target="_blank">
                                <img src={process.env.PUBLIC_URL + "/assets/style/fb-icon.svg"} alt="fb-icon" className="me-2" />
                            </Link>
                            <Link to="https://www.instagram.com" target="_blank">
                                <img src={process.env.PUBLIC_URL + "/assets/style/insta-icon.svg"} alt="insta-icon" className="me-2" />
                            </Link>
                            <Link to="https://www.twitter.com" target="_blank">
                                <img src={process.env.PUBLIC_URL + "/assets/style/tweet-icon.svg"} alt="tweet-icon" />
                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </footer>
        </>
    )
}

export default Footer
