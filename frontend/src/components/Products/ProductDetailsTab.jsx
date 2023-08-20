import React, { memo, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import ReviewCard from './ReviewCard';
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { newReview } from '../../store/actions/productAction';

const ProductDetailsTab = memo((props) => {

    const dispatch = useDispatch();

    const { tabContainerRef, product, options, id, activeTab, setActiveTab, submitReviewToggle, open, setOpen } = props;

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
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
        setRating(0);
        setComment("");
        setOpen("d-none");
    };

    return (
        <>
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
                                <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>
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
        </>
    )
});

export default ProductDetailsTab;
