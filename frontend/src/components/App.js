import React from 'react';
import Products from './clientComponents/products/products';
import ProductDetails from './clientComponents/products/productDetails';
import cart from './clientComponents/cartComp/cart';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      </div>
      
      
      <div>
        
        <Route path='/user/products' component={Products} />
        <Route path='/user/product/Productdetails' component={ProductDetails} />
        <Route path='/user/cart/' component={cart} />

  
      </div>

    </Router>
  )
}

export default App;
