import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useSelector(state => state.user);
    return (
        !loading && isAuthenticated && <Outlet />
    )
}

export default ProtectedRoute;
