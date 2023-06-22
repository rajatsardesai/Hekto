import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/esm/Stack';
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProduct } from '../../store/actions/productAction';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state => state.products));

    let outOfStock = 0;

    products &&
        products.forEach(item => {
            if (item.stock === 0) {
                outOfStock += 1;
            }
        });

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["#fb2e86"],
                hoverBackgroundColor: ["#fb2448"],
                data: [0, 4000]
            }
        ]
    };

    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#151875", "#fb2e86"],
                hoverBackgroundColor: ["#151875", "#fb2e86"],
                data: [outOfStock, products.length - outOfStock]
            }
        ]
    };

    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Dashboard - Admin"} />

            <Container className="my-5">
                <Row>
                    <h5 className="fw-bold font-22 text-blue-500-color mb-4">Admin Dashboard</h5>
                    <Col lg={4} className="mb-5 pe-md-5">
                        <Sidebar />
                    </Col>

                    {/* Dashboard */}
                    <Col lg={8}>
                        <span className="fw-bold font-22 text-dark mb-4">Total Amount: 500</span>
                        <Stack className="flex-column flex-md-row mt-4" gap={1}>
                            <Link to={"/admin/products"} className="w-100 bg-gray-400-color text-center p-4 text-decoration-none text-blue-500-color font-18">Products: {products && products.length}</Link>
                            <Link to={"/admin/orders"} className="w-100 bg-gray-400-color text-center p-4 text-decoration-none text-blue-500-color font-18">Orders: 10</Link>
                            <Link to={"/admin/users"} className="w-100 bg-gray-400-color text-center p-4 text-decoration-none text-blue-500-color font-18">Users: 2</Link>
                        </Stack>
                        <Line data={lineState} className="my-5" />
                        <div className="w-50 m-auto">
                            <Doughnut data={doughnutState} className="my-5" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;
