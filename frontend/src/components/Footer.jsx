import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
    return (
        <section className="bg-secondary">
            <Container className="py-5">
                <Row>
                    <Col sm={12} md={3} className="text-center text-md-start mb-5 mb-md-0">
                        <h6 className="text-light">Get to Know Us</h6>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">About Us</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14"> <a href="/" className="d-block text-decoration-none text-light">Careers</a></ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Press Releases</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14"><a href="/" className="d-block text-decoration-none text-light">Mc-shopee Science</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={3} className="text-center text-md-start mb-5 mb-md-0">
                        <h6 className="text-light">Connect with Us</h6>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Facebook</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14"> <a href="/" className="d-block text-decoration-none text-light">Twitter</a></ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Instagram</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={3} className="text-center text-md-start mb-5 mb-md-0">
                        <h6 className="text-light">Make Money with Us</h6>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Sell on Mc-shopee</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14"> <a href="/" className="d-block text-decoration-none text-light">Sell under Mc-shopee Accelerator</a></ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Protect and Build Your Brand</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Become an Affiliate</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Advertise Your Products</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={3} className="text-center text-md-start">
                        <h6 className="text-light">Let Us Help You</h6>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">COVID-19 and Mc-shopee</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14"> <a href="/" className="d-block text-decoration-none text-light">Your Account</a></ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Returns Centre</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">100% Purchase Protection</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Amazon App Download</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="border-0 bg-transparent p-0 mb-2 font-14">
                                <a href="/" className="d-block text-decoration-none text-light">Help</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
