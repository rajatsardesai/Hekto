import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProfile = (props) => {
    const { label, name, isEditing, value, handleEditClick, errors, touched, handleBlur, handleChange, handleSubmit }
        = props;

    return (
        <>
            {!isEditing ?
                <>
                    <div className="ms-md-2 me-md-auto mx-2 text-truncate">
                        <div className="fw-bold">{label}:</div>
                        {value}
                    </div>
                    <Button variant="secondary" onClick={() => handleEditClick(true, value)}>Edit</Button>
                </>
                :
                <>
                    <div className="ms-md-2 me-md-auto mx-2">
                        <Form.Control
                            type="text"
                            value={value}
                            name={name}
                            onChange={handleChange} onBlur={handleBlur} isInvalid={touched && errors}
                            aria-label={label}
                            aria-describedby={label}
                        />
                        {
                            errors && touched ?
                                <Form.Control.Feedback type="invalid">
                                    {errors}
                                </Form.Control.Feedback>
                                : null
                        }
                    </div>
                    <Button disabled={errors ? true : false} variant="secondary" type="submit" onClick={() => {
                        handleEditClick(false, value)
                        handleSubmit();
                    }}>
                        Save
                    </Button>
                </>
            }
        </>
    )
}

export default EditProfile;
