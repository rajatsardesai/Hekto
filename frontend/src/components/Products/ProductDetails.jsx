import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getProductDetails, newReview } from '../../store/actions/productAction';
import { addToCart } from '../../store/actions/cartAction';
import ReviewCard from './ReviewCard';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import MetaData from '../MetaData';
import { NEW_REVIEW_RESET } from '../../store/constants/productConstants';

const ProductDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [selectedStockValue, setSelectedStockValue] = useState(1);
    const [open, setOpen] = useState("d-none");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const { product, loading } = useSelector(
        (state) => state.productDetails
    );

    const { success } = useSelector(
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
        if (success) {
            dispatch({ type: NEW_REVIEW_RESET });
        }
    }, [dispatch, id, success]);

    return (
        !loading && <>
            {/* Title tag */}
            <MetaData title={`${product.name} -eBuy`} />

            {/* Product Details */}
            <div className="bg-white">
                <Container className="py-md-5 product-detail-page">
                    <Row>
                        <Col sm={12} md={6}>
                            <Carousel className="product-details-carousel">
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
                        <Col sm={12} md={6}>
                            <h3>{product.name}</h3>
                            <Stack direction="horizontal" gap={3}>
                                <ReactStars {...options} value={product.ratings} edit={false} />
                                <span className="text-primary">{product.numberOfReviews} Reviews</span>
                            </Stack>
                            <hr className="my-1" />
                            <sup className="fs-5">₹</sup><span className="fs-2">{product.price}</span>
                            {
                                product.stock < 1 ?
                                    <span className="d-block fs-2 text-danger">Out of stock</span> :
                                    <>
                                        <Stack direction="horizontal" gap={3} className="my-2">
                                            <label htmlFor="quantity-dropdown">
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
                            <hr />
                            <span className="fs-5 fw-bold">About this item</span>
                            <p>{product.description}</p>
                        </Col>
                    </Row>

                    <div className="mt-4 mb-5">
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
                        <h4>Customer Reviews</h4>
                        {
                            product.reviews && product.reviews[0] ?
                                <div className="reviews">
                                    {
                                        product.reviews &&
                                        product.reviews.map((review, index) => <ReviewCard key={index} review={review} />)
                                    }
                                </div> :
                                <span className="fw-bold">No customer reviews</span>
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductDetails;