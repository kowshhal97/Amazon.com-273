import React,{Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/NavBar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import exportData from '../../config/config';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Redirect } from "react-router";





class Menu extends Component {

  logout = e => {
   localStorage.removeItem('id');
   localStorage.removeItem('usertype');
   localStorage.removeItem('prod_id');
   window.location.href='/'
  }
    

render(){
  
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">AMAZON</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" bg="light" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="/userHome">Accounts</Nav.Link>
      <Nav.Link href="/user/orders">Orders</Nav.Link>
      <Nav.Link href="/user/cart/">Cart</Nav.Link>
    </Nav>
    <DropdownButton id="dropdown-item-button" title="user"  bg="light" variant="dark">
  <Dropdown.Item as="button">Profile</Dropdown.Item>
  <Dropdown.Item as="button" onClick={this.logout}>Logout</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
  </Navbar>
  );
 }
}

export  default Menu;