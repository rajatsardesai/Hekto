import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/esm/Stack';
import MetaData from '../MetaData';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/actions/userAction';

const Login = () => {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const { userError, isAuthenticated } = useSelector(
        (state) => state.user
    );

    // Handle form validation (errors)
    const errorRef = useRef(null);
    const [validated, setValidated] = useState(false);

    // Handle login submit
    const dispatch = useDispatch();
    const loginSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        errorRef.current.textContent = userError;
        dispatch(login(loginEmail, loginPassword));
        setValidated(true);
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

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
                        <Card className="p-4">
                            <Card.Title className="fs-3 fw-normal mb-3">Sign in</Card.Title>
                            <Form noValidate validated={validated} onSubmit={loginSubmit}>
                                <Form.Group className="mb-3" controlId="loginEmail">
                                    <Form.Label className="fs-6 fw-bold mb-1">Email address</Form.Label>
                                    <Form.Control type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="loginPassword">
                                    <Form.Label className="fs-6 fw-bold mb-1">Password</Form.Label>
                                    <Form.Label className="float-end"><Link to={"/password/forgot"} className="text-decoration-none">Forgot Password</Link></Form.Label>
                                    <Form.Control type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                                    <Form.Control.Feedback type="invalid" ref={errorRef}>

                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="warning" type="submit" className="w-100 my-2">
                                    Sign in
                                </Button>
                                <p>By continuing, you agree to eBuy's Conditions of Use and Privacy Notice.</p>
                            </Form>
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
