import React, { useEffect, useState } from 'react';
import "./Forbidden.css";
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const NetworkStatus = () => {
    const navigate = useNavigate();

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const handleTryAgain = () => {
        navigate("/");
    }

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <>
            {
                !isOnline &&
                <Container>
                    <Stack className="forbidden-errors justify-content-center align-items-center pb-5 position-relative">
                        <img src={process.env.PUBLIC_URL + "/assets/content/hekto-error-vector-404.webp"} alt="hekto-error-vector-404" className="my-5 py-5 img-fluid" />
                        <div className="position-absolute top-0 left-0 text-center">
                            <img src={process.env.PUBLIC_URL + "/assets/content/hekto-error-vector.webp"} alt="hekto-error-vector" className="forbidden-errors-img" />
                        </div>
                        <span className="text-primary-color font-24 fw-bold mb-4 text-center">oops!  The page you requested was not found!</span>
                        <Button onClick={handleTryAgain} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap me-2 w-auto d-flex justify-content-center align-items-center">Try Again</Button>
                    </Stack>
                </Container>
            }
        </>
    )
}

export default NetworkStatus;
