import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import PageLayout from './components/PageLayout';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/Route/ProtectedRoute';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import Payment from './components/Cart/Payment';
import { loadUser } from './store/actions/userAction';
import store from "./store/store";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");

  const getStripeApiKey = async () => {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/" Component={Home} />
            <Route exact path="/products" Component={Products} />
            <Route exact path="/product/:id" Component={ProductDetails} />
            <Route path="/products/:keyword" Component={Products} />
            <Route path="/cart" Component={Cart} />
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
              stripeApiKey &&
              <Route exact path='/process/payment' Component={Elements}>
                <Route exact path='/process/payment' Component={ProtectedRoute}>
                  <Route exact path='/process/payment' Component={Payment} />
                </Route>
              </Route>
            }
          </Route>
          <Route exact path="/login" Component={Login} stripe={loadStripe(stripeApiKey)} />
          <Route exact path='/password/forgot' Component={ForgotPassword} />
          <Route exact path='/password/reset/:token' Component={ResetPassword} />
          <Route exact path="/register" Component={Signup} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
