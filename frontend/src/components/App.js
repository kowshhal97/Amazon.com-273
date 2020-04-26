import React from 'react';
<<<<<<< HEAD
import Products from './clientComponents/products/products';
import ProductDetails from './clientComponents/products/productDetails';
//import cart from './clientComponents/cartComp/cart_material';
=======
import Products from './products/products';
import ProductDetails from './products/productDetails';
>>>>>>> ea7ff44f2e5e6d8db24dd6d874a332eb94136f83
import cart from './clientComponents/cartComp/cart';
import Home from './Home';
//import header from './clientComponents/orders/orderHeader';
import Orders from './clientComponents/orders/orders';
import CancelledOrders from './clientComponents/orders/cancelledOrders';
import OpenOrders from './clientComponents/orders/openOrders';
import OrderDetails from './clientComponents/orders/orderDetails';
import CancelOrder from './clientComponents/orders/cancelOrder';
import OrderStatus from './clientComponents/orders/orderStatus';


//Seller Components
import SellerOrders from './sellerComponents/orders/orders';
import SellerCancelledOrders from './sellerComponents/orders/cancelledDelivered';
import SellerOpenOrders from './sellerComponents/orders/open';


//Admin Components
import AdminOrders from './adminComponents/orders/orders';

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
        <Route path='/user/cart/' component={cart} />
        <Route path='/user/orders/details/' component={OrderDetails} />
        <Route exact path='/user/orders/' component={Orders} />

        <Route path='/user/orders/cancelOrder/' component={CancelOrder} />
        <Route exact path='/user/open/' component={OpenOrders} />
        <Route path='/user/cancelled/' component={CancelledOrders} />
        <Route path='/user/orders/orderStatus/' component={OrderStatus} />


        <Route exact path='/seller/orders/' component={SellerOrders} />
        <Route path='/seller/cancelledDelivered/' component={SellerCancelledOrders} />
        <Route path='/seller/open/' component={SellerOpenOrders} />

        <Route exact path='/admin/orders/' component={AdminOrders} />





  
      </div>

    </Router>
  )
}

export default App;
