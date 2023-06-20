import React, { forwardRef } from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const CartTotals = forwardRef((props, ref) => {
    const { cartItems, checkoutHandler, submitButtonRef, shippingSubmit, totalPrice, shippingPrice, gstPrice, grandTotal } = props;

    const location = useLocation();

    return (
        <>
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
                {
                    (location.pathname === "/shipping") &&
                    <Stack direction="horizontal" className="align-items-start my-3">
                        <span className="font-lato fw-semibold font-18 text-blue-500-color">Shipping:</span>
                        <Stack direction="vertical">
                            <span className="font-lato font-16 text-blue-400-color text-end">₹{Math.floor(shippingPrice)}.00</span>
                        </Stack>
                    </Stack>
                }
                {
                    (location.pathname === "/shipping") &&
                    <Stack direction="horizontal" className="align-items-start my-3">
                        <span className="font-lato fw-semibold font-18 text-blue-500-color">GST:</span>
                        <Stack direction="vertical">
                            <span className="font-lato font-16 text-blue-400-color text-end">₹{Math.floor(gstPrice)}.00</span>
                        </Stack>
                    </Stack>
                }
                <hr className="mb-4" />
                <Stack direction="horizontal" className="justify-content-between my-3">
                    <span className="font-lato fw-semibold font-18 text-blue-500-color">Total:</span>
                    <span className="font-lato font-16 text-blue-400-color">₹{(location.pathname === "/cart") ? Math.floor(totalPrice) : Math.floor(grandTotal)}.00</span>
                </Stack>
                {
                    location.pathname !== "/process/payment" &&
                    <>
                        <hr className="mb-4" />
                        <Stack direction="horizontal" className="mb-4">
                            <img src={process.env.PUBLIC_URL + "/assets/images/check.png"} alt="check symbol" />
                            <span className="font-lato font-12 text-gray-100-color ms-2">Shipping & taxes calculated at checkout</span>
                        </Stack>
                        <Button className="w-100 font-lato font-14 fw-bold bg-green-100-color border-0 p-2 mb-2" submitButtonRef={submitButtonRef} onClick={checkoutHandler || shippingSubmit}>{(location.pathname === "/shipping") ? "Proceed To Payment" : "Proceed To Checkout"}</Button>
                    </>
                }
            </Stack>
        </>
    )
});

export default CartTotals
