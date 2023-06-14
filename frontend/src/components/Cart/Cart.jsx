import React from 'react';
import "./Cart.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../store/actions/cartAction';

const Cart = () => {

    const dispatch = useDispatch()

    const { cartItems } = useSelector((state) => state.cart);

    const clearCart = () => {
        localStorage.removeItem("cartItems");
        for (let item of cartItems) {
            console.log(item);
            dispatch(removeFromCart(item.product));
        }
    };

    return (
        <>
            {
                cartItems.length === 0 ? (
                    <>
                        <Container className="cart-page d-flex flex-column align-items-center justify-content-center">
                            <span className="font-22">No products in your cart</span>
                            <Button className="bg-secondary-color border-0 my-2 py-2 px-3 rounded-0"><Link to={"/products"} className="text-decoration-none text-white">View Products</Link></Button>
                        </Container>
                    </>
                ) :
                    (
                        <>
                            <Container className="cart-page my-5">
                                <Row>
                                    <Col md={8} className="mb-5 pe-md-5">
                                        <h5 className="fw-bold font-20 text-blue-500-color mb-4">Order Summary</h5>
                                        {
                                            cartItems && cartItems.map(item => {
                                                return (
                                                    <CartItems key={item.product} item={item} />
                                                )
                                            })
                                        }
                                        <Button className="bg-secondary-color text-white border-0 my-2 py-2 px-3 rounded-0" onClick={clearCart}>Clear Cart</Button>
                                    </Col>
                                    <Col md={4}>
                                        <h5 className="fw-bold font-20 text-blue-500-color text-center mb-4">Cart Totals</h5>
                                        <Stack className="w-100 bg-gray-200-color border-0 p-4 rounded">
                                            <Stack direction="horizontal" className="align-items-start my-3">
                                                <span className="font-lato fw-semibold font-18 text-blue-500-color">Subtotal:</span>
                                                <Stack direction="vertical">
                                                    {
                                                        cartItems && cartItems.map(item => {
                                                            return (
                                                                <>
                                                                    <span key={item.product} className="font-lato font-16 text-blue-400-color text-end">₹{item.price * item.quantity}.00 ({item.quantity} items)</span>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Stack>
                                            </Stack>
                                            <hr className="mb-4" />
                                            <Stack direction="horizontal" className="justify-content-between my-3">
                                                <span className="font-lato fw-semibold font-18 text-blue-500-color">Total:</span>
                                                <span className="font-lato font-16 text-blue-400-color">₹{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}.00</span>
                                            </Stack>
                                            <hr className="mb-4" />
                                            <Stack direction="horizontal" className="mb-4">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/check.png"} alt="check symbol" />
                                                <span className="font-lato font-12 text-gray-100-color ms-2">Shipping & taxes calculated at checkout</span>
                                            </Stack>
                                            <Button className="w-100 font-lato font-14 fw-bold bg-green-100-color border-0 p-2 mb-2">Proceed To Checkout</Button>
                                        </Stack>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
            }
        </>
    )
}

export default Cart;
