import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/esm/Stack';
import { Link } from 'react-router-dom';

const HeaderModal = ({ show, handleShow, handleClose }) => {
    const logoutUser = () => {
        console.log("Sign out successfull");
    }
    return (
        <>
            <Modal className="header-modal" show={show} onHide={handleClose}>
                <Modal.Body>
                    <Modal.Title className="fs-5 pb-2">Your account</Modal.Title>
                    <Stack>
                        <Link to={"/account"} className="text-decoration-none text-secondary">Your account</Link>
                        <Link to={"/orders"} className="text-decoration-none text-secondary">Your orders</Link>
                        <Link onClick={logoutUser} className="text-decoration-none text-secondary">Sign out</Link>
                    </Stack>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default HeaderModal;
