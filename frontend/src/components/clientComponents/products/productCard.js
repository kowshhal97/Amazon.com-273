import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import Lion from '../../../images/lion.jpg';

class ProductCard extends Component{

  constructor(props){
    super(props);
    console.log(this.props);
  }
 
render(){
  console.log();
    return(
  <Card> 
    <Card.Img variant="top" src={Lion} />
    <Card.Body>
      <Card.Title>{this.props.cproducts.productName}</Card.Title>
      <Card.Text>
        Price :{this.props.cproducts.price}
        </Card.Text>
        <Card.Link href="/user/Productdetails">View Product</Card.Link>
        {/* <Button  variant="warning">View Product</Button> */}
    </Card.Body>
  </Card>
    );
 }
}

export default ProductCard;