import React, { memo } from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import { State } from "country-state-city";

const ShippingAddressInfo = memo((props) => {

    const { values, handleChange, handleBlur, touched, errors } = props;

    return (
        <>
            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Shipping address</h5>
            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.address && errors.address} aria-label="address" aria-describedby="address" />
                {
                    errors.address && touched.address ?
                        <Form.Control.Feedback type="invalid">
                            {errors.address}
                        </Form.Control.Feedback>
                        : null
                }
            </Form.Group>
            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                <Form.Group className="mb-3 w-100" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.city && errors.city} aria-label="city" aria-describedby="city" />
                    {
                        errors.city && touched.city ?
                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>
                <Form.Group className="w-100" name="state" value={values.state} controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Select aria-label="Select State" onChange={handleChange} onBlur={handleBlur} isInvalid={touched.state && errors.state} aria-describedby="state">
                        <option>State</option>
                        {
                            State &&
                            State.getStatesOfCountry("IN").map(item =>
                                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                            )
                        }
                    </Form.Select>
                    {
                        errors.state && touched.state ?
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>
            </Stack>
            <Stack className="flex-column flex-md-row my-4" gap={3}>
                <Form.Group className="w-100" controlId="landmark">
                    <Form.Label>Landmark (optional)</Form.Label>
                    <Form.Control type="text" name="landmark" value={values.landmark} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.landmark && errors.landmark} aria-label="address" aria-describedby="address" />
                    {
                        errors.landmark && touched.landmark ?
                            <Form.Control.Feedback type="invalid">
                                {errors.landmark}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>
                <Form.Group className="w-100" controlId="pinCode">
                    <Form.Label>Pin code</Form.Label>
                    <Form.Control type="text" name="pinCode" value={values.pinCode} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.pinCode && errors.pinCode} aria-label="pinCode" aria-describedby="pinCode" />
                    {
                        errors.pinCode && touched.pinCode ?
                            <Form.Control.Feedback type="invalid">
                                {errors.pinCode}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>
            </Stack>
        </>
    )
});

export default ShippingAddressInfo;
