export const cartProductsReducer = (state = [], action)=> {
    // console.log(action.payload)
     switch(action.type){
         case 'CART_PRODUCTS':
             return action.payload
         
             default:
                 return state
 
     }
 }