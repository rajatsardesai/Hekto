import React, { useEffect, useState } from 'react';
import "./CartItems.css"
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';

const CartItems = (props) => {
    const { image, name, product, price, quantity, stock } = props.item;

    const dispatch = useDispatch();

    const [selectedQuantityValue, setSelectedQuantityValue] = useState(quantity);

    // For product stock
    const productStock = Array.from({ length: stock }, (_, index) => index + 1);

    const updateQuantity = (eventKey) => {
        setSelectedQuantityValue(eventKey);
    };

    // For removing cart item
    const removeCartItem = () => {
        dispatch(removeFromCart(product));
    };

    useEffect(() => {
        dispatch(addToCart(product, selectedQuantityValue));
    }, [dispatch, product, selectedQuantityValue]);

    return (
        <>
            <Stack direction="horizontal" className="product-cart-items mb-3">
                <Link to={`/product/${product}`} className="me-3"><img src={image} alt={name} className="rounded product-cart-items--image" /></Link>
                <Stack direction="vertical">
                    <div className="d-flex flex-column flex-md-row justify-content-between" gap={3}>
                        <Link to={`/product/${product}`} className="font-18 text-decoration-none text-dark text-overflow product-cart-items--name">{name}</Link>
                        <Link className="text-dark" onClick={removeCartItem}>Remove</Link>
                    </div>
                    <div className="py-2">
                        <span className="fs-6">₹</span><span className="font-18 fw-bold text-blue-400-color">{price}.00</span>
                    </div>
                    <Dropdown onSelect={updateQuantity}>
                        <Dropdown.Toggle className="border" variant="transparent" id="quantity-dropdown">
                            Qty: {selectedQuantityValue && selectedQuantityValue}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="addtocart-dropdown">
                            {
                                productStock.map((stock, index) => {
                                    return (
                                        <Dropdown.Item key={index} eventKey={stock}>{stock}</Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <span className="font-16 text-blue-400-color">{props.product.total}</span> */}
                </Stack>
            </Stack>
            <hr />
        </>
    )
}

export default CartItems;
