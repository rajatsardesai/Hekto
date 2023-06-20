import React from 'react';
import "./OrderSuccess.css"
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

const OrderSucess = () => {
    return (
        <>
            <Stack className="justify-content-center align-items-center h-60vh">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" className="mx-auto">
                    <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
                <span className="text-success text-center font-18 my-3">Your order has been placed successfully.</span>
                <Link to={"/orders"}><Button className="font-lato font-14 fw-bold bg-green-100-color border-0 rounded-0 p-2 mb-2">View Order</Button></Link>
            </Stack>
        </>
    )
}

export default OrderSucess;
