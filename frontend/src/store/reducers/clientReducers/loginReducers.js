export const customerLoginReducer = (state = [], action)=> {
    // console.log(action.payload)
     switch(action.type){
         case 'CUSTOMER_LOGIN':
             return action.payload
         
             default:
                 return state
 
     }
 }