import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { getProductDetails } from '../../store/actions/productAction';
import ReviewCard from './ReviewCard';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    return (
        !loading && <>
            <Container>
                <Row className="my-5">
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
                            <ReactStars {...options} />
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
                                        <Dropdown>
                                            <Dropdown.Toggle className="border" variant="transparent" id="quantity-dropdown">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>1</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Stack>
                                    <Button variant="warning" className="my-2">Add to Cart</Button>
                                </>
                        }
                        <hr />
                        <span className="fs-5 fw-bold">About this item</span>
                        <p>{product.description}</p>
                    </Col>
                </Row>

                <div className="mt-4 mb-5">
                    <h4>Customer reviews</h4>
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
        </>
    )
}

export default ProductDetails
