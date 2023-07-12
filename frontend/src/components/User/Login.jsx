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
import { useFormik } from "formik";
import { loginSchema } from '../../yupSchema';

const initialValues = {
    email: "",
    password: ""
};

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { isAuthenticated, success, error, message, headerLoading } = useSelector(
        (state) => state.user
    );

    // Checks auhentication on button click
    const [checkAuthentication, setCheckAuthentication] = useState(isAuthenticated);

    // Form handling and validation -- Formik and Yup
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: values => dispatch(login(values.email, values.password))
    });

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
                (error || success) && checkAuthentication &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Login */}
            <Stack className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Login</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">Please login using account details below.</span>
                        <Form noValidate onSubmit={handleSubmit} className="mt-5">
                            <Form.Group className="mb-4" controlId="email">
                                <Form.Control type="email" name="email" autoComplete="off" value={values.email} placeholder="Email address" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.email && errors.email} />
                                {
                                    errors.email && touched.email ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control type="password" name="password" value={values.password} autoComplete="off" placeholder="Password" className="font-lato font-16 mb-2" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.password && errors.password} />
                                {
                                    errors.password && touched.password ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                        : null
                                }
                                <Link to={"/password/forgot"} className="text-decoration-none text-gray-500-color font-lato font-17">Forgot your password?</Link>
                            </Form.Group>
                            <Button type="submit" className="w-100 my-4 bg-secondary-color border-0 rounded-1" onClick={() => setCheckAuthentication(true)}>
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
