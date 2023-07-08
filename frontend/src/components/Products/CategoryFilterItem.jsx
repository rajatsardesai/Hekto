import React, { memo } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryFilterItem = memo((props) => {

    const { categories, categoryActiveIndex, isCategory, setIsCategory, setCategoryActiveIndex, setActiveIndex } = props;

    // Category filter handler
    const handleCategory = (category, index) => {
        setIsCategory(!isCategory);
        setCategoryActiveIndex(isCategory ? "" : category);
        setActiveIndex(index);
    };

    return (
        <>
            <Form.Label className="font-20 fw-bold text-primary-color text-decoration-underline">Category</Form.Label>
            <ListGroup as="ul">
                {
                    categories.map((category, index) => {
                        return (
                            <ListGroup.Item key={index} as="li" className={`font-lato text-gray-500-color border-0 cursor-pointer py-1 px-0 ${categoryActiveIndex === index ? 'fw-bold' : ''}`} onClick={() => handleCategory(category, index)}>{category}</ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </>
    )
});

export default CategoryFilterItem;
