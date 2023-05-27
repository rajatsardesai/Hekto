import React from 'react';
import ReactStars from "react-rating-stars-component";
import { IconContext } from "react-icons";
import { MdAccountCircle } from "react-icons/md";

const ReviewCard = ({ review }) => {
    const options = {
        edit: false,
        color: "rgb(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true
    };

    return (
        <>
            <div className="reviewCard">
                {/* <img src={profilePng} alt="User" /> */}
                <IconContext.Provider value={{ color: "gray", size:"30px" }}>
                    <div className="d-inline-block me-2">
                        <MdAccountCircle />
                    </div>
                </IconContext.Provider>
                <span className="fs-6">{review.name}</span>
                <ReactStars {...options} />
                <p>{review.comment}</p>
            </div>
        </>
    )
}

export default ReviewCard
