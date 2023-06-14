import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderMain = ({ categorySubmitHandler }) => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            <Navbar className="header-main bg-purple-300-color d-none d-lg-block p-0" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="w-100 my-2 my-lg-0 align-items-center justify-content-between"
                            style={{ height: '44px' }}
                            navbarScroll
                        >
                            <Link className="text-decoration-none text-light py-2 px-3 font-14" to={'/'}>All</Link>
                            <Stack direction="horizontal">
                                <Link to={"/cart"} className="position-relative">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/cart.png"} alt="cart" />
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItems.length}
                                        <span class="visually-hidden">cart items</span>
                                    </span>
                                </Link>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderMain;
