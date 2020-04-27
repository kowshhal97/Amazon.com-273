import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Lion from '../../../images/lion.jpg';
class ProductsCard extends Component{

  getProducts = () => {

  }
  
render(){
  let prodvalues = [{
    productId: 'p_1',
    productName: 'product 1',
    sellerName: 'seller 1',
    quantity: 2,
    perQuantityPrice: 1,
    totalPrice: 2,
    orderStatus: 0,
    sellerid:1,
    productPhoto:'' 
},
{
    productId: 'p_3',
    productName: 'product 3',
    sellerName: 'seller 1',
    quantity: 2,
    perQuantityPrice: 1,
    totalPrice: 2,
    orderStatus: 0,
    sellerid:1,
    productPhoto:'' 
},
{
    productId: 'p_2',
    productName: 'product 2',
    sellerName: 'seller 2',
    quantity: 4,
    perQuantityPrice: 1,
    totalPrice: 2,
    orderStatus: 0,
    sellerid:1,
    productPhoto:''         
}]
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