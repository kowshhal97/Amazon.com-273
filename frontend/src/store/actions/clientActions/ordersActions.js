import axios from 'axios';

import exportData from '../../../config/config';

export const getCustOrders = (user_id) => async dispatch => {

    const response = await axios.get(exportData.backenedURL + 'read/customer/orders/' + user_id);
    console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'CUSTOMER_ORDERS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'CUSTOMER_ORDERS',
            payload: []
        })
    }

}



