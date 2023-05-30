import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/esm/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactStars from "react-rating-stars-component";

const categories = [
    "Laptops",
    "Home & Kitchen",
    "Accessories",
    "Fashion",
    "Electronics",
    "Cameras",
    "Smartphones",
    "Smartwatches",
];

const ProductFilters = (props) => {
    const { price, setPrice, setCategory, setRatings } = props;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSelection = (index) => {
        setActiveIndex(index);
    };

    const priceHandler = (event) => {
        setPrice(event.target.value);
    }

    const handleRatings = (value) => {
        setRatings(value);
    };

    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <>
            {/* Category filter */}
            <Form.Label className="fs-6 fw-bold">Category</Form.Label>
            <ListGroup as="ul">
                {
                    categories.map((category, index) => {
                        return (
                            <ListGroup.Item key={index} as="li" className={`border-0 cursor-pointer py-1 ${activeIndex === index ? 'fw-bold' : ''}`} onClick={() => {
                                setCategory(category);
                                handleSelection(index);
                            }}>{category}</ListGroup.Item>
                        )
                    })
                }
            </ListGroup>

            {/* Price filter */}
            <Form.Label className="mt-5 fs-6 fw-bold">Price</Form.Label>
            <Form.Range min={0} max={50000} value={price} onChange={priceHandler} />
            <Stack direction="horizontal" className="justify-content-between">
                <Form.Label className="fs-6">₹0</Form.Label>
                <Form.Label className="fs-6">₹{price}</Form.Label>
            </Stack>

            {/* Rating filter */}
            <Form.Label className="mt-5 fs-6 fw-bold">Avg. Customer Review</Form.Label>
            <div className="d-flex cursor-pointer" onClick={() => {
                handleRatings(4);
                handleSelection(3);
            }}>
                < ReactStars {...options} value={4} /> <span className={`mx-2 fs-6 ${activeIndex === 3 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => {
                handleRatings(3);
                handleSelection(2);
            }}>
                < ReactStars {...options} value={3} /> <span className={`mx-2 fs-6 ${activeIndex === 2 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => {
                handleRatings(2);
                handleSelection(1);
            }}>
                < ReactStars {...options} value={2} /> <span className={`mx-2 fs-6 ${activeIndex === 1 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => {
                handleRatings(1);
                handleSelection(0);
            }}>
                < ReactStars {...options} value={1} /> <span className={`mx-2 fs-6 ${activeIndex === 0 ? 'fw-bold' : ''}`}>& up</span>
            </div>
        </>
    )
}

export default ProductFilters
