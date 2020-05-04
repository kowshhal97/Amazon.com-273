import axios from 'axios';

import exportData from '../../../config/config';

export const Login = (values) => async dispatch => {
    let data = {
        email:values.email,
        password: values.password,
    }

    //console.

    await axios.post(exportData.backenedURL + 'write/login' , JSON.stringify(data) , {
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
        console.log(res.data)
        localStorage.setItem('user_id', 1);
        localStorage.setItem('token', 2);
       
        
    }
})
.catch(err => {
    console.log(err)
})

}




export const SignUp = (values) => async dispatch => {
    // let data = {
    //     name: values.username,
    //     email:values.user_email,
    //     password: values.user_password,
    //     user_type: values.usertype,
    // }
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
            payload: ["Success"]
        })
    }
})
.catch(err => {
    console.log(err)
})

}


