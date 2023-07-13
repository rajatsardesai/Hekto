import React, { useState } from 'react';
import "./LatestProductsTabs.css"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LatestProductsTabs = ({ latestProducts, bestSellerProducts, filteredRatingProducts }) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const tabs = [
        {
            tab: "tab1",
            products: latestProducts
        },
        {
            tab: "tab2",
            products: bestSellerProducts
        },
        {
            tab: "tab3",
            products: filteredRatingProducts
        }
    ];

    return (
        <>
            {
                (latestProducts || bestSellerProducts || filteredRatingProducts).length === 0 ?
                    <span className="text-center text-dark font-20">No products to show</span>
                    :
                    <Tab.Container defaultActiveKey={activeTab} onSelect={handleTabSelect}>
                        <Nav variant="tabs" className="home-products-tab justify-content-center flex-column flex-md-row border-0 mb-5">
                            <Nav.Item>
                                <Nav.Link eventKey="tab1" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">New Arrival</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">Best Seller</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab3" className="border-0 font-lato text-center my-2 mx-0 mx-md-3">Featured</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            {
                                tabs && tabs.map((item, index) => {
                                    return (
                                        <Tab.Pane key={index} eventKey={item.tab}>
                                            <Row className="mb-5 pb-4 justify-content-center g-4">
                                                {
                                                    (item.products) && item.products.slice(0, 6).map(product => {
                                                        return (
                                                            <Col key={product._id}>
                                                                <Card className=" home-latest-product-cards text-decoration-none border-0 p-0 m-auto" as={Link} to={`/product/${product._id}`}>
                                                                    <Card.Img variant="top" src={product.images[0].url} alt={product.name} className="card-image m-auto object-fit-contain" />
                                                                    <Card.Body className="text-dark d-flex justify-content-between px-0 pb-0">
                                                                        <Card.Title className="text-overflow text-secondary-color me-3 mb-0">{product.name}</Card.Title>
                                                                        <Card.Text>
                                                                            ₹<span className="font-16 text-blue-300-color">{product.price}</span>
                                                                        </Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    )
                                })
                            }
                        </Tab.Content>
                    </Tab.Container>
            }
        </>
    )
}

export default LatestProductsTabs;
