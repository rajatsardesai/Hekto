import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const Payment = () => {

    const submitHandler = () => {

    };

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col lg={8} className="mb-5 pe-md-5">
                        <Form onSubmit={(e) => submitHandler(e)}>
                            <Form.Group className="mb-3" controlId="cardNumber">
                                <Form.Label>Card Number</Form.Label>
                                <CardNumberElement />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cardExpiry">
                                <Form.Label>Card Expiry</Form.Label>
                                <CardExpiryElement />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cardCVV">
                                <Form.Label>Card CVV</Form.Label>
                                <CardCvcElement />
                            </Form.Group>
                            <Button type="submit" className="w-100 font-lato font-14 fw-bold bg-green-100-color border-0 p-2 mb-2">Pay now</Button>
                        </Form>
                    </Col>

                    <Col lg={4}>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Payment;
