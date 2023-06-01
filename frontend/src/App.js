import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/products" Component={Products}></Route>
            <Route exact path="/product/:id" Component={ProductDetails}></Route>
            <Route path="/products/:keyword" Component={Products}></Route>
          </Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Signup}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
