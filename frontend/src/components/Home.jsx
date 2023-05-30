import React, { useEffect } from 'react';
import Carousels from "./Carousels";
import Carousel from 'react-bootstrap/Carousel';
// import banner1 from '../images/banner1.jpg';
// import banner2 from '../images/banner2.jpg';
// import banner3 from '../images/banner3.jpg';
import ProductsCard from './Products/ProductsCard';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import MetaData from './MetaData';
import Row from 'react-bootstrap/Row';
import { getProduct } from '../store/actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Ebuy"} />

            {/* Carousel Banners */}
            <Carousel className="home-carousel">
                <Carousels banner1={require('../images/banner1.jpg').default} />
                <Carousels banner2={require('../images/banner2.jpg').default} />
                <Carousels banner3={require('../images/banner3.jpg').default} />
            </Carousel>

            {/* Products */}
            <Container className="my-5">
                <h2 className="text-center mb-5">Featured Products</h2>
                <Row xs={1} md={2} xl={4} className="g-4">
                    {products && products.slice(0, 9).map(product => <ProductsCard key={product._id} product={product} />)}
                </Row>
                {/* Load more button */}
                <div className="text-center my-4">
                    <Button variant="warning"> <Link className="text-decoration-none text-dark" to={`/products`}>See all products</Link></Button>
                </div>
            </Container>
        </>
    )
}

export default Home
