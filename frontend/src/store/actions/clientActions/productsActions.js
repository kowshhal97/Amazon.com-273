import axios from 'axios';

import exportData from '../../../config/config';


export const getALLProducts = () => async dispatch => {

    const response = await axios.get(exportData.backenedURL + 'read/products' );
    console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'ALL_PRODUCTS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'ALL_PRODUCTS',
            payload: []
        })
    }

}


export const getALLProductsBySeller = (s_id) => async dispatch => {

   let seller_id = 1 ;
    const response = await axios.get(exportData.backenedURL + 'read/seller/product/' + seller_id);
    console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'ALL_SELLER_PRODUCTS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'ALL_SELLER_PRODUCTS',
            payload: []
        })
    }

}


 export const getALLCommentsForProduct = (prod_id) => async dispatch => {

    let p_id = 1 ;
     const response = await axios.get(exportData.backenedURL + 'read/customer/comments/product/' + p_id);
     console.log(response)
 
     if (response.data.length) {
         dispatch({
             type: 'ALL_COMMENTS_PRODUCT',
             payload: response.data
         })
     }
     else {
         dispatch({
             type: 'ALL_COMMENTS_PRODUCT',
             payload: []
         })
     }
 
 }



 export const setCommentForProduct = (user_id,prod_id) => async dispatch => {

    let p_id = 1 ;
    let u_id =1;
     const response = await axios.post(exportData.backenedURL + 'write/comments/' + p_id + '/'+ u_id, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         }
     });
     console.log(response)
 
     if (response.data.length) {
         dispatch({
             type: 'ADD_PRODUCT_COMMENT',
             payload: response.data
         })
     }
     else {
         dispatch({
             type: 'ADD_PRODUCT_COMMENT',
             payload: []
         })
     }
 
 }