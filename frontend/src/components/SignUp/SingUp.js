import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import Button from 'react-bootstrap/Button'


class Register extends Component {
  constructor() {
    super();

    this.state = {
      YourName: "",
      Email: "",
      Profile: "",
      Password: "",
      isNewUserCreated: false,
      validationError: false,
      errorRedirect: false
    };

    //bind
    this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.profileChangeHandler = this.profileChangeHandler.bind(this);
    this.signup = this.signup.bind(this);
  }

  firstNameChangeHandler = e => {
    this.setState({
      YourName: e.target.value
    });
  };

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

  signup = e => {
    // if (
    //   this.state.FirstName === "" ||
    //   this.state.Email === "" ||
    //   this.state.Password === ""
    // ) {
    //   this.setState({
    //     validationError: true
    //   });
    // } else {
    //   var data = {
    //     FirstName: this.state.FirstName,
    //     Email: this.state.Email,
    //     Password: this.state.Password,
    //     Accounttype: 1
    //   };

    //   e.preventDefault();

    //   axios.defaults.withCredentials = true;

    //   axios.post("http://localhost:3001/signup", data).then(response => {
    //     if (response.status === 200) {
    //       this.setState({
    //         isNewUserCreated: true
    //       });
    //     } else {
    //       this.setState({
    //         isNewUserCreated: false
    //       });
    //     }
    //   });
    // }
  };

  render() {
    let redirectVar = null;
    if (this.state.isNewUserCreated === true) {
      redirectVar = <Redirect to="/signIn" />;
    }

    // if (this.state.errorRedirect === true) {
    //   redirectVar = <Redirect to="/error" />;
    // }

    let errorAlert = null;
    if (this.state.validationError) {
      errorAlert = (
        <div>
          <div className="alert alert-danger" role="alert">
            <strong>Error!</strong> Fill all the fields to proceed!
          </div>
        </div>
      );
    }

    return (
      <div>
       
        <div className="container fill-graywhite">
          {redirectVar}
          <div className="container content">
            <div className="login-container">
             

              <div className="login-form-container col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 border">
                <h2>Create account</h2>
                <div className="form-group login-form-control pad-top-20">
                <label class="control-label col-sm-2">YourName</label>
                  <input
                    type="text"
                    name="yourname"
                    id="yourname"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    onChange={this.firstNameChangeHandler}
                    required
                  />
                </div>
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
                  </select>
                </div>
                <div className="form-group login-form-control">
                <Button variant="warning" size="lg" block onClick={this.signup}>
                     Create your Amazon account          
                        </Button>   
                </div>
                <small>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
               <div>
                 Already have an account?
                 </div> 
              </div>
              <div>{errorAlert}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register