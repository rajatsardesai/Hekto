import React, { memo } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/esm/Stack';

const PriceFilterItem = memo(({ price, setPrice }) => {

    // Price filter handler
    const priceHandler = (event) => {
        setPrice(event.target.value);
    }

    return (
        <>
            <Form.Label className="mt-5 font-20 fw-bold text-primary-color text-decoration-underline">Price</Form.Label>
            <Form.Range min={0} max={50000} value={price} onChange={priceHandler} aria-label="price-range" />
            <Stack direction="horizontal" className="justify-content-between">
                <Form.Label className="font-lato text-gray-500-color">₹0</Form.Label>
                <Form.Label className="font-lato text-gray-500-color">₹{price}</Form.Label>
            </Stack>
        </>
    )
});

export default PriceFilterItem;
