import React, { memo } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <ListGroup>
                <ListGroup.Item as={Link} to={"/admin/dashboard"} className="bg-gray-300-color border-0 p-3 font-18">Dashboard</ListGroup.Item>
                <ListGroup.Item as={Link} to={"/admin/products"} className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Products</ListGroup.Item>
                <ListGroup.Item as={Link} to={"/admin/orders"} className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Orders</ListGroup.Item>
                <ListGroup.Item as={Link} to={"/admin/users"} className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Users</ListGroup.Item>
                <ListGroup.Item as={Link} to={"/admin/reviews"} className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Reviews</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default memo(Sidebar);
