import React, { useState, memo } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updatePassword } from '../../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import { profilePasswordSchema } from '../../yupSchema';

const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
};

const EditProfilePassword = () => {
    const dispatch = useDispatch();

    //  States to update password
    const [isEditing, setIsEditing] = useState(false);

    //handle click to edit or save the passwords form
    const handlePasswordClick = (value) => {
        setTimeout(() => {
            setIsEditing(value);
        });
    }

    // Form handling and validation -- Formik and Yup
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: profilePasswordSchema,
        onSubmit: values => {
            const updateFormPassword = new FormData();

            updateFormPassword.set("oldPassword", values.oldPassword);
            updateFormPassword.set("newPassword", values.newPassword);
            updateFormPassword.set("confirmPassword", values.confirmNewPassword);

            dispatch(updatePassword(updateFormPassword));
        }
    });

    return (
        <>
            {
                !isEditing ?
                    <>
                        <div className="ms-md-2 me-md-auto mx-2">
                            <div className="fw-bold">Password:</div>
                            ********
                        </div>
                        <Button variant="secondary" onClick={() => handlePasswordClick(true)}>Change Password</Button>
                    </> :
                    <>
                        <Form onSubmit={handleSubmit} className="w-100">
                            <Form.Group className="mb-3">
                                <div className="ms-md-2 me-md-auto mx-2 mb-3">
                                    <Form.Control
                                        type="password"
                                        value={values.oldPassword}
                                        name="oldPassword"
                                        placeholder="Enter your old Password"
                                        onChange={handleChange} onBlur={handleBlur} isInvalid={touched.oldPassword && errors.oldPassword}
                                        aria-label="oldPassword"
                                        aria-describedby="oldPassword"
                                    />
                                    {
                                        errors.oldPassword && touched.oldPassword ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.oldPassword}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                    <Form.Control
                                        type="password"
                                        value={values.newPassword}
                                        name="newPassword"
                                        placeholder="Enter your new Password"
                                        className="my-3"
                                        onChange={handleChange} onBlur={handleBlur} isInvalid={touched.newPassword && errors.newPassword}
                                        aria-label="newPassword"
                                        aria-describedby="newPassword"
                                    />
                                    {
                                        errors.newPassword && touched.newPassword ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.newPassword}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                    <Form.Control
                                        type="password"
                                        value={values.confirmNewPassword}
                                        name="confirmNewPassword"
                                        placeholder="Enter your confirm Password"
                                        onChange={handleChange} onBlur={handleBlur} isInvalid={touched.confirmNewPassword && errors.confirmNewPassword}
                                        aria-label="confirmPassword"
                                        aria-describedby="confirmPassword"
                                    />
                                    {
                                        errors.confirmNewPassword && touched.confirmNewPassword ?
                                            <Form.Control.Feedback type="invalid">
                                                {errors.confirmNewPassword}
                                            </Form.Control.Feedback>
                                            : null
                                    }
                                </div>
                                <Button disabled={Object.keys(errors).length !== 0 ? true : false} variant="secondary" type="submit" onClick={() => handlePasswordClick(false)}>
                                    Save
                                </Button>
                            </Form.Group>
                        </Form>
                    </>
            }
        </>
    )
}

export default memo(EditProfilePassword);
