import axios from 'axios';

import exportData from '../../../config/config';

export const getUserLogin = (user_email,user_password) => async dispatch => {
    let data = {
        email:user_email,
        password: user_password
    }

    const response = await axios.post(exportData.backenedURL + 'write/login' , JSON.stringify(data) , {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    }
}) 
        console.log(response)

    if (response.data.length) {
        dispatch({
            type: 'CUSTOMER_LOGIN',
            payload: response.data
        })
    }
    else {
        dispatch({
            type: 'CUSTOMER_LOGIN',
            payload: []
        })
    }

}
