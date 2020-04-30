import axios from 'axios';

import exportData from '../../../config/config';

export const getCartProducts = (user_id) => async dispatch =>{

    const response = await axios.get(exportData.backenedURL+'read/customer/cart/'+ user_id);
    console.log(response)
    
    if(response.data.length){
    dispatch({
        type: 'CART_PRODUCTS',
        payload: response.data
    })
}
else{
    dispatch({
        type: 'CART_PRODUCTS',
        payload: []
    })
}

}

export const updateIsGift = (values) => async (dispatch) => {

    await axios.post(exportData.backenedURL+'read/customer/cart/', JSON.stringify(values), {
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
                await dispatch(getCartProducts(values.user_id));

            }
        })
        .catch(err => {
            console.log(err)
        })

   
    
}



