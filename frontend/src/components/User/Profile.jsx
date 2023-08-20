import React, { useEffect, useState } from 'react';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import MetaData from '../MetaData';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import EditProfile from './EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../store/actions/userAction';
import { UPDATE_PROFILE_RESET } from '../../store/constants/userConstants';
import { useFormik } from "formik";
import { profileSchema } from '../../yupSchema';
import ProfilePassword from './EditProfilePassword';

const initialValues = {
    name: "",
    email: ""
};

const Profile = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector((state) => state.user);

    const { success, error, message, headerLoading } = useSelector(
        (state) => state.profile
    );

    // Form handling and validation -- Formik and Yup
    const { values, setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: profileSchema,
        onSubmit: values => {
            const updateForm = new FormData();

            updateForm.set("name", values.name);
            updateForm.set("email", values.email);

            dispatch(updateProfile(updateForm));
        },
        validateOnChange: true,
        validateOnBlur: true
    });

    // States to update name and email
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    //handle click to edit or save the name and email in form
    const handleEditClick = (value, updateValue) => {
        updateValue === values.name ?
            setIsEditingName(value) :
            setIsEditingEmail(value)
    }

    useEffect(() => {
        if (user) {
            setFieldValue('name', user.name);
            setFieldValue('email', user.email);
        }
        dispatch({
            type: UPDATE_PROFILE_RESET
        });
    }, [isAuthenticated, navigate, user, dispatch, setFieldValue]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Hekto Your Account"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success) &&
                <HeaderAlert key={message} error={error} message={message} />
            }

            {/* Profile */}
            <Container className="profile-container">
                <h3 className="my-4">Your account</h3>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-center"
                    >
                        <EditProfile label="Name" name="name" isEditing={isEditingName} value={values.name} handleEditClick={handleEditClick} errors={errors.name} touched={touched.name} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-center"
                    >
                        <EditProfile label="Email" name="email" isEditing={isEditingEmail} value={values.email} handleEditClick={handleEditClick} errors={errors.email} touched={touched.email} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Joined on:</div>
                            {String(user.createdAt).substr(0, 10)}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <ProfilePassword />
                    </ListGroup.Item>

                </ListGroup>
            </Container >
        </>
    )
}

export default Profile;
