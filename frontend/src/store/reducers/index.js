import { combineReducers } from 'redux';
import { cartProductsReducer,saveLaterProductsReducer } from './clientReducers/cartReducers'
import { customerOrdersReducer } from './clientReducers/orderReducers';
import {allProductsReducer, allProductDetailsReducer} from './clientReducers/productsReducers';
import {LoginReducer} from './clientReducers/loginReducers'

export default combineReducers({
    cartProducts:cartProductsReducer,
    saveLaterProducts:saveLaterProductsReducer,
    customerOrders:customerOrdersReducer,

     allProducts: allProductsReducer,
     ProductDetails:allProductDetailsReducer,
     loginDetails:LoginReducer
})