import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import Lion from '../../../images/lion.jpg';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ProductDetailsPage from '../products/productDetailsPage'
class ProductCard extends Component{
  
  constructor(props){
    super(props);
    console.log(this.props);
  }
  state = {
    redirect: false,
  }

  getDetails = () => {
    console.log(this.props.cproducts.id)
    this.setState({
      redirect: true
    })
    
  }



render(){
  if (this.state.redirect) {
    return <Redirect to={{
      pathname: '/user/Productdetails',
      state: { prod_id: this.props.cproducts.id }
    }} />
  } else{
    return(
  <Card> 
    <Card.Img variant="top" src={Lion} />
    <Card.Body>
      <Card.Title>{this.props.cproducts.productName}</Card.Title>
      <Card.Text>
        Price :{this.props.cproducts.price}
        </Card.Text>
        {/* <Card.Link href="/user/Productdetails">View Product</Card.Link> */}
    <Button  variant="warning" type="button" onClick={this.getDetails}>View Product</Button> 
    </Card.Body>
  </Card>
    );
 }
}
}

export default ProductCard;