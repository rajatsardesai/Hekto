import React, { useState, useEffect } from 'react';
import MetaData from '../MetaData';
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import { deleteReviews, getAllReviews } from '../../store/actions/productAction';
import { DELETE_REVIEW_RESET } from '../../store/constants/productConstants';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const ProductReviews = () => {
    const dispatch = useDispatch();

    const [productId, setProductId] = useState("");
    const [noReviews, setNoReviews] = useState("No reviews to show");

    const { headerLoading: productReviewsHeaderLoading, error: productReviewsError, message: productReviewsMessage, reviews } = useSelector((state => state.productReviews));
    const { headerLoading: deleteHeaderLoading, error: deleteError, message: deleteMessage, isDeleted } = useSelector((state => state.review));

    const deleteReviewHandler = (reviewId) => {
        dispatch(deleteReviews(reviewId, productId));
    };

    const productReviewsSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getAllReviews(productId));
        setNoReviews("No reviews found");
    };

    useEffect(() => {
        if (productId.length === 24) {
            dispatch(getAllReviews(productId));
        };

        if (isDeleted) {
            setTimeout(() => {
                dispatch({ type: DELETE_REVIEW_RESET });
            }, 5000);
        };
    }, [dispatch, isDeleted, deleteError, productId]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"All Reviews - Admin"} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={productReviewsHeaderLoading || deleteHeaderLoading} />

            {/* Header alert */}
            {
                (productReviewsError || deleteError || isDeleted) &&
                <HeaderAlert error={productReviewsError || deleteError} message={productReviewsMessage || deleteMessage} />
            }

            {/* All products list */}
            <Container className="my-5 h-60vh">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Product Reviews */}
                    <Col lg={8}>
                        <Form className="bg-gray-300-color px-4 py-5" onSubmit={productReviewsSubmitHandler}>
                            <h5 className="fw-bold font-18 text-blue-500-color mb-4">Search Reviews</h5>
                            <Stack className="flex-column flex-md-row mt-4" gap={3}>
                                <Form.Group className="mb-3 w-100" controlId="productId">
                                    <Form.Label>Product Id</Form.Label>
                                    <Form.Control type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
                                </Form.Group>
                            </Stack>
                            <Stack className="flex-column flex-md-row" gap={2}>
                                <Button disabled={productId.length === 0 ? true : false} className="bg-secondary-color border-0 py-2 px-3 rounded-0" type="submit">Search</Button>
                            </Stack>
                        </Form>
                        {
                            reviews && reviews.length > 0 ?
                                <Table bordered hover responsive="md" className="mt-5">
                                    <thead className="bg-gray-400-color">
                                        <tr>
                                            <th>Review Id</th>
                                            <th>Name</th>
                                            <th>Comment</th>
                                            <th>Rating</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews &&
                                            reviews.map(review => {
                                                return (
                                                    <tr key={review._id}>
                                                        <td>{review._id}</td>
                                                        <td className="text-overflow line-clamp-1 pb-0">{review.name}</td>
                                                        <td>{review.comment}</td>
                                                        <td className={
                                                            review.rating > 3 ?
                                                                "text-success" : "text-danger"
                                                        }>{review.rating}</td>
                                                        <td className="d-flex">
                                                            <Button onClick={() => deleteReviewHandler(review._id)} className="bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap">Delete</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                :
                                <Stack className="mt-5">
                                    <span className="text-center text-dark font-20">{noReviews}</span>
                                </Stack>
                        }
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default ProductReviews;
