import { combineReducers } from 'redux';
import { cartProductsReducer } from './clientReducers/cartReducers'


export default combineReducers({
    cartProducts:cartProductsReducer,

})