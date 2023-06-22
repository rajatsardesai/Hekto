import React from 'react';
import Alert from 'react-bootstrap/Alert';

const HeaderAlert = (props) => {
    const { allProductsError, productDetailsError, showAlert, login, register, success } = props;

    return (
        <>
            {((allProductsError || productDetailsError || login || register || success) && showAlert) && <Alert variant={login ? "success" : "danger"} className="fixed-top w-100 z-3 rounded-0" dismissible>
                {allProductsError && allProductsError}
                {productDetailsError && productDetailsError}
                {login ? "Logged in successfully" : "Logged out"}
                {register && "Registered successfully"}
                {success && "Review submitted successfully"}
            </Alert>}
        </>
    )
}

export default HeaderAlert
