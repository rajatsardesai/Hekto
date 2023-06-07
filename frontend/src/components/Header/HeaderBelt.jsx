import React, { useEffect, useState } from 'react';
import HeaderMain from './HeaderMain';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/esm/Stack';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { getProduct } from '../../store/actions/productAction';
import HeaderModal from './HeaderModal';
import HeaderAlert from './HeaderAlert';

const HeaderBelt = () => {
    const dispatch = useDispatch();

    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(true);
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    // To show alert when error occurs
    const { pageLoading, allProductsError } = useSelector(
        (state) => state.products
    );
    const { productDetailsError } = useSelector(
        (state) => state.productDetails
    );

    // To show logout button
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, login, register } = useSelector(
        (state) => state.user
    );

    // Handling search results
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        } else {
            navigate("/products");
        }
    };

    // Handling category navigation
    const categorySubmitHandler = (category) => {
        if (category.trim()) {
            navigate(`/products?${category}`);
            setTimeout(() => {
                dispatch(getProduct("", 1, 50000, category, 0));
            });
        } else {
            navigate("/products");
        }
    };

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

            {/* Alert */}
            <HeaderAlert allProductsError={allProductsError} productDetailsError={productDetailsError} showAlert={showAlert} login={login} register={register} />

            {/* Navbar */}
            <Navbar className="header-belt bg-blue-100" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link className="text-decoration-none text-light" to={'/'}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo"></img></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-block d-lg-none"
                        >
                            <Link className="d-block text-decoration-none text-light py-2 font-16" to={'/'}>All</Link>
                            <Link className="d-block text-decoration-none text-light py-2 font-16" to={'/products'}>Products</Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("Laptops")}>Laptops</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("accessories")}>Accessories</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("fashion")}>Fashion</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("electronics")}>Electronics</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("cameras")}>Cameras</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("smartphones")}>Smartphones</Nav.Link>
                            <Nav.Link className="text-decoration-none text-light py-2 font-16" onClick={() => categorySubmitHandler("smartwatches")}>Smartwatches</Nav.Link>
                        </Nav>
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
                        <Stack className="cursor-pointer text-white mx-3 my-1" onMouseEnter={handleShow}>
                            <span className="font-12 text-overflow line-clamp-1">Hello, {user ? user.name : "guest"}</span>
                            <span className="font-14 fw-bold text-nowrap">Account & Lists <MdKeyboardArrowDown /></span>
                        </Stack>
                        <HeaderModal user={user} show={show} handleClose={handleClose} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <HeaderMain categorySubmitHandler={categorySubmitHandler} />
        </>
    )
}

export default HeaderBelt;
