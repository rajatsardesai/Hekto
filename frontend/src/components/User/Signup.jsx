import React, { useEffect, useState } from 'react';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MetaData from '../MetaData';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signupSchema } from '../../yupSchema';

const initialValues = {
    name: "",
    email: "",
    password: "",
    avatar: process.env.PUBLIC_URL + "/assets/style/profile.png",
    avatarPreview: process.env.PUBLIC_URL + "/assets/style/profile.png",
};

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, success, error, message, headerLoading } = useSelector(
        (state) => state.user
    );

    // Checks auhentication on button click
    const [checkAuthentication, setCheckAuthentication] = useState(isAuthenticated);

    // Form handling and validation -- Formik and Yup
    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: values => {
            const registerForm = new FormData();

            registerForm.set("name", values.name.trim());
            registerForm.set("email", values.email.trim().toLowerCase());
            registerForm.set("password", values.password);
            registerForm.set("avatar", values.avatar);

            dispatch(register(registerForm));
        }
    });

    // Handle avatar data change
    const handleAvatarChange = (e) => {
        try {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setFieldValue('avatar', reader.result);
                    setFieldValue('avatarPreview', reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } catch (error) {
            return <HeaderAlert error={true} message={"File size exceeds 1mb."} />;
        }
    };

    useEffect(() => {
        if (success) {
            navigate('/');
        }
    }, [success, navigate]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Sign Up"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success || loading) && checkAuthentication &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Signup */}
            <div className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Create Account</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">Join Hekto today for exciting offers.</span>
                        <Form encType="multipart/form-data" onSubmit={handleSubmit} className="mt-5">
                            <Form.Group className="mb-4" controlId="name">
                                <Form.Control type="text" name="name" value={values.name} placeholder="Your name" autoComplete="off" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.name && errors.name} />
                                {
                                    errors.name && touched.name ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="email">
                                <Form.Control type="email" name="email" value={values.email} autoComplete="off" placeholder="Email address" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.email && errors.email} />
                                {
                                    errors.email && touched.email ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="password">
                                <Form.Control type="password" autoComplete="off" name="password" value={values.password} placeholder="Password" className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.password && errors.password} />
                                {
                                    errors.password && touched.password ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="avatar">
                                <Stack direction="horizontal" className="register-image">
                                    <img src={values.avatarPreview} alt="Avatar Preview" className="me-2 rounded-circle" />
                                    <Form.Control type="file" name="avatar" accept="image/*" placeholder="Upload your Avatar" className="font-lato font-16" onChange={handleAvatarChange} onBlur={handleBlur} isInvalid={touched.avatar && errors.avatar} />
                                </Stack>
                                <span className="text-gray-500-color font-lato font-15">*Image size should not exceed 1mb</span>
                                {
                                    errors.avatar && touched.avatar ?
                                        <Form.Control.Feedback type="invalid" className="d-block">
                                            {errors.avatar}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Button type="submit" onClick={() => setCheckAuthentication(true)} className="w-100 my-4 bg-secondary-color border-0 rounded-1">
                                Create Account
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default Signup
