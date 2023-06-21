import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetails } from '../../store/actions/orderAction';
import { useParams } from 'react-router-dom';
import MetaData from '../MetaData';
import CartItems from '../Cart/CartItems';
import CartTotals from '../Cart/CartTotals';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { order } = useSelector((state) => state.orderDetails);

    useEffect(() => {
        dispatch(orderDetails(params.id));
    }, [dispatch, params.id]);

    const orderedDate = new Date(order.createdAt).toLocaleDateString();

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Order Details"} />

            {/* Order Details */}
            <Container className="my-5">
                <Row>
                    <Col lg={8} className="mb-5 pe-md-5">
                        <h5 className="fw-bold font-20 text-blue-500-color mb-2">Order Details</h5>
                        <Stack className="mb-4 flex-column flex-md-row" gap={3}>
                            <span>Ordered on {order && orderedDate}</span>
                            <span>Order #{order && order._id}</span>
                        </Stack>
                        <Stack className="bg-gray-300-color px-4 py-5">
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Shipping Address</h5>
                            <span className="fw-bold font-16">{order.user && order.user.name}</span>
                            <p className="font-16 m-0">{order.shippingInfo && order.shippingInfo.address}, {order.shippingInfo && order.shippingInfo.landmark ? `${order.shippingInfo.landmark},` : ""} {order.shippingInfo && order.shippingInfo.city}, {order.shippingInfo && order.shippingInfo.state}, {order.shippingInfo && order.shippingInfo.pinCode}</p>
                            <span className="font-16 m-0">+91 {order.shippingInfo && order.shippingInfo.phoneNo}</span>
                            <span className="font-16 mb-5">{order.user && order.user.email}</span>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Payment Details</h5>
                            <span className={
                                order.paymentInfo &&
                                    order.paymentInfo.status === "succeded"
                                    ? "text-success mb-5"
                                    : "text-danger mb-5"
                            }>
                                {
                                    order.paymentInfo &&
                                        order.paymentInfo.status === "succeded"
                                        ? "Paid"
                                        : "Not paid"
                                }
                            </span>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Order Status</h5>
                            <span className={
                                order.orderStatus &&
                                    order.orderStatus === "Delivered"
                                    ? "text-success"
                                    : "text-danger"
                            }>
                                {
                                    order.orderStatus && order.orderStatus
                                }
                            </span>
                        </Stack>
                    </Col>

                    <Col lg={4}>
                        <h5 className="fw-bold font-20 text-blue-500-color text-center mb-4">Order Summary</h5>
                        {
                            order.orderItems && order.orderItems.map(item => {
                                return (
                                    <CartItems key={item.product} item={item} />
                                )
                            })
                        }
                        <CartTotals cartItems={order.orderItems} id={params.id} totalPrice={order.itemPrice} shippingPrice={order.shippingPrice} gstPrice={order.taxPrice} grandTotal={order.totalPrice} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderDetails;
