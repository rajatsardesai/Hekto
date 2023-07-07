import React from 'react';
import "./HeaderMain.css";
import HeaderLoading from './HeaderLoading';
import HeaderAlert from './HeaderAlert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderAccount from './HeaderAccount';

const HeaderMain = () => {

    const { isAuthenticated, user, error, isLoggedout, message, headerLoading } = useSelector(
        (state) => state.user
    );
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || isLoggedout) && isAuthenticated &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Header main navbar */}
            <Navbar className="header-main bg-purple-300-color p-0" expand="lg">
                <Container>
                    <Nav
                        className="w-100 my-2 my-lg-0 align-items-center justify-content-between"
                        style={{ height: '44px' }}
                    >
                        {/* Header main left */}
                        <Stack className="flex-column flex-sm-row justify-content-sm-center justify-content-lg-start">
                            <Stack direction="horizontal" gap={2} className="text-decoration-none text-light font-16 me-sm-5" as={Link} to={'/'}>
                                <img src={process.env.PUBLIC_URL + "/assets/style/mail.svg"} alt="mail" />
                                <span>ebuyofficialindia@gmail.com</span>
                            </Stack>
                            <Stack direction="horizontal" gap={2} className="text-decoration-none text-light font-16" as={Link} to={'/'}>
                                <img src={process.env.PUBLIC_URL + "/assets/style/call.svg"} alt="call" />
                                <span>(12345)67890</span>
                            </Stack>
                        </Stack>

                        {/* Header main right */}
                        <Stack direction="horizontal" gap={4} className="d-none d-lg-flex">
                            <span className="text-light font-16">Hello, {user ? user.name : "guest"}</span>
                            <HeaderAccount user={user} />

                            <Stack as={Link} to={"/cart"} className="position-relative align-self-center">
                                <img src={process.env.PUBLIC_URL + "/assets/style/cart.svg"} alt="cart" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger font-12">
                                    {cartItems.length}
                                    <span className="visually-hidden">cart items</span>
                                </span>
                            </Stack>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default HeaderMain;
