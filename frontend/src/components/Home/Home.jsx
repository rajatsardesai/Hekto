import React, { useEffect } from 'react';
import MetaData from '../MetaData';
import Carousels from "./Carousels";
import ProductsCard from '../Products/ProductsCard';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { getAllProducts } from '../../store/actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );

    // Filter featured products to show ratings above 4
    // const filteredData = products.filter(product => product.ratings > 3);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>
            {/* Title tag */}
            <MetaData title={"Online Furniture Shopping Store: Shop Online in India for Furniture, Home Decor, Homeware Products @ Hekto"} />

            {/* Carousel Banners */}
            <Carousels />

            {/* Products */}
            <Container className="my-5 pt-5">
                <h2 className="mb-3 fs-1 fw-bold text-center text-blue-700-color">Featured Products</h2>

                <Row xs={1} md={2} xl={4} className="g-4 mt-1 justify-content-center">
                    {products.length === 0 ?
                        <span className="text-center font-16">No products available</span>
                        : products.map(product => <FeaturedProducts key={product._id} product={product} />
                        )
                    }
                </Row>
                {/* <Row xs={1} md={2} xl={4} className="g-4">
                    {filteredData && filteredData.map(product => <ProductsCard key={product._id} product={product} />)}
                </Row> */}
                {/* Load more button */}
                {/* <div className="text-center my-4">
                    <Button variant="warning"> <Link className="text-decoration-none text-dark" to={`/products`}>See all products</Link></Button>
                </div> */}
            </Container>
        </>
    )
}

export default Home;
