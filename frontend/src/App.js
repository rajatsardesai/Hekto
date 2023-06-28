import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/Route/ProtectedRoute';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import Payment from './components/Cart/Payment';
import OrderSucess from './components/Cart/OrderSucess';
import MyOrders from './components/Orders/MyOrders';
import OrderDetails from './components/Orders/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import UsersList from './components/Admin/UsersList';
import UpdateUser from './components/Admin/UpdateUser';
import ProductReviews from './components/Admin/ProductReviews';
import { loadUser } from './store/actions/userAction';
import store from "./store/store";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HeaderBelt from './components/Header/HeaderBelt';
import Footer from './components/Footer';

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");

  const getStripeApiKey = async () => {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error retrieving Stripe API key:", error);
    }
  };

  const promise = loadStripe(stripeApiKey);

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <>
      <Router>
        <Elements stripe={promise}>
          <HeaderBelt />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/products" Component={Products} />
            <Route exact path="/product/:id" Component={ProductDetails} />
            <Route path="/products/:keyword" Component={Products} />
            <Route path="/cart" Component={Cart} />
            <Route exact path="/login" Component={Login} />
            <Route exact path='/password/forgot' Component={ForgotPassword} />
            <Route exact path='/password/reset/:token' Component={ResetPassword} />
            <Route exact path="/register" Component={Signup} />
            <Route exact path='/account' Component={ProtectedRoute}>
              <Route exact path='/account' Component={Profile} />
            </Route>
            <Route exact path='/me/update' Component={ProtectedRoute}>
              <Route exact path='/me/update' Component={Profile} />
            </Route>
            <Route exact path='/password/update' Component={ProtectedRoute}>
              <Route exact path='/password/update' Component={Profile} />
            </Route>
            <Route exact path='/shipping' Component={ProtectedRoute}>
              <Route exact path='/shipping' Component={Shipping} />
            </Route>
            {
              stripeApiKey && (
                <Route exact path="/process/payment" Component={ProtectedRoute}>
                  <Route exact path="/process/payment" Component={Payment} />
                </Route>
              )
            }
            <Route exact path='/success' Component={ProtectedRoute}>
              <Route exact path='/success' Component={OrderSucess} />
            </Route>
            <Route exact path='/orders' Component={ProtectedRoute}>
              <Route exact path='/orders' Component={MyOrders} />
            </Route>
            <Route exact path='/order/:id' Component={ProtectedRoute}>
              <Route exact path='/order/:id' Component={OrderDetails} />
            </Route>
            <Route exact path='/admin/dashboard' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/dashboard' Component={Dashboard} />
            </Route>
            <Route exact path='/admin/products' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/products' Component={ProductList} />
            </Route>
            <Route exact path='/admin/product' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/product' Component={NewProduct} />
            </Route>
            <Route exact path='/admin/product/:id' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/product/:id' Component={UpdateProduct} />
            </Route>
            <Route exact path='/admin/orders' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/orders' Component={OrderList} />
            </Route>
            <Route exact path='/admin/order/:id' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/order/:id' Component={ProcessOrder} />
            </Route>
            <Route exact path='/admin/users' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/users' Component={UsersList} />
            </Route>
            <Route exact path='/admin/user/:id' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/user/:id' Component={UpdateUser} />
            </Route>
            <Route exact path='/admin/reviews' element={<ProtectedRoute isAdmin={true} />}>
              <Route exact path='/admin/reviews' Component={ProductReviews} />
            </Route>
          </Routes>
          <Footer />
        </Elements>
      </Router>
    </>
  )
}

export default App;
