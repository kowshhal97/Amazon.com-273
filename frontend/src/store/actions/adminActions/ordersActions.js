import axios from 'axios';

import exportData from '../../../config/config';

export const getAdminOrders = () => async dispatch => {

    const response = await axios.get(exportData.backenedURL + 'read/admin/orders/');
    console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'ADMIN_ORDERS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'ADMIN_ORDERS',
            payload: []
        })
    }

}
export const getSellers = () => async dispatch => {

    try{
    const response = await axios.get(exportData.backenedURL + 'read/seller/profile');
    if (response.data.length) {
        dispatch({
            type: 'TOTAL_SELLERS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'TOTAL_SELLERS',
            payload: []
        })
    }
    }
    catch(e){
        console.log(e)
    }
   

}


export const updateStatus = (values) => async dispatch => {
   console.log(values.orderUpdateItem)
    let data={
        orderStatus:values.orderUpdateItem == "5"?"1":"0",
        orderUpdateItem:{
           deliveryStatus: String(values.orderUpdateItem)
        }, 
        productId:values.productId,
    }

    console.log(data)

    await axios.put(exportData.backenedURL + 'write/seller/orders/'+values.orderId, JSON.stringify(data), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        }
    })
        .then(res => {
            if (res.status >= 400) {
                console.log(res)
            }
            else {
             
             console.log(res)
            }
        })
        .catch(err => {
            console.log(err)
        })


}


export const searchAPI = (values) => async (dispatch) => {

    console.log(values)
    let data = {
        flag: 0
    }

    await axios.put(exportData.backenedURL + 'write/customer/cart/'+values.user_id + '/' + values.productId + '/', JSON.stringify(data), {
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
                dispatch({
                    type: 'ADMIN_ORDERS',
                    payload: res.data
                })


            }
        })
        .catch(err => {
            console.log(err)
        })

}