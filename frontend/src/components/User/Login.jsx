import React, { useEffect, useState } from 'react';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/esm/Stack';
import MetaData from '../MetaData';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/actions/userAction';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const { isAuthenticated, success, error, message, headerLoading } = useSelector(
        (state) => state.user
    );

    // Handle login submit
    const dispatch = useDispatch();
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    // Redirect for shipping or home if logged in
    const redirect = location.search ? `/${location.search.split("=")[1]}` : "/";

    useEffect(() => {
        if (isAuthenticated) {
            navigate(redirect);
        }
    }, [isAuthenticated, navigate, redirect]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Log In"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success) && isAuthenticated &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Login */}
            <Stack className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Login</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">Please login using account details below.</span>
                        <Form onSubmit={loginSubmit} className="mt-5">
                            <Form.Group className="mb-4" controlId="loginEmail">
                                <Form.Control type="email" required value={loginEmail} placeholder="Email address" className="font-lato font-16" onChange={(e) => setLoginEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="loginPassword">
                                <Form.Control type="password" required autoComplete={loginPassword.toString()} value={loginPassword} placeholder="Password" className="font-lato font-16 mb-2" onChange={(e) => setLoginPassword(e.target.value)} />
                                <Link to={"/password/forgot"} className="text-decoration-none text-gray-500-color font-lato font-17">Forgot your password?</Link>
                            </Form.Group>
                            <Button type="submit" className="w-100 my-4 bg-secondary-color border-0 rounded-1">
                                Log in
                            </Button>
                            <p className="text-center text-gray-500-color font-lato font-17 m-0">Don't have an Account?<Link to={"/register"} className="text-decoration-none text-gray-500-color">Create account</Link></p>
                        </Form>
                    </Card>
                </Container>
            </Stack >
        </>
    )
}

export default Login;
