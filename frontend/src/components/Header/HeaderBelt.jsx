import React, { useState } from 'react';
import "./HeaderBelt.css";
import HeaderLoading from './HeaderLoading';
import HeaderAlert from './HeaderAlert';
import HeaderMain from './HeaderMain';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderAccount from './HeaderAccount';

const HeaderBelt = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [keyword, setKeyword] = useState("");

    const { isAuthenticated, user, error, success, isLoggedout, message, headerLoading } = useSelector(
        (state) => state.user
    );

    // Handling search results
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        } else {
            navigate("/products");
        };
    };

    return (
        <>
            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error || success || isLoggedout) && isAuthenticated &&
                <HeaderAlert error={error} message={message} />
            }

            {/* Header belt navbar */}
            <HeaderMain />
            <Navbar className="header-belt bg-white" expand="md" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to={'/'} className="fs-2 fw-semibold text-primary-color">Hekto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="py-2 py-md-0">
                        <Nav
                            className="me-auto ms-0 ms-lg-5 my-2 my-lg-0 font-16 font-lato"
                        >
                            <Nav.Link active={location.pathname === "/" ? true : false} as={Link} to={'/'} className="px-3">Home</Nav.Link>
                            <Nav.Link active={location.pathname.includes("/product")} as={Link} to={'/products'} className="px-3">Products</Nav.Link>
                            <Nav.Link active={location.pathname.includes("/blogs")} as={Link} to={'/blogs'} className="px-3">Blogs</Nav.Link>
                            <Nav.Link active={location.pathname.includes("/contact")} as={Link} to={'/contact'} className="px-3">Contact</Nav.Link>
                            <Stack className="d-block d-md-none">
                                <HeaderAccount user={user} color={"#0d0e43"} />
                            </Stack>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchSubmitHandler}>
                            <Form.Control
                                type="search"
                                className="m-0 rounded-0"
                                aria-label="Search"
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <Button className="bg-secondary-color border-0 outline-0 rounded-0" type="submit">
                                <img src={process.env.PUBLIC_URL + "/assets/style/search.svg"} alt="search" />
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </>
    )
}

export default HeaderBelt;
