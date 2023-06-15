import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { State } from "country-state-city";
import CartTotals from './CartTotals';
import { saveShippingInfo } from '../../store/actions/cartAction';

const Shipping = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submitButtonRef = useRef();

    const { shippingInfo, cartItems } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [landmark, setLandmark] = useState(shippingInfo.landmark);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shippingPrice = 0;
    const gstPrice = (totalPrice / 50);
    const grandTotal = totalPrice + shippingPrice + gstPrice;

    const shippingSubmit = (e) => {
        e.preventDefault();
        const data = {
            totalPrice,
            shippingPrice,
            gstPrice,
            grandTotal
        };
        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        dispatch(saveShippingInfo({ address, city, state, landmark, pinCode, phoneNo }));
        navigate("/process/payment");
    }


    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col lg={8} className="mb-5 pe-md-5">
                        <h5 className="fw-bold font-20 text-blue-500-color mb-4">Checkout</h5>
                        <Form className="bg-gray-300-color px-4 py-5" onSubmit={shippingSubmit}>
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
                            <Form.Group className="mb-5 w-50" controlId="phoneNo">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                            </Form.Group>

                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Shipping address</h5>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="w-100" value={state} controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Select State" onChange={(e) => setState(e.target.value)}>
                                        <option>State</option>
                                        {
                                            State &&
                                            State.getStatesOfCountry("IN").map(item => {
                                                return (
                                                    <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Stack>
                            <Stack className="flex-column flex-md-row my-4" gap={3}>
                                <Form.Group className="w-100" controlId="landmark">
                                    <Form.Label>Landmark (optional)</Form.Label>
                                    <Form.Control type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="w-100" controlId="pinCode">
                                    <Form.Label>Pin code</Form.Label>
                                    <Form.Control type="number" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                                </Form.Group>
                            </Stack>
                            <Link to={"/products"} className="text-white text-decoration-none"><Button className="bg-secondary-color border-0 my-2 py-2 px-3 rounded-0">Continue Shopping</Button></Link>
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
                        <CartTotals cartItems={cartItems} submitButtonRef={submitButtonRef} shippingSubmit={shippingSubmit} totalPrice={totalPrice} shippingPrice={shippingPrice} gstPrice={gstPrice} grandTotal={grandTotal} />
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Shipping;
