import { combineReducers } from 'redux';
import { cartProductsReducer,saveLaterProductsReducer } from './clientReducers/cartReducers'
import { customerOrdersReducer } from './clientReducers/orderReducers';
import {allProductsReducer, allProductDetailsReducer, allCommentsForProductReducer,allProductsBySellerReducer} from './clientReducers/productsReducers';
import {LoginReducer, SignUpReducer} from './loginReducers';
import { sellerOrdersReducer } from './sellerReducers/orderReducers';

export default combineReducers({
    cartProducts:cartProductsReducer,
    saveLaterProducts:saveLaterProductsReducer,
    customerOrders:customerOrdersReducer,

     allProducts: allProductsReducer,
     ProductDetails:allProductDetailsReducer,
     allComments :allCommentsForProductReducer,
     allSellerProducts:allProductsBySellerReducer,
     loginDetails:LoginReducer,
     SignUpTrue:SignUpReducer,

     sellerOrders:sellerOrdersReducer,


})