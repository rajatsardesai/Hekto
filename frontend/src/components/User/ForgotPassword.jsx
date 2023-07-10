import React from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/userAction';
import { useFormik } from "formik";
import { forgotPassSchema } from '../../yupSchema';

const initialValues = {
    email: ""
};

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const { error, isResetPassword, message, headerLoading } = useSelector((state) => state.forgotPassword);

    // Form handling and validation -- Formik and Yup
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: forgotPassSchema,
        onSubmit: values => dispatch(forgotPassword(values.email))
    });

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Forgot Password"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || isResetPassword) &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Forgot Password? */}
            <Stack className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Forgot Password?</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">Please enter your registered email address below.</span>
                        <Form onSubmit={handleSubmit} className="mt-5">
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
                            <Button type="submit" className="w-100 my-4 bg-secondary-color border-0 rounded-1">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </Stack>
        </>
    )
}

export default ForgotPassword;
