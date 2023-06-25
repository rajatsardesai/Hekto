import React, { useEffect, useState } from 'react';
import MetaData from '../MetaData';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartItems from '../Cart/CartItems';
import { getOrderDetails, updateOrder } from '../../store/actions/orderAction';
import { UPDATE_ORDER_RESET } from '../../store/constants/orderConstants';

const ProcessOrder = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { error, order } = useSelector((state) => state.orderDetails);
    const { error: updateError, isUpdated } = useSelector((state) => state.order);

    const [status, setStatus] = useState("");

    const totalPrice = Math.round(order.totalPrice);

    const orderedDate = new Date(order.createdAt).toLocaleDateString();

    const updateOrderSubmitHandler = () => {
        const updateOrderForm = new FormData();

        updateOrderForm.set("status", status);

        dispatch(updateOrder(params.id, updateOrderForm));
    };

    useEffect(() => {
        if (error || updateError) {
            alert(error || updateError);
        };
        if (isUpdated) {
            alert("Order updated successfully");
            dispatch({ type: UPDATE_ORDER_RESET })
        };
        dispatch(getOrderDetails(params.id));
    }, [dispatch, params.id, error, updateError, isUpdated]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Process Order - Admin"} />

            {/* Order Details */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>
                    <Col lg={8}>
                        <Stack className="bg-gray-300-color px-4 py-5">
                            <Stack className="mb-5 font-18">
                                <h5 className="fw-bold text-blue-500-color mb-4">Shipping Address</h5>
                                <span className="fw-bold">Rajat</span>
                                <p className="m-0">Address</p>
                                <span className="m-0">+91 1234233232</span>
                                <span>email@email.com</span>
                            </Stack>

                            <Stack className="mb-5 font-18">
                                <h5 className="fw-bold text-blue-500-color mb-4">Order Summary</h5>
                                <Stack className="mb-4 flex-column flex-md-row" gap={3}>
                                    <span>Ordered on {orderedDate}</span>
                                    <span>Order #{order._id}</span>
                                </Stack>
                                {
                                    order.orderItems && order.orderItems.map(item => {
                                        return (
                                            <CartItems key={item.product} item={item} />
                                        )
                                    })
                                }
                            </Stack>

                            <Stack className="mb-5 font-18 flex-column flex-md-row">
                                <Stack>
                                    <h5 className="fw-bold text-blue-500-color mb-4">Payment Status</h5>
                                    <span className={
                                        order.paymentInfo &&
                                            order.paymentInfo.status === "succeded"
                                            ? "text-success"
                                            : "text-danger"
                                    }>
                                        {
                                            order.paymentInfo &&
                                                order.paymentInfo.status === "succeded"
                                                ? "Paid"
                                                : "Not paid"
                                        }
                                    </span>
                                    <span>Amount: {totalPrice}</span>
                                </Stack>

                                <Stack className="mt-5 mt-md-0">
                                    <h5 className="fw-bold font-18 text-blue-500-color mb-4">Order Status</h5>
                                    <span className={
                                        order.orderStatus &&
                                            order.orderStatus === "Delivered"
                                            ? "text-success"
                                            : "text-danger"
                                    }>
                                        {
                                            order.orderStatus &&
                                            order.orderStatus
                                        }
                                    </span>
                                    {
                                        (order.orderStatus && (order.orderStatus === "Processing" || order.orderStatus === "Shipped")) &&
                                        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Choose status">
                                            <option>Choose status</option>
                                            {order.orderStatus !== 'Shipped' && (
                                                <option value="Shipped">Shipped</option>
                                            )}
                                            {order.orderStatus !== 'Delivered' && (
                                                <option value="Delivered">Delivered</option>
                                            )}
                                        </Form.Select>
                                    }
                                </Stack>
                            </Stack>

                            <Button className="bg-secondary-color border-0 py-2 px-3 rounded-0" disabled={(order.orderStatus === "Delivered" || order.orderStatus === "") ? true : false} onClick={updateOrderSubmitHandler}>Update</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container >
        </>
    )
};

export default ProcessOrder;
