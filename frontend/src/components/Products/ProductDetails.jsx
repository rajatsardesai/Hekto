import React, { useEffect, useRef, useState } from 'react';
import "./ProductDetails.css"
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { getAllProducts, getProductDetails, newReview } from '../../store/actions/productAction';
import { addToCart } from '../../store/actions/cartAction';
import ReviewCard from './ReviewCard';
import ProductsCard from './ProductsCard';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { NEW_REVIEW_RESET } from '../../store/constants/productConstants';

const ProductDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const tabContainerRef = useRef(null);

    const [selectedStockValue, setSelectedStockValue] = useState(1);
    const [open, setOpen] = useState("d-none");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const { products, loading: productsLoading, error: productsError, message } = useSelector(
        (state) => state.products
    );

    const { product, loading: productDetailsLoading, headerLoading: productDetailsHeaderLoading, error: productDetailsError } = useSelector(
        (state) => state.productDetails
    );

    const { success, loading: newReviewLoading, error: newReviewError } = useSelector(
        (state) => state.newReview
    );

    // For product stock
    const productStock = Array.from({ length: product.stock }, (_, index) => index + 1);

    const handleStockSelect = (eventKey) => {
        setSelectedStockValue(eventKey);
    };

    const addProductToCart = () => {
        dispatch(addToCart(id, selectedStockValue));
    };

    // For review submit
    const submitReviewToggle = () => {
        open === "d-none" ? setOpen("d-block") : setOpen("d-none");
        setActiveTab('tab2');
        if (tabContainerRef.current) {
            tabContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        };
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const submitReviewHandler = () => {
        const reviewForm = new FormData();

        reviewForm.set("rating", rating);
        reviewForm.set("comment", comment);
        reviewForm.set("productId", id);

        dispatch(newReview(reviewForm));
        setOpen("d-none");
    };

    const options = {
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    useEffect(() => {
        dispatch(getProductDetails(id));
        dispatch(getAllProducts());
        if (success) {
            dispatch({ type: NEW_REVIEW_RESET });
        }
    }, [dispatch, id, success]);

    return (
        (productsLoading === false || productDetailsLoading === false || newReviewLoading === false) && <>
            {/* Title tag */}
            <MetaData title={`${product.name} -@Hekto`} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={productDetailsHeaderLoading} />

            {/* Header alert */}
            {
                (productsError || productDetailsError || newReviewError) &&
                <HeaderAlert error={productsError || productDetailsError || newReviewError} message={message} />
            }

            {/* Product Details */}
            <Container className="py-md-5 product-detail-page">
                <Row className="align-items-center card-shadow p-3">
                    <Col sm={12} lg={6}>
                        <Carousel className="product-details-carousel mb-5 mb-lg-0">
                            {
                                product.images && product.images.map((productImage, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={productImage.url}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col sm={12} lg={6}>
                        <h2 className="font-35 text-primary-color fw-semibold mb-1">{product.name}</h2>
                        <Stack direction="horizontal" gap={1}>
                            <ReactStars {...options} value={product.ratings} edit={false} />
                            <span className="text-primary-color">({product.numberOfReviews})</span>
                        </Stack>
                        <span className="font-26 text-primary-color">₹{product.price}</span>
                        <p className="mt-2 text-gray-100-color font-16 fw-semibold text-overflow">{product.description}</p>
                        {
                            product.stock < 1 ?
                                <span className="d-block fs-2 text-danger">Out of stock</span> :
                                <>
                                    <Stack direction="horizontal" gap={3} className="my-2">
                                        <label htmlFor="quantity-dropdown" className="text-primary-color">
                                            Quantity:
                                        </label>
                                        <Dropdown onSelect={handleStockSelect}>
                                            <Dropdown.Toggle className="border" variant="transparent" id="quantity-dropdown">
                                                {selectedStockValue && selectedStockValue}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="product-details-dropdown">
                                                {
                                                    productStock.map((stock, index) => {
                                                        return (
                                                            <Dropdown.Item key={index} eventKey={stock}>{stock}</Dropdown.Item>
                                                        )
                                                    })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Stack>
                                    <Stack className="flex-column flex-md-row">
                                        <Button disabled={product.stock < 1 ? true : false} className="my-2 me-md-2 bg-secondary-color border-0 rounded-0" onClick={addProductToCart}>Add to Cart</Button>
                                        <Button className="my-2 bg-secondary-color border-0 rounded-0" onClick={submitReviewToggle}>Write a review</Button>
                                    </Stack>
                                </>
                        }
                        <Stack direction="horizontal" gap={1} className="mt-3">
                            <span className="text-primary-color fw-semibold">Categories:</span>
                            <span className="font-16 text-primary-color">{product.category}</span>
                        </Stack>
                        <Stack direction="horizontal" gap={1} className="mt-3">
                            <span className="text-primary-color fw-semibold">Share:</span>
                            <Stack direction="horizontal" className="justify-content-center">
                                <Link to="https://www.facebook.com" target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/assets/style/fb-icon.svg"} alt="fb-icon" className="me-2" />
                                </Link>
                                <Link to="https://www.instagram.com" target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/assets/style/insta-icon.svg"} alt="insta-icon" className="me-2" />
                                </Link>
                                <Link to="https://www.twitter.com" target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/assets/style/tweet-icon.svg"} alt="tweet-icon" />
                                </Link>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Stack ref={tabContainerRef} className="product-details-info bg-gray-200-color my-5">
                <Container className="py-5">
                    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                        <Nav variant="tabs" className="home-products-tab justify-content-center justify-content-md-start flex-column flex-md-row border-0 mb-4">
                            <Nav.Item>
                                <Nav.Link eventKey="tab1" className="border-0 font-lato text-center my-2 mx-0 mx-md-3 bg-transparent">Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2" className="border-0 font-lato text-center my-2 mx-0 mx-md-3 bg-transparent">Reviews</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey={"tab1"} className="overflow-auto">
                                <p>{product.description}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"tab2"} className="overflow-auto">
                                <Stack className={`mb-5 ${open}`}>
                                    <h4>Create Review</h4>
                                    <h5 className="mt-3">Overall rating</h5>
                                    <ReactStars {...options} value={rating} onChange={ratingChanged} edit={true} />
                                    <h5 className="mt-3">Add a written review</h5>
                                    <Form.Control
                                        as="textarea"
                                        cols={30}
                                        rows={5}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <Stack className="flex-column flex-md-row my-3">
                                        <Button className="my-2 my-md-0 me-md-2 bg-secondary-color border-0 rounded-0" onClick={submitReviewHandler}>Submit</Button>
                                        <Button className="my-2 my-md-0 bg-secondary-color border-0 rounded-0" onClick={submitReviewToggle}>Cancel</Button>
                                    </Stack>
                                </Stack>

                                {
                                    product.reviews && product.reviews[0] ?
                                        <Stack className="reviews">
                                            {
                                                product.reviews &&
                                                product.reviews.map((review, index) => <ReviewCard key={index} review={review} />)
                                            }
                                        </Stack> :
                                        <span className="fw-bold">No reviews</span>
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </Stack>

            <Container>
                <h4 className="font-26 text-primary-color fw-bold mb-4">Related Products</h4>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {
                        products && products.map((item, index) => (
                            <>
                                {
                                    (item.category === product.category) && (item._id !== id) &&
                                    <ProductsCard key={index} product={item} />
                                }
                            </>
                        )
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default ProductDetails;