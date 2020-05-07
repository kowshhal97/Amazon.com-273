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


export const getProductDetails = (prod_id) => async dispatch => {

     const response = await axios.get(exportData.backenedURL + 'read/products/' + prod_id);
     console.log(response)
 
     if (response.data) {
         dispatch({
             type: 'PRODUCT_DETAILS',
             payload: response.data
         })
     }
     else {
         dispatch({
             type: 'PRODUCT_DETAILS',
             payload: []
         })
     }
 
 }


export const getALLProductsBySeller = (s_id) => async dispatch => {

   
    const response = await axios.get(exportData.backenedURL + 'read/seller/product/' + s_id);
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

   
     const response = await axios.get(exportData.backenedURL + 'read/customer/comments/product/' + prod_id);
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



 export const postCommentForProduct = (user_id,prod_id) => async dispatch => {

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



 export const updateProductComment = (values) => async (dispatch) => {

    let data = {
        comment:values.comment
    }

    await axios.put(exportData.backenedURL + 'write/comments/'+values.user_id + '/' + values.productId + '/', JSON.stringify(data), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        }
    })
        .then(async res => {
            if (res.status >= 400) {
                console.log(res)
            }
            else {
                 dispatch(getALLCommentsForProduct(values.prod_id));
            }
        })
        .catch(err => {
            console.log(err)
        })
}
