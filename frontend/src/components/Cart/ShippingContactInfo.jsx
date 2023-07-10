import React, { memo } from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';

const ShippingContactInfo = memo((props) => {

    const { user, values, handleChange, handleBlur, touched, errors } = props;

    return (
        <>
            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Contact Information</h5>
            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                <Form.Group className="mb-3 w-100" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled type="text" placeholder={user.name} />
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control disabled type="email" placeholder={user.email} />
                </Form.Group>
            </Stack>
            <Form.Group className="mb-5" controlId="phoneNo">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" maxLength={10} name="phoneNo" value={values} onChange={handleChange} onBlur={handleBlur} isInvalid={touched && errors} aria-label="phoneNo" aria-describedby="phoneNo" />
                {
                    errors && touched ?
                        <Form.Control.Feedback type="invalid">
                            {errors}
                        </Form.Control.Feedback>
                        : null
                }
            </Form.Group>
        </>
    )
});

export default ShippingContactInfo;
