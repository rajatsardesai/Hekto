import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(true);
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    const { pageLoading, error } = useSelector(
        (state) => state.products
    );

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        } else {
            navigate("/products");
        }
    }

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
            <Navbar className="nav-belt bg-blue-100" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link className="text-decoration-none text-light" to={'/'}><img src={logo}></img></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex w-100" onSubmit={searchSubmitHandler}>
                            <Form.Control
                                type="search"
                                placeholder="Search Ebuy"
                                className="m-0 rounded-start rounded-0"
                                aria-label="Search"
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <Button className="btn-warning rounded-end rounded-0">
                                <IconContext.Provider value={{ size: "30px" }}>
                                    <div>
                                        <MdSearch />
                                    </div>
                                </IconContext.Provider>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar className="nav-main bg-blue-200" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="text-decoration-none text-light p-2" to={'/'}>All</Link>
                            <Link className="text-decoration-none text-light p-2" to={'/products'}>Products</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
