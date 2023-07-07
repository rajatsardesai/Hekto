import React from 'react';
import "./InitLoader.css";
import Container from 'react-bootstrap/esm/Container';

const InitLoader = () => {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center h-100vh">
                <div className="initLoader">
                    <span className="fs-2 fw-semibold text-primary-color mb-2">Hekto</span>
                    <div className="line">
                        <div className="inner"></div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default InitLoader;
