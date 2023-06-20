import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetails } from '../../store/actions/orderAction';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { order } = useSelector((state) => state.orderDetails);

    useEffect(() => {
        dispatch(orderDetails(params.id));
    }, [dispatch, params.id]);

    return (
        <>

        </>
    )
}

export default OrderDetails;
