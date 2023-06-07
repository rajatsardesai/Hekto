import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/userAction';

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const { message } = useSelector((state) => state.forgotPassword);

    const [email, setEmail] = useState("");

    // Handle forgot password form
    const forgotPasswordSubmit = (e) => {
        e.preventDefault();
        const forgotPasswordForm = new FormData();

        forgotPasswordForm.set("email", email);

        dispatch(forgotPassword(forgotPasswordForm));
    };

    return (
        <>
            <div className="login-signup-page bg-white">
                <Container >
                    <div className="text-center">
                        <Image src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" className="my-3" />
                    </div>
                    <Card style={{ width: '22rem' }} className="m-auto p-3">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-normal mb-2">Password assistance</Card.Title>
                            <p className="font-12">Enter the email address associated with your eBuy account.</p>
                            <Form onSubmit={forgotPasswordSubmit}>
                                <Form.Group className="mb-3" controlId="registerEmail">
                                    <Form.Label className="fs-6 fw-bold mb-1">Email address</Form.Label>
                                    <Form.Control type="email" name="registerEmail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Button variant="warning" type="submit" className="w-100 my-2">
                                    Continue
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <hr className="my-4" />
                    <p className="text-center">&copy; 2023, eBuy, Inc. or its affiliates</p>
                </Container>
            </div>
        </>
    )
}

export default ForgotPassword;
