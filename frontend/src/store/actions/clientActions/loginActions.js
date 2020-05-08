import axios from 'axios';

import exportData from '../../../config/config';

export const login = (data) => async dispatch => {

    await axios.post(exportData.backenedURL + 'write/login' , data , {
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
        dispatch({
            type: 'LOGIN',
            payload: res.data
        })
    }
})
.catch(err => {
    console.log(err)
})

}




export const SignUp = (values) => async dispatch => {
   console.log(values)
    await axios.post(exportData.backenedURL + 'write/signup' , JSON.stringify(values) , {
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
      dispatch({
            type: 'SIGNUP',
            payload: res.status
        })
    }
})
.catch(err => {
    console.log(err)
})

}


