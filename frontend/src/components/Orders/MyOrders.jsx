import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { myOrders } from '../../store/actions/orderAction';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const dispatch = useDispatch();

    const { orders } = useSelector((state => state.myOrders));
    const { user } = useSelector((state => state.user));

    useEffect(() => {
        dispatch(myOrders());
    }, [dispatch]);

    return (
        <>
            <MetaData title={"Your Orders"} />

            <Container className="my-5 h-60vh">
                <Table bordered hover responsive="md">
                    <thead className="bg-gray-400-color">
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th className="text-nowrap">Items Qty</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders.map(order => {
                                return (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td className={order.orderStatus === "Delivered" ? "text-success" : "text-danger"}>{order.orderStatus}</td>
                                        <td>{order.orderItems.length}</td>
                                        <td>{order.totalPrice}</td>
                                        <td><Link to={`/order/${order._id}`} className="text-white text-decoration-none"><Button className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap">View Order</Button></Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default MyOrders;
