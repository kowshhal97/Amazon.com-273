import React from 'react';
import Products from './products/products';
import ProductDetails from './products/productDetails';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp/SingUp';
import SignIn from './Login/SingIn';

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      </div>
      
      
      <div>
         <Route path='/signup' component={SignUp} />
         <Route path='/signin' component={SignIn} />
        <Route path='/user/products' component={Products} />
        <Route path='/user/product/Productdetails' component={ProductDetails} />
  
      </div>

    </Router>
  )
}

export default App;
