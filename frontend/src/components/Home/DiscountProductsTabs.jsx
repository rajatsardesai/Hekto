import React, { useState } from 'react';
import "./DiscountProductsTabs.css"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const DiscountProductsTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const tabs = [
        {
            tab: "tab1",
            productName: "Chairs",
            productImage: "/assets/content/hekto-discounted-products-chair.webp",
            productAlt: "hekto-discounted-products-chair"
        },
        {
            tab: "tab2",
            productName: "Sofas",
            productImage: "/assets/content/hekto-latest-trending-chair.webp",
            productAlt: "hekto-latest-trending-chair"
        },
        {
            tab: "tab3",
            productName: "Sofa Collection",
            productImage: "/assets/content/hekto-discounted-products-sofa-collection.webp",
            productAlt: "hekto-discounted-products-sofa-collection"
        }
    ];

    return (
        <>
            <Tab.Container defaultActiveKey={activeTab} onSelect={handleTabSelect}>
                <Nav variant="tabs" className="home-products-tab justify-content-center flex-column flex-md-row border-0 mb-5">
                    <Nav.Item>
                        <Nav.Link eventKey="tab1" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">Chairs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tab2" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">Sofas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tab3" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">Sofa Collection</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    {
                        tabs && tabs.map((item, index) => {
                            return (
                                <Tab.Pane key={index} eventKey={item.tab}>
                                    <Row className="justify-content-center">
                                        <Col md="6" className="mb-4 mb-md-0">
                                            <h2 className="text-primary-color fw-bold font-35 mb-3">20% Discount Off on {item.productName}</h2>
                                            <p className="text-gray-100-color font-lato font-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                            <Row className="text-gray-100-color font-lato font-17 discount-products-list">
                                                <Col md={6} className="mb-3 discount-products-list-items">Material expose like metals</Col>
                                                <Col md={6} className="mb-3 discount-products-list-items">Clear lines and geomatric figures</Col>
                                                <Col md={6} className="mb-3 discount-products-list-items">Simple neutral colours.</Col>
                                                <Col md={6} className="mb-3 discount-products-list-items">Material expose like metals</Col>
                                            </Row>
                                            <Button as={Link} to="/products" className=" bg-secondary-color border-0 rounded-0 fw-semibold d-flex align-items-center justify-content-center mt-4">
                                                Shop Now
                                            </Button>
                                        </Col>
                                        <Col md="6 position-relative">
                                            <img
                                                className="d-block img-fluid m-auto"
                                                src={process.env.PUBLIC_URL + '/assets/content/hekto-discounted-products-bubble.webp'}
                                                alt={`hekto-discounted-products-bubble`}
                                            />
                                            <img
                                                className="dicounted-products-image d-block img-fluid m-auto"
                                                src={process.env.PUBLIC_URL + item.productImage}
                                                alt={item.productAlt}
                                            />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            )
                        })
                    }
                </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default DiscountProductsTabs;
