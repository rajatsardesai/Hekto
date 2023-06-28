import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom"
import { resetPassword } from '../../store/actions/userAction';

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Handle forgot password form
    const resetPasswordSubmit = (e) => {
        e.preventDefault();
        const resetPasswordForm = new FormData();

        resetPasswordForm.set("password", password);
        resetPasswordForm.set("confirmPassword", confirmPassword);

        dispatch(resetPassword(token, resetPasswordForm));

        navigate("/login");
    };

    return (
        <>
            <div className="login-signup-page bg-white">
                <Container >
                    <div className="text-center">
                        <Image src={process.env.PUBLIC_URL + "/assets/style/logo.png"} alt="logo" className="my-3" />
                    </div>
                    <Card style={{ width: '22rem' }} className="m-auto p-3">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-normal mb-2">Create new password</Card.Title>
                            <p className="font-12">We'll ask for this password whenever you sign in.</p>
                            <Form onSubmit={resetPasswordSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-6 fw-bold mb-1">New Password</Form.Label>
                                    <Form.Control type="password" name="resetPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-6 fw-bold mb-1">Password again</Form.Label>
                                    <Form.Control type="password" name="resetPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant="warning" type="submit" className="w-100 my-2">
                                    Continue
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <ul style={{ width: '22rem' }} className="mx-auto my-4 p-0 list-style-position" >
                        <p className="mb-1">Secure password tips:</p>
                        <li className="font-12">Use at least 8 characters, a combination of numbers and letters is best.</li>
                        <li className="font-12">Do not use the same password you have used with us previously.</li>
                        <li className="font-12">Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
                        <li className="font-12">Do not use the same password for multiple online accounts.</li>
                    </ul>
                    <hr className="my-4" />
                    <p className="text-center">&copy; 2023, eBuy, Inc. or its affiliates</p>
                </Container>
            </div>
        </>
    )
}

export default ResetPassword
