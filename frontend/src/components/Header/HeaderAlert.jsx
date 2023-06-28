import React, { useEffect, useState } from 'react';
import "./HeaderAlert.css"
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const HeaderAlert = (props) => {
    // const { allProductsError, productDetailsError, showAlert, login, register, success } = props;
    const { error, message } = props;

    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        if (error || message) {
            setTimeout(() => {
                setShowAlert(false);
            }, 5000)
        }
    }, [error, message]);

    return (
        <>
            {/* {((allProductsError || productDetailsError || login || register || success) && showAlert) && <Alert variant={login ? "success" : "danger"} className="fixed-top w-100 z-3 rounded-0" dismissible>
                {allProductsError && allProductsError}
                {productDetailsError && productDetailsError}
                {login ? "Logged in successfully" : "Logged out"}
                {register && "Registered successfully"}
                {success && "Review submitted successfully"}
            </Alert>} */}
            {
                showAlert &&
                <Alert variant={error ? "danger" : "success"} className="alert fixed-top w-100 z-3 rounded-0 m-0 p-0 font-lato" dismissible>
                    <p className="font-20 m-0 p-2 text-center">{error || message}</p>
                </Alert>
            }
        </>
    )
}

export default HeaderAlert
