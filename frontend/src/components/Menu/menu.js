import React,{Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/NavBar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import exportData from '../../config/config';





class Menu extends Component {
  
    

render(){
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">AMAZON</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" bg="light" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Accounts</Nav.Link>
      <Nav.Link href="#features">Orders</Nav.Link>
      <Nav.Link href="#pricing">Cart</Nav.Link>
    </Nav>
    
  </Navbar>
  );
 }
}

export  default Menu;