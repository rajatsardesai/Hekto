import { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InitLoader from './components/Utils/InitLoader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadUser } from './store/actions/userAction';
import store from "./store/store";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HeaderBelt from './components/Header/HeaderBelt';
import Footer from './components/Footer';
import Forbidden from './components/Utils/Forbidden';
import NetworkStatus from './components/Utils/NetworkStatus';
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './components/Utils/ErrorBoundary';

const Home = lazy(() => import('./components/Home/Home'));
const Products = lazy(() => import('./components/Products/Products'));
const ProductDetails = lazy(() => import('./components/Products/ProductDetails'));
const Login = lazy(() => import('./components/User/Login'));
const Signup = lazy(() => import('./components/User/Signup'));
const Profile = lazy(() => import('./components/User/Profile'));
const ProtectedRoute = lazy(() => import('./components/Route/ProtectedRoute'));
const ForgotPassword = lazy(() => import('./components/User/ForgotPassword'));
const ResetPassword = lazy(() => import('./components/User/ResetPassword'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Shipping = lazy(() => import('./components/Cart/Shipping'));
const Payment = lazy(() => import('./components/Cart/Payment'));
const OrderSucess = lazy(() => import('./components/Cart/OrderSucess'));
const MyOrders = lazy(() => import('./components/Orders/MyOrders'));
const OrderDetails = lazy(() => import('./components/Orders/OrderDetails'));
const Dashboard = lazy(() => import('./components/Admin/Dashboard'));
const ProductList = lazy(() => import('./components/Admin/ProductList'));
const NewProduct = lazy(() => import('./components/Admin/NewProduct'));
const UpdateProduct = lazy(() => import('./components/Admin/UpdateProduct'));
const OrderList = lazy(() => import('./components/Admin/OrderList'));
const ProcessOrder = lazy(() => import('./components/Admin/ProcessOrder'));
const UsersList = lazy(() => import('./components/Admin/UsersList'));
const UpdateUser = lazy(() => import('./components/Admin/UpdateUser'));
const ProductReviews = lazy(() => import('./components/Admin/ProductReviews'));
const Blogs = lazy(() => import('./components/Blogs/Blogs'));
const Contact = lazy(() => import('./components/Contact/Contact'));

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

  const promise = stripeApiKey ? loadStripe(stripeApiKey) : null;

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          window.location.reload()
        }}
      >
        <Suspense fallback={<InitLoader />}>
          <Router>
            <NetworkStatus />
            <Elements stripe={promise}>
              <HeaderBelt />
              <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/products" Component={Products} />
                <Route exact path="/product/:name/:id" Component={ProductDetails} />
                <Route path="/products/:keyword" Component={Products} />
                <Route path="/blogs" Component={Blogs} />
                <Route path="/contact" Component={Contact} />
                <Route path="/cart" Component={Cart} />
                <Route exact path="/login" Component={Login} />
                <Route exact path='/password/forgot' Component={ForgotPassword} />
                <Route exact path='/password/reset/:token' Component={ResetPassword} />
                <Route exact path="/register" Component={Signup} />
                <Route exact path='/account' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/account' Component={Profile} />
                </Route>
                <Route exact path='/me/update' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/me/update' Component={Profile} />
                </Route>
                <Route exact path='/password/update' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/password/update' Component={Profile} />
                </Route>
                <Route exact path='/shipping' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/shipping' Component={Shipping} />
                </Route>
                {
                  stripeApiKey && (
                    <Route exact path="/process/payment" element={<ProtectedRoute isAdmin={false} />}>
                      <Route exact path="/process/payment" Component={Payment} />
                    </Route>
                  )
                }
                <Route exact path='/success' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/success' Component={OrderSucess} />
                </Route>
                <Route exact path='/orders' element={<ProtectedRoute isAdmin={false} />}>
                  <Route exact path='/orders' Component={MyOrders} />
                </Route>
                <Route exact path='/order/:id' element={<ProtectedRoute isAdmin={false} />}>
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
                <Route path='*' Component={Forbidden} />
              </Routes>
              <Footer />
            </Elements>
          </Router >
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App;
