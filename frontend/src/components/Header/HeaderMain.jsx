import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HeaderMain = ({ categorySubmitHandler }) => {
    return (
        <>
            <Navbar className="header-main bg-blue-200 d-none d-lg-block p-0" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="text-decoration-none text-light py-2 px-3 font-14" to={'/'}>All</Link>
                            <Link className="text-decoration-none text-light py-2 px-3 font-14" to={'/products'}>Products</Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("laptops")}>Laptops</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("accessories")}>Accessories</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("fashion")}>Fashion</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("electronics")}>Electronics</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("cameras")}>Cameras</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("smartphones")}>Smartphones</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 px-3 font-14" onClick={() => categorySubmitHandler("smartwatches")}>Smartwatches</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderMain;
