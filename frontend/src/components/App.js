import React from 'react';
import Products from './products/products';
import ProductDetails from './products/productDetails';
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
  
      </div>

    </Router>
  )
}

export default App;
