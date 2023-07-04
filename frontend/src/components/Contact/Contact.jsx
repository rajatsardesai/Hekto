import React, { useState } from 'react';
import "./Contact.css";
import MetaData from '../MetaData';
import HeaderAlert from '../Header/HeaderAlert';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    const [contactAlert, setContactAlert] = useState("");

    const registerSubmit = (e) => {
        e.preventDefault();
        setContactAlert("Email Sent Successfully.");
        e.target.reset();
    };

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Contact Us: Shop Online in India for Furniture, Home Decor, Homeware Products @Hekto"} />

            {/* Header alert */}
            {
                (contactAlert) &&
                <HeaderAlert message={contactAlert} />
            }

            <Container>
                <h2 className="font-22 text-primary-color fw-bold my-5">Blogs</h2>
                <hr />
                <Row xs={1} lg={2} className="my-5 justify-content-center g-4">
                    <Col className="mb-4 mb-md-0">
                        <h2 className="font-26 text-primary-color fw-bold mb-4">Information About us</h2>
                        <p className="font-lato text-gray-100-color mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <Stack direction="horizontal" className="contact-info-circles" gap={2}>
                            <div className="bg-primary-color rounded-circle"></div>
                            <div className="bg-secondary-color rounded-circle"></div>
                            <div className="bg-green-100-color rounded-circle"></div>
                        </Stack>
                    </Col>
                    <Col>
                        <h2 className="font-26 text-primary-color fw-bold mb-4">Contact Way</h2>
                        <Stack gap={4} className="flex-column flex-md-row mb-4">
                            <Stack direction="horizontal" className="contact-way">
                                <Stack>
                                    <span className="d-block text-gray-100-color font-lato fw-semibold">Tel: (12345)67890</span>
                                    <span className="text-gray-100-color font-lato fw-semibold">E-Mail: shop@store.com</span>
                                </Stack>
                            </Stack>
                            <Stack direction="horizontal" className="contact-way">
                                <Stack>
                                    <span className="d-block text-gray-100-color font-lato fw-semibold">Support Forum</span>
                                    <span className="text-gray-100-color font-lato fw-semibold">For over 24hr</span>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack gap={4} className="flex-column flex-md-row">
                            <Stack direction="horizontal" className="contact-way">
                                <Stack>
                                    <span className="d-block text-gray-100-color font-lato fw-semibold">Basant Lok, Vasant Vihar,</span>
                                    <span className="text-gray-100-color font-lato fw-semibold">New Delhi, India</span>
                                </Stack>
                            </Stack>
                            <Stack direction="horizontal" className="contact-way">
                                <Stack>
                                    <span className="d-block text-gray-100-color font-lato fw-semibold">Free standard shipping</span>
                                    <span className="text-gray-100-color font-lato fw-semibold">on all orders.</span>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
                <Row xs={1} lg={2} className="my-5 py-5 justify-content-center g-4">
                    <Col className="mb-4 mb-md-0">
                        <h2 className="font-26 text-primary-color fw-bold mb-4">Get In Touch</h2>
                        <p className="font-lato text-gray-100-color mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <Form onSubmit={registerSubmit} className="mt-5">
                            <Row xs={1} md={2}>
                                <Form.Group as={Col} className="mb-4" controlId="contactName">
                                    <Form.Control type="text" required name="contactName" placeholder="Your name*" className="font-lato font-16" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-4" controlId="contactEmail">
                                    <Form.Control type="email" required name="contactEmail" placeholder="Your Email*" className="font-lato font-16" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-4" controlId="contactSubject">
                                <Form.Control type="text" required name="contactSubject" placeholder="Subject*" className="font-lato font-16" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="contactMessage">
                                <Form.Control as="textarea" rows={4} required name="contactMessage" placeholder="Type your message*" className="font-lato font-16" />
                            </Form.Group>
                            <Button type="submit" className="bg-secondary-color border-0 rounded-0 fw-semibold">
                                Send Mail
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/assets/content/hekto-contact-vector.png'}
                            alt={"heckto-contact-vector"}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;
