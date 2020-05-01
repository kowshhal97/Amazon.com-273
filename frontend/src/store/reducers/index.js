import { combineReducers } from 'redux';
import { cartProductsReducer,saveLaterProductsReducer } from './clientReducers/cartReducers'
import { customerOrdersReducer } from './clientReducers/orderReducers';

export default combineReducers({
    cartProducts:cartProductsReducer,
    saveLaterProducts:saveLaterProductsReducer,
    customerOrders:customerOrdersReducer,

})