import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { DELETE_ORDER_RESET } from '../../store/constants/orderConstants';
import { deleteOrder, getAllOrders } from '../../store/actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const OrderList = () => {
  const dispatch = useDispatch();

  const { error, orders } = useSelector(state => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector(state => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (deleteError || error) {
      alert(deleteError || error);
    };

    if (isDeleted) {
      alert("Order deleted successfully");
      dispatch({ type: DELETE_ORDER_RESET });
    };

    dispatch(getAllOrders());
  }, [dispatch, isDeleted, deleteError, error]);

  return (
    <>
      {/* Title tag */}
      <MetaData title={"All Products - Admin"} />

      {/* All products list */}
      <Container className="my-5 h-60vh">
        <Row>
          <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
          <Col lg={4} className="mb-5 pe-md-5">
            <Sidebar />
          </Col>

          {/* Dashboard */}
          <Col lg={8}>
            {
              orders.length > 0 ?
                <Table bordered hover responsive="md">
                  <thead className="bg-gray-400-color">
                    <tr>
                      <th>Product Id</th>
                      <th>Status</th>
                      <th>Items Quantity</th>
                      <th>Price</th>
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
                            <td className="d-flex">
                              <Button as={Link} to={`/admin/order/${order._id}`} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap me-2">Edit</Button>
                              <Button onClick={() => deleteOrderHandler(order._id)} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap">Delete</Button>
                            </td>
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
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default OrderList;
