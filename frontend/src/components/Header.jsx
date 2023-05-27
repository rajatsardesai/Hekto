import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(true);

    // For home loading page
    const { productLoading, productError } = useSelector(
        (state) => state.products
    );

    // For product details loading page
    const { productDetailsLoading, productDetailsError } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        productLoading ?
            setProgress(productLoading) :
            setProgress(productDetailsLoading);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, [productLoading, productDetailsLoading]);

    return (
        <>
            {/* React top loading bar */}
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />

            {/* Error alert */}
            {((productError || productDetailsError) && showAlert) && <Alert variant="danger" dismissible>
                {productError || productDetailsError}
            </Alert>}

            {/* Navbar */}
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Mc-shopee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
