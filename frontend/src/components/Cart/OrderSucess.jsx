import React, { useEffect } from 'react';
import "./OrderSuccess.css"
import MetaData from '../MetaData';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RESET_CART } from '../../store/constants/cartConstants';

const OrderSucess = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: RESET_CART });
        localStorage.removeItem("cartItems");
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={`Order Complete -@Hekto`} />

            {/* Order Success */}
            <Stack className="order-success justify-content-center align-items-center h-100vh">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" className="mx-auto">
                    <circle className="path circle" fill="none" stroke="#fb2e86" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="53.1" />
                    <polyline className="path check" fill="none" stroke="#fb2e86" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
                <h2 className="text-primary-color text-center font-35 fw-bold my-3">Your Order Is Completed!</h2>
                <p className="text-gray-100-color font-lato fw-semibold text-center mb-5">Thank you for your order! Your order is being processed and will be completed within 3-6
                    <br className="d-none d-md-block" />
                    hours. You will receive an email confirmation when your order is completed.
                </p>
                <Button as={Link} to="/products" className="font-lato fw-semibold bg-secondary-color border-0 rounded-0 text-nowrap p-4 mb-2 d-flex align-items-center justify-content-center">Continue Shopping</Button>
            </Stack>
        </>
    )
}

export default OrderSucess;
