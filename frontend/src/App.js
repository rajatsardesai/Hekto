import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/products" Component={Products}></Route>
          <Route exact path="/product/:id" Component={ProductDetails}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
