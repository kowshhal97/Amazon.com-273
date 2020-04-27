import React from 'react';

import cart from './clientComponents/cartComp/cart';
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

const App = () => {
  return (
    <Router>
      <div>
      </div>
      <div>
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
