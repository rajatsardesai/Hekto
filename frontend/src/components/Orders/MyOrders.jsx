import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { myOrders } from '../../store/actions/orderAction';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const dispatch = useDispatch();

    const { headerLoading, error, message, orders } = useSelector((state => state.myOrders));

    useEffect(() => {
        dispatch(myOrders());
    }, [dispatch]);

    return (
        <>
            <MetaData title={"Your Orders -@Hekto"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error) &&
                <HeaderAlert error={error} message={message} />
            }

            <Container className="my-5 h-60vh">
                {
                    orders && orders.length > 0 ?
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
                        :
                        <Stack >
                            <span className="text-center text-dark font-20">No orders to show</span>
                        </Stack>
                }
            </Container>
        </>
    )
}

export default MyOrders;
