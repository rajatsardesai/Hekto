import React, { useEffect, useState } from 'react';
import "./HeaderAlert.css"
import Alert from 'react-bootstrap/Alert';

const HeaderAlert = (props) => {
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
