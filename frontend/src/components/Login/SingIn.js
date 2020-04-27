import React, { Component } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import cookie from "react-cookies";
import { Redirect } from "react-router";


class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
      Profile: "",
      formValidationFailure: false,
      isValidationFailure: true,
      errorRedirect: false
    };

    //Bind events
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.profileChangeHandler = this.profileChangeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  emailChangeHandler = e => {
    this.setState({
      Email: e.target.value
    });
  };

  passwordChangeHandler = e => {
    this.setState({
      Password: e.target.value
    });
  };

  profileChangeHandler = e => {
    this.setState({
      Profile: e.target.value
    });
  };

  submitLogin = e => {
    // e.preventDefault();

    // var data = {
    //   Email: this.state.Email,
    //   Password: this.state.Password,
    //   Profile: this.state.Profile
    // };

    // if (this.state.Email === "" || this.state.Password === "") {
    //   this.setState({
    //     formValidationFailure: true
    //   });

    //   console.log("Form Error!");
    // } else {
    //   axios.defaults.withCredentials = true;

    //   axios
    //     .post("http://localhost:3001/login", data)
    //     .then(response => {
    //       if (response.status === 200) {
    //         this.setState({
    //           isValidationFailure: true,
    //           formValidationFailure: false
    //         });
    //       }
    //     })
    //     .catch(err => {
    //       if (err) {
    //         if (err.status === 401) {
    //           this.setState({
    //             isValidationFailure: false
    //           });
    //           console.log("Error message", err.response.status);
    //         } else {
    //           this.setState({
    //             errorRedirect: true
    //           });
    //         }
    //       }
    //     });
    // }
  };

  render() {
    let redrirectVar = null;
    if (cookie.load("cookie")) {
      redrirectVar = <Redirect to="/userHome" />;
    }

    // if (this.state.errorRedirect) {
    //   redrirectVar = <Redirect to="/error" />;
    // }

    let errorPanel = null;
    if (!this.state.isValidationFailure) {
      errorPanel = (
        <div>
          <div className="alert alert-danger" role="alert">
            <strong>Validation Error!</strong> Username and Password doesn't
            match!
          </div>
        </div>
      );
    }

    let formErrorPanel = null;
    console.log("FormvalidationFailure", this.state.formValidationFailure);
    if (this.state.formValidationFailure) {
      formErrorPanel = (
        <div>
          <div className="alert alert-danger" role="alert">
            <strong>Validation Error!</strong> Username and Password are
            required!
          </div>
        </div>
      );
    }

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
                {errorPanel}
                {formErrorPanel}
                <div className="form-group login-form-control">
                <label class="control-label col-sm-2">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
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
                    placeholder="Password"
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
                    <option value="User">User</option>
                    <option value="Seller">Seller</option>   
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                <div className="form-group login-form-control">
                <Button variant="warning" size="sm" block onClick={this.submitLogin}>
                     Login Account          
                        </Button>              
                </div>
                <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
                 
                  <div>
                  <Button variant="outline-dark" size="sm" block>
                     Creat your Amazon account
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
