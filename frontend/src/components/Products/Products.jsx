import React, { useEffect } from 'react';
import ProductsCard from './ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/actions/productAction';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Products = () => {
    const dispatch = useDispatch();

    const { products, loading } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])
    return (
        !loading &&
        <>
            {/* Products */}
            <Container className="my-5">
                <h2 className="text-center mb-5">Featured Products</h2>
                <Row xs={1} md={2} xl={4} className="g-4">
                    {products && products.map(product => <ProductsCard key={product._id} product={product} />)}
                </Row>
            </Container >
        </>
    )
}

export default Products
