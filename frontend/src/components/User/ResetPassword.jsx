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
import { useNavigate, useParams } from "react-router-dom"
import { resetPassword } from '../../store/actions/userAction';
import { useFormik } from "formik";
import { resetPassSchema } from '../../yupSchema';

const initialValues = {
    password: "",
    confirmPassword: "",
};

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useParams();

    const { loading, error, success, message, headerLoading } = useSelector((state) => state.forgotPassword);

    // Form handling and validation -- Formik and Yup
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: resetPassSchema,
        onSubmit: values => {
            const resetPasswordForm = new FormData();

            resetPasswordForm.set("password", values.password);
            resetPasswordForm.set("confirmPassword", values.confirmPassword);

            dispatch(resetPassword(token, resetPasswordForm));
            navigate("/login");
        }
    });

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Reset Password"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success || loading) &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Forgot Password? */}
            <Stack className="users-page my-5 py-5">
                <Container >
                    <Card className="p-3 p-md-5 border-0 card-shadow">
                        <Card.Title className="fw-bold mb-1 text-center">Create new password</Card.Title>
                        <span className="text-center text-gray-500-color font-lato font-17">We'll ask for this password whenever you sign in.</span>
                        <Form onSubmit={handleSubmit} className="mt-5">
                            <Form.Group controlId="password" className="mb-4">
                                <Form.Control type="password" name="password" value={values.password} autoComplete="off" placeholder="Password" className="font-lato font-16 mb-2" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.password && errors.password} />
                                {
                                    errors.password && touched.password ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Form.Group controlId="confirmPassword">
                                <Form.Control type="password" name="confirmPassword" value={values.confirmPassword} autoComplete="off" placeholder="Confirm Password" className="font-lato font-16 mb-2" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.confirmPassword && errors.confirmPassword} />
                                {
                                    errors.confirmPassword && touched.confirmPassword ?
                                        <Form.Control.Feedback type="invalid">
                                            {errors.confirmPassword}
                                        </Form.Control.Feedback>
                                        : null
                                }
                            </Form.Group>
                            <Button type="submit" className="w-100 my-4 bg-secondary-color border-0 rounded-1">
                                Continue
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </Stack>
        </>
    )
}

export default ResetPassword
