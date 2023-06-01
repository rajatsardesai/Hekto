import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/esm/Stack';
import Signup from './Signup';
import MetaData from '../MetaData';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // Handle login submit
    const loginSubmit = () => {
        console.log("LoginForm submitted");
    };

    // Handle register submit
    const [user, setUser] = useState({
        registerName: "",
        registerEmail: "",
        registerPassword: "",
    });

    const { registerName, registerEmail, registerPassword } = user;

    const [registerAvatar, setRegisterAvatar] = useState();
    const [registeravatarPreview, setRegisterAvatarPreview] = useState();

    const registerSubmit = (e) => {
        e.preventDefault();

        const registerForm = new FormData();

        registerForm.set("registerName", registerName);
        registerForm.set("registerEmail", registerEmail);
        registerForm.set("registerPassword", registerPassword);
        registerForm.set("registerAvatar", registerAvatar);

        console.log("Signup Form submitted");
    };

    const registerDataChange = (e) => {
        if (e.target.name === "registerAvatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setRegisterAvatarPreview(reader.result);
                    setRegisterAvatar(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    }

    return (
        <>
            {/* Title tag */}
            <MetaData title={"eBuy Sign In"} />

            {/* Login */}
            <div className="login-signup-page bg-white">
                <Container >
                    <div className="text-center">
                        <Image src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" className="my-3" />
                    </div>
                    <div className="login-signup-forms m-auto">
                        <Card className="p-3">
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal mb-3">Sign in</Card.Title>
                                <Card.Text>
                                    <Form onSubmit={loginSubmit}>
                                        <Form.Group className="mb-3" controlId="loginEmail">
                                            <Form.Label className="fs-6 fw-bold mb-1">Email address</Form.Label>
                                            <Form.Control type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="loginPassword">
                                            <Form.Label className="fs-6 fw-bold mb-1">Password</Form.Label>
                                            <Form.Label className="float-end"><Link to={"/password/forgot"} className="text-decoration-none">Forgot Password</Link></Form.Label>
                                            <Form.Control type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="warning" type="submit" className="w-100 my-2">
                                            Sign in
                                        </Button>
                                        <p>By continuing, you agree to eBuy's Conditions of Use and Privacy Notice.</p>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Stack direction="horizontal" className="justify-content-center mt-4">
                            <hr className="new-signup" />
                            <span className="text-secondary mx-3 font-14 text-nowrap">New to eBuy?</span>
                            <hr className="new-signup" />
                        </Stack>
                        <Button variant="outline-secondary" type="submit" className="my-2 w-100 text-dark">
                            <Link to={"/register"} className="text-decoration-none text-dark">Create your eBuy account</Link>
                        </Button>
                    </div>
                    <hr className="my-4" />
                    <p className="text-center">&copy; 2023, eBuy, Inc. or its affiliates</p>
                </Container>
            </div>
        </>
    )
}

export default Login;
