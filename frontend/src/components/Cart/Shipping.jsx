import React, { useRef, useMemo } from 'react';
import "./Shipping.css";
import HeaderLoading from '../Header/HeaderLoading';
import HeaderAlert from '../Header/HeaderAlert';
import MetaData from '../MetaData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItems from './CartItems';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartTotals from './CartTotals';
import { saveShippingInfo } from '../../store/actions/cartAction';
import ShippingContactInfo from './ShippingContactInfo';
import ShippingAddressInfo from './ShippingAddressInfo';
import { useFormik } from "formik";
import { shippingSchema } from '../../yupSchema';

const initialValues = {
    address: "",
    city: "",
    state: "",
    landmark: "",
    pinCode: "",
    phoneNo: ""
};

const Shipping = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submitbuttonref = useRef();

    const { cartItems } = useSelector(state => state.cart);
    const { loading, user, error, message, headerLoading } = useSelector(state => state.user);

    const totalPrice = useMemo(
        () => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
        [cartItems]
    );
    const shippingPrice = 0;
    const gstPrice = (totalPrice / 50);
    const grandTotal = totalPrice + shippingPrice + gstPrice;

    // Form handling and validation -- Formik and Yup
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: shippingSchema,
        onSubmit: values => {
            const { address, city, state, landmark, pinCode, phoneNo } = values;
            const data = {
                totalPrice,
                shippingPrice,
                gstPrice,
                grandTotal
            };
            sessionStorage.setItem("orderInfo", JSON.stringify(data));
            dispatch(saveShippingInfo({ address, city, state, landmark, pinCode, phoneNo }));
            navigate("/process/payment");
        }
    });

    return (
        <>
            {/* Title tag */}
            <MetaData title={`Shipping -@Hekto`} />

            {/* React top loading bar */}
            <HeaderLoading progressLoading={headerLoading} />

            {/* Header alert */}
            {
                (error) &&
                <HeaderAlert error={error} message={message} />
            }

            {
                !loading &&
                <Container className="my-5">
                    <Row>
                        <Col lg={8} className="mb-5 mb-lg-0 pe-md-5">
                            <h5 className="fw-bold font-22 text-blue-500-color mb-4">Checkout</h5>
                            <Form className="bg-gray-300-color px-4 py-5" onSubmit={handleSubmit}>
                                <ShippingContactInfo user={user} values={values.phoneNo} errors={errors.phoneNo} touched={touched.phoneNo} handleBlur={handleBlur} handleChange={handleChange} />

                                <ShippingAddressInfo values={values} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} />

                                <Link to={"/products"} className="font-lato text-white text-decoration-none"><Button className="bg-secondary-color border-0 my-2 py-2 px-3 rounded-0">Continue Shopping</Button></Link>
                            </Form>
                        </Col>

                        <Col lg={4}>
                            <h5 className="fw-bold font-22 text-blue-500-color text-center mb-4">Order Summary</h5>
                            <div className="shipping-order-details overflow-auto mb-5">
                                {
                                    cartItems && cartItems.map(item =>
                                        <CartItems key={item.product} item={item} />
                                    )
                                }
                            </div>
                            <CartTotals cartItems={cartItems} submitbuttonref={submitbuttonref} shippingSubmit={handleSubmit} totalPrice={totalPrice} shippingPrice={shippingPrice} gstPrice={gstPrice} grandTotal={grandTotal} />
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
};

export default Shipping;