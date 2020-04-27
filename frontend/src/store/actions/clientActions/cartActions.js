import axios from 'axios';

import exportData from '../../../config/config';

export const getCartProducts = (user_id) => async dispatch => {

    const response = await axios.get(exportData.backenedURL + 'read/customer/cart/' + user_id);
    console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'CART_PRODUCTS',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'CART_PRODUCTS',
            payload: []
        })
    }

}


