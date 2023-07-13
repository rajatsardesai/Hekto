import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CategoryFilterItem from './CategoryFilterItem';
import PriceFilterItem from './PriceFilterItem';
import RatingFilterItem from './RatingFilterItem';

const categories = [
    "Sofas",
    "Beds",
    "Wardrobes",
    "Dressing Tables",
    "Dining Tables",
    "Study Tables",
    "Chairs",
    "TV and Media Units",
];

const ProductFilters = (props) => {
    const { price, setPrice, setCategory, setRatings } = props;
    const [categoryActiveIndex, setCategoryActiveIndex] = useState(null);
    const [ratingActiveIndex, setRatingActiveIndex] = useState(null);
    const [isCategory, setIsCategory] = useState(false);

    // Resize handler to disable filter accordion
    const handleResize = () => {
        if (window.innerWidth > 767 && document.querySelector(".accordion-collapse")) {
            document.querySelector(".accordion-collapse").classList.add("show");
        } else {
            document.querySelector(".accordion-collapse").classList.remove("show");
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Category filter */}
            <div className="bg-white">
                <Accordion>
                    <Accordion.Item className="border-0">
                        <Accordion.Header className="d-md-none">Filter</Accordion.Header>
                        <Accordion.Body className="ps-0">
                            {/* Category Filter */}
                            <CategoryFilterItem categories={categories} categoryActiveIndex={categoryActiveIndex} isCategory={isCategory} setIsCategory={setIsCategory} setCategory={setCategory} setCategoryActiveIndex={setCategoryActiveIndex} />

                            {/* Price filter */}
                            <PriceFilterItem price={price} setPrice={setPrice} />

                            {/* Rating filter */}
                            <RatingFilterItem ratingActiveIndex={ratingActiveIndex} setRatings={setRatings} setRatingActiveIndex={setRatingActiveIndex} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default ProductFilters
