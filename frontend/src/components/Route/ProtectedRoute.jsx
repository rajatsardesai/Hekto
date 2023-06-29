import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin }) => {
    const navigate = useNavigate();

    const { isAuthenticated, loading, user } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (isAdmin === true && user.role !== "admin") {
            navigate("/");
        }
    }, [isAdmin, navigate, user.role])

    return (
        loading && isAuthenticated && <Outlet />
    )
}

export default ProtectedRoute;
