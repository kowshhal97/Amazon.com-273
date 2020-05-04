import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      userType: "",
    };

  }

  emailChangeHandler = e => {
    this.setState({
      email: e.target.value
    });
  };

  passwordChangeHandler = e => {
    this.setState({
      password: e.target.value
    });
  };

  profileChangeHandler = e => {
    this.setState({
      userType: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
 
       
    //         else {
            
    //           this.props.setLogin(true)

    //           var decoded = jwt_decode(res.data.split(' ')[1]).user;
            
    //           await  localStorage.setItem("token", res.data);
    //           await localStorage.setItem("email", decoded.email);
    //           await localStorage.setItem("userType", decoded.usertype);
             

              
             
    //           this.props.getStuProfile(decoded.id);
    //           this.props.setLogin(true)

    //              this.setState({
    //                 redirectPage: <Redirect to={{ pathname: '/student/jobs/' }} />
    //               })
                

    //         }
    //       })
    //       .catch(err => {
    //         this.setState({
    //           showError:true,
    //         })
           
    //         console.log(err)
    //       })


    //   }
    // });
  };

  render() {
    let redrirectVar = null;
    // if (cookie.load("cookie") && ) {
    //   redrirectVar = <Redirect to="/userHome" />;
    // }


    return (
      <div>
        <div className="container fill-graywhite">
          {redrirectVar}
          <div className="container content">
        
          <div> Amazon</div>
            <div className="login-container">
           
              <div className="login-form-container col-lg-4 col-md-4 col-sm-12 offset-lg-4 offset-md-4 border">
                <div className="login-form-heading input-group pad-top-10 input-group-lg">
                 <h2>Sign-In</h2>
                </div>
                <hr />
                
                
                <div className="form-group login-form-control">
                <label class="control-label col-sm-2">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control form-control-lg"
                    
                    onChange={this.emailChangeHandler}
                    required
                  />
                </div>
                <div className="form-group login-form-control">
                <label class="control-label col-sm-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control form-control-lg"
                   
                    onChange={this.passwordChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2">SelectType</label>
                  <select
                    class="form-control"
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select">Select</option>
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>   
                    <option value="admin">Admin</option>
                    required
                  </select>
                </div>
                
                <div className="form-group login-form-control">
                <Button variant="warning" size="sm" block onClick={this.submitLogin}>
                     Login Account          
                        </Button>              
                </div>
                <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
                 
                  <div>
                  <Button variant="warning" size="sm" block><Link to={{ pathname: "/signup" }} style={{ color: 'black' }}> Creat your Amazon account</Link>
                   
                  </Button> 
              </div>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
