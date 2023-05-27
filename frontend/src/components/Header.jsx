import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(true);

    const { pageLoading, error } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        setProgress(pageLoading);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, [pageLoading]);

    return (
        <>
            {/* React top loading bar */}
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />

            {/* Error alert */}
            {(error && showAlert) && <Alert variant="danger" dismissible>
                {error}
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
                            <Nav.Link><Link className="text-decoration-none text-secondary" to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none text-secondary" to={'/products'}>Products</Link></Nav.Link>
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
