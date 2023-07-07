import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Forbidden from '../Utils/Forbidden';

const ProtectedRoute = ({ isAdmin }) => {
    const navigate = useNavigate();
    const { isAuthenticated, loading, user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!loading && isAuthenticated) {
            if (!isAdmin && (user || user.role !== 'admin')) {
                navigate('/');
            }
        }
    }, [isAdmin, loading, navigate, isAuthenticated, user]);

    // if (!loading || (!isAdmin && (!user || user.role !== 'admin'))) {
    //     return null;
    // }

    if (isAdmin && (!user || user.role !== 'admin')) {
        return <Forbidden />;
    }

    if (!isAdmin && !user) {
        return <Forbidden />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
