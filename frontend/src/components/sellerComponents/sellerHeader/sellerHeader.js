import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div>
            <Navbar bg="dark" variant="dark">
                
            <Nav className="mr-auto" style={{marginLeft:'5%'}}>
              <Nav.Link href="/seller/profile/">Profile</Nav.Link>
              <Nav.Link href="/seller/product/addProduct">Add Product</Nav.Link>
              <Nav.Link href="/seller/orders/">Orders</Nav.Link>
              <Nav.Link href="/seller/reports/">Reports</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>

            </Nav>
    
  </Navbar>
          </div>
          </div>
        );
    }

}

export default Header;