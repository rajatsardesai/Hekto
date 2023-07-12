import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Sidebar from './Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USER_RESET } from '../../store/constants/userConstants';
import { getUserDetails, updateUser } from '../../store/actions/userAction';
import { useFormik } from "formik";
import { updateUserSchema } from '../../yupSchema';

const initialValues = {
    name: "",
    email: "",
    role: "",
};

const UpdateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { headerLoading: userDetailsHeaderLoading, error: userDetailsError, message: userDetailsMessage, user } = useSelector(state => state.userDetails);
    const { headerLoading: updateHeaderLoading, error: updateError, message: updateMessage, isUpdated } = useSelector(state => state.profile);

    // Form handling and validation -- Formik and Yup
    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: updateUserSchema,
        onSubmit: values => {
            const newUserForm = new FormData();

            newUserForm.set("name", values.name);
            newUserForm.set("email", values.email);
            newUserForm.set("role", values.role);

            dispatch(updateUser(id, newUserForm));
        }
    });

    useEffect(() => {
        if (user && user._id !== id) {
            dispatch(getUserDetails(id));
        } else {
            setFieldValue("name", user.name);
            setFieldValue("email", user.email);
            setFieldValue("role", user.role);
        };

        if (isUpdated) {
            setTimeout(() => {
                navigate("/admin/users");
                dispatch({ type: UPDATE_USER_RESET });
            }, 5000);
        }
    }, [navigate, dispatch, isUpdated, updateError, id, user, setFieldValue]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Update User - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={userDetailsHeaderLoading || updateHeaderLoading} />

            {/* Header alert */}
            {
                (userDetailsError || updateError || isUpdated) &&
                <HeaderAlert error={userDetailsError || updateError} message={userDetailsMessage || updateMessage} />
            }

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" onSubmit={handleSubmit}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Update User</h5>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={values.name} className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.name && errors.name} />
                                    {
                                        errors.name && touched.name ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={values.email} className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.email && errors.email} />
                                    {
                                        errors.email && touched.email ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </Form.Group>
                            </Stack>
                            <Form.Select name="role" value={values.role} className="font-lato font-16" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.role && errors.role} aria-label="Choose role">
                                <option>Choose role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Select>
                            <Stack className="flex-column flex-md-row mt-4" gap={2}>
                                <Button type="submit" className="bg-secondary-color border-0 py-2 px-3 rounded-0" disabled={values.role === "" ? true : false}>Update</Button>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateUser;
