import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <ListGroup>
                <Link to={"/admin/dashboard"} className="text-decoration-none"><ListGroup.Item className="bg-gray-300-color border-0 p-3 font-18">Dashboard</ListGroup.Item></Link>
                <Link to={"/admin/products"} className="text-decoration-none"><ListGroup.Item className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Products</ListGroup.Item></Link>
                <Link to={"/admin/orders"} className="text-decoration-none"><ListGroup.Item className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Orders</ListGroup.Item></Link>
                <Link to={"/admin/users"} className="text-decoration-none"><ListGroup.Item className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Users</ListGroup.Item></Link>
                <Link to={"/admin/reviews"} className="text-decoration-none"><ListGroup.Item className="bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18">Reviews</ListGroup.Item></Link>
            </ListGroup>
        </>
    )
}

export default Sidebar;
