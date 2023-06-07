import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/actions/userAction';

const HeaderModal = ({ user, show, handleClose }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dashboard = () => {
        if (user.role === "admin") {
            navigate("/dashboard")
        }
    };

    // Check login status
    const checkLoginStatus = (link) => {
        if (user && link !== "logout") {
            navigate(`/${link}`);
        } else if (user && link === "logout") {
            dispatch(logoutUser());
            setTimeout(() => {
                navigate("/login");
            })
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            <Modal className="header-modal" show={show} onHide={handleClose}>
                <Modal.Body>
                    <Modal.Title className="fs-5 pb-2">Your account</Modal.Title>
                    <Stack>
                        {
                            user && user.role === "admin" ?
                                <span onClick={dashboard} className="text-decoration-none text-secondary my-1 cursor-pointer">Your dashboard</span> : ""
                        }
                        <span onClick={() => {
                            checkLoginStatus("account");
                            handleClose();
                        }} className="text-decoration-none text-secondary my-1 cursor-pointer">Your account</span>
                        <span onClick={() => {
                            checkLoginStatus("orders");
                            handleClose();
                        }} className="text-decoration-none text-secondary my-1 cursor-pointer">Your orders</span>
                        <span onClick={() => {
                            checkLoginStatus("logout");
                            handleClose();
                        }} className="text-decoration-none text-secondary my-1 cursor-pointer">{user ? "Sign out" : "Sign in"}</span>
                    </Stack>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default HeaderModal;
