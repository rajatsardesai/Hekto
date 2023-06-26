import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin }) => {
    const navigate = useNavigate();

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    if (isAdmin === true && user.role !== "admin") {
        navigate("/");
    }

    return (
        !loading && isAuthenticated && <Outlet />
    )
}

export default ProtectedRoute;
