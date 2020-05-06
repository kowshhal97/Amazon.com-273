import React from 'react';

import cart from './clientComponents/cartComp/cart';

//import header from './clientComponents/orders/orderHeader';
import Orders from './clientComponents/orders/orders';
import CancelledOrders from './clientComponents/orders/cancelledOrders';
import OpenOrders from './clientComponents/orders/openOrders';
import OrderDetails from './clientComponents/orders/orderDetails';
import CancelOrder from './clientComponents/orders/cancelOrder';
import OrderStatus from './clientComponents/orders/orderStatus';

import ManageAddresses from './clientComponents/address/ManageAddresses';
import AddAddress from './clientComponents/address/AddAddress';
import EditAddress from './clientComponents/address/EditAddress';
import ManageCards from './clientComponents/cards/ManageCards';
import AddCard from './clientComponents/cards/AddCard';
import EditCard from './clientComponents/cards/EditCard';
import CustomerProfile from './clientComponents/profile/Profile';
import SingleImageUploadComponent from './test'
// client prodcts realted flows
import UserHome from './clientComponents/userHome/userHome';
import ProductDetails from './clientComponents/products/productDetailsPage';



//Seller Components
import SellerOrders from './sellerComponents/orders/orders';
import SellerCancelledOrders from './sellerComponents/orders/cancelledDelivered';
import SellerOpenOrders from './sellerComponents/orders/open';
import SellerProfile from './sellerComponents/profile/Profile';


//Admin Components
import AdminOrders from './adminComponents/orders/orders';
// import Analytics from './adminComponents/analytics/analytics';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Common components 
import SignUp from './SignUp/SingUp';
import SignIn from './Login/SingIn';
import Home from './Home';





const App = () => {
  return (
    <Router>
      <div>
      </div>
      <div>
         <Route path='/signup' component={SignUp} />
         <Route path='/signin' component={SignIn} />
         <Route path='/userHome' component={UserHome} />
        <Route path='/user/Productdetails' component={ProductDetails} />

        
        <Route path='/user/cart/' component={cart} />
        <Route path='/user/orders/details/' component={OrderDetails} />
        <Route exact path='/user/orders/' component={Orders} />

        <Route path='/user/orders/cancelOrder/' component={CancelOrder} />
        <Route exact path='/user/open/' component={OpenOrders} />
        <Route path='/user/cancelled/' component={CancelledOrders} />
        <Route path='/user/orders/orderStatus/' component={OrderStatus} />

        <Route path='/user/address/manageAddresses/' component={ManageAddresses} />
        <Route path='/user/address/addAddress/' component={AddAddress} />
        <Route path='/user/address/editAddress/' component={EditAddress} />
        <Route path='/user/cards/manageCards/' component={ManageCards} />
        <Route path='/user/cards/addCard/' component={AddCard} />
        <Route path='/user/cards/editCard/' component={EditCard} />
        <Route path='/user/profile/' component={CustomerProfile} />
        <Route path='/test/' component={SingleImageUploadComponent} />

        <Route exact path='/seller/orders/' component={SellerOrders} />
        <Route path='/seller/cancelledDelivered/' component={SellerCancelledOrders} />
        <Route path='/seller/open/' component={SellerOpenOrders} />
        <Route exact path='/seller/profile/' component={SellerProfile} />

        <Route exact path='/admin/orders/' component={AdminOrders} />
        {/* <Route exact path='/admin/analytics/' component={Analytics} /> */}









  
      </div>

    </Router>
  )
}

export default App;
