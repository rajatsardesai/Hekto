import React, { memo } from 'react';
import Form from 'react-bootstrap/Form';
import ReactStars from "react-rating-stars-component";

const RatingFilterItem = memo((props) => {

    const { ratingActiveIndex, setRatingActiveIndex, setRatings } = props;

    // Ratings filter handler
    const handleRatings = (value, index) => {
        setRatings(value);
        setRatingActiveIndex(index);
    };

    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true
    };

    return (
        <>
            <Form.Label className="mt-5 font-20 fw-bold text-primary-color text-decoration-underline">Avg. Customer Review</Form.Label>
            <div className="d-flex cursor-pointer" onClick={() => handleRatings(4, 3)}>
                < ReactStars {...options} value={4} /> <span className={`mx-2 fs-6 ${ratingActiveIndex === 3 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => handleRatings(3, 2)}>
                < ReactStars {...options} value={3} /> <span className={`mx-2 fs-6 ${ratingActiveIndex === 2 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => handleRatings(2, 1)}>
                < ReactStars {...options} value={2} /> <span className={`mx-2 fs-6 ${ratingActiveIndex === 1 ? 'fw-bold' : ''}`}>& up</span>
            </div>
            <div className="d-flex cursor-pointer" onClick={() => handleRatings(1, 0)}>
                < ReactStars {...options} value={1} /> <span className={`mx-2 fs-6 ${ratingActiveIndex === 0 ? 'fw-bold' : ''}`}>& up</span>
            </div>
        </>
    )
});

export default RatingFilterItem;
