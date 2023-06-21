import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CartTotals from './CartTotals';
import CartItems from './CartItems';
import { createOrder } from '../../store/actions/orderAction';

const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef(null);

    const { shippingInfo, cartItems } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);

    const paymentData = {
        amount: Math.round(orderInfo.grandTotal * 100)
    };

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemPrice: orderInfo.totalPrice,
        taxPrice: orderInfo.gstPrice,
        shippingPrice: orderInfo.shippingPrice,
        totalPrice: orderInfo.grandTotal
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        payBtn.current.disabled = true;

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "/api/v1/payment/process",
                paymentData,
                config
            );

            const client_secret = data.client_secret;

            if (!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: shippingInfo.address,
                            city: shippingInfo.city,
                            state: shippingInfo.state,
                            postal_code: shippingInfo.pinCode
                        }
                    }
                },
            });

            if (result.error) {
                payBtn.current.disabled = false;
            } else {
                if (result.paymentIntent.status === "succeeded") {
                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status
                    };
                    dispatch(createOrder(order));
                    navigate("/success");
                }
            }
        } catch (error) {
            payBtn.current.disabled = false;
        }
    };

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col lg={8} className="mb-5 pe-md-5">
                        <h5 className="fw-bold font-20 text-blue-500-color mb-4">Payment</h5>
                        <Form className="bg-gray-300-color px-4 py-5" onSubmit={(e) => submitHandler(e)}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Contact Information</h5>
                            <span className="fw-bold font-16">{user.name}</span>
                            <p className="font-16 m-0">{shippingInfo.address}, {shippingInfo.landmark ? `${shippingInfo.landmark},` : ""} {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.pinCode}</p>
                            <p className="font-16 m-0">+91 {shippingInfo.phoneNo}</p>
                            <p className="font-16 mb-5">{user.email}</p>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Card Details</h5>
                            <Form.Group className="mb-3" controlId="cardNumber">
                                <Form.Label>Card Number</Form.Label>
                                <CardNumberElement className="form-control py-2" />
                            </Form.Group>
                            <Stack className="flex-column flex-md-row" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="cardExpiry">
                                    <Form.Label>Card Expiry</Form.Label>
                                    <CardExpiryElement className="form-control py-2" />
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="cardCVV">
                                    <Form.Label>Card CVV</Form.Label>
                                    <CardCvcElement className="form-control py-2" />
                                </Form.Group>
                            </Stack>
                            <Button type="submit" className="w-100 font-lato font-14 fw-bold bg-green-100-color border-0 p-2 mb-2" ref={payBtn}>Pay ₹{orderInfo && orderInfo.grandTotal}</Button>
                        </Form>
                    </Col>

                    <Col lg={4}>
                        <h5 className="fw-bold font-20 text-blue-500-color text-center mb-4">Order Summary</h5>
                        {
                            cartItems && cartItems.map(item => {
                                return (
                                    <CartItems key={item.product} item={item} />
                                )
                            })
                        }
                        <CartTotals cartItems={cartItems} totalPrice={orderInfo.totalPrice} shippingPrice={orderInfo.shippingPrice} gstPrice={orderInfo.gstPrice} grandTotal={orderInfo.grandTotal} />
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Payment;
