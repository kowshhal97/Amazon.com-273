export const allProductsReducer = (state = [], action)=> {
    // console.log(action.payload)
     switch(action.type){
         case 'ALL_PRODUCTS':
             return action.payload
         
             default:
                 return state
 
     }
 }

 export const allProductsBySellerReducer = (state = [], action)=> {
    // console.log(action.payload)
     switch(action.type){
         case 'ALL_SELLER_PRODUCTS':
             return action.payload
         
             default:
                 return state
 
     }
 }


 export const allCommentsForProductReducer = (state = [], action)=> {
    // console.log(action.payload)
     switch(action.type){
         case 'ALL_COMMENTS_PRODUCT':
             return action.payload
         
             default:
                 return state
 
     }
 }