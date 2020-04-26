import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Lion from '../../../images/lion.jpg';
class ProductsCard extends Component{

render(){
    return(
<CardDeck>
  <Card>
    <Card.Img variant="top" src={Lion} />
    <Card.Body>
      <Card.Title>Product</Card.Title>
      <Card.Text>
        Price : 10.00
        </Card.Text>
        Rating: 3 
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Lion} />
    <Card.Body>
      <Card.Title>Product</Card.Title>
      <Card.Text>
      Price : 10.00
      </Card.Text>
        Rating: 3
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Lion} />
    <Card.Body>
      <Card.Title>Product</Card.Title>
      <Card.Text>
      Price : 10.00
      </Card.Text>
        Rating: 3  
    </Card.Body>
  </Card>
</CardDeck>
    );
}
}

export default ProductsCard;