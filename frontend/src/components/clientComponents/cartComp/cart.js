import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import EachProductCart from './eachProductCart';


class Cart extends Component {


    giftCheckBox = (e) => {
        if (e.target.checked) {
            this.setState({
                showTextArea: true
            })
        }
        else {
            this.setState({
                showTextArea: false,
                giftMessage: ''
            })
        }
    }

    deleteClicked = (product, event) => {
        console.log(product)
        console.log(event)
//delete and update store.

    }
    save4laterClicked = (product, event) => {
        console.log(product)
        console.log(event)

    }

    changeQuantity = (product, event) => {
        console.log(product)
        console.log(event.target.value)
        //change subtotal
    }


    render() {
        let subtotal = 0;

        let products = [{
            cartid:1,
            gift: true,
            giftMessage: 'hello',
            price: '10',
            flag: 0,
            quantity: 2,
            productid: 1,
            customerid: 3,
            productName: 'product 1',
            sellerName: 'seller 1',
            productPrice: 3,
            rating: 3,
            sellerid: 1,
            productPhoto: ''
        },
        {
            cartid:2,
            gift: false,
            giftMessage: '',
            price: '10',
            flag: 1,
            quantity: 1,
            productid: 1,
            customerid: 3,
            productName: 'product 1',
            sellerName: 'seller 1',
            productPrice: 3,
            rating: 3,
            sellerid: 1,
            productPhoto: ''
        }]

        for(let i =0; i < products.length;i++){
            let cost = 0;
            console.log(products[i].price)
            if(products[i].price){
                cost = (Number(products[i].quantity) *Number( products[i].price));

            }
            subtotal+=cost;
        }
        return (
            <div>
                <div>
                    <h3>Shopping Cart</h3>

                    <Row>
                        <Col md={10}>
                            <h5 style={{ float: 'right' }}>price</h5>

                            <Card >
                                <ListGroup variant="flush">

                                    {products.length && <div>
                                        {products.map((product, i) => {
                                            return (
                                                <ListGroup.Item key = {i}> 
                                                      <Row>
                        <Col xs={2}>
                            <Link to={{ pathname: '//', state: {} }}>
                                <img
                                    alt=''
                                    style={{ width: '100%' }}
                                    src={'https://imagesbuckethandshake.s3-us-west-1.amazonaws.com/product.jpg'}
                                ></img>
                            </Link>
                        </Col>
                        <Col xs={9}>
                            <Row>
                            {product.productName}
                                </Row>
                            <Row>
                                <small style={{ color: 'green' }}>In stock</small>
                            </Row>
                            <Row>
                                <small><img alt="" src={require('../../icon.png')} style={{ maxWidth: '10%', minHeight: '10%', maxHeight: '0%' }} /></small>

                            </Row>

                            <Row>
                                <Form.Check aria-label="option 1" onChange={this.giftCheckBox} label={<small>This is a gift</small>}
                                checked={product.gift}/>

                            </Row>
                            <Row>
                                {/* {this.state.showTextArea && <div>

                                    <Form>
                                        <Form.Control as="textarea" rows="3" placeholder="Enter gift message..." onChange={this.onChangeMessage} value={this.state.giftMessage} />
                                    </Form>
                                    <Button variant="info">Save</Button>
                                </div>} */}
                            </Row>
                            <Row>
                                <Col xs={2}>                             <small>  Qty</small> 
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        
                                        <Form.Control as="select" custom onChange={(e)=>this.changeQuantity(product, e)}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                                </Col>
                               {/* // onClick={(value, e) => this.fetchResume(stu, e)} */}
                                    |    <Link onClick={(value, event)=>this.deleteClicked(product, event)}> <small>Delete</small></Link> |
                                    <Link onClick={(value, event)=>this.save4laterClicked(product, event)}><small> Save for later</small></Link>

                                    
                            </Row>
                        </Col>
                        <Col xs={1}>
                            <strong><p style={{ color: '#B12704' }}>$11.98</p></strong>
                        </Col>
                    </Row>

                                               {/* <EachProductCart product={product} key={i} /> */}
                                               </ListGroup.Item>

                                            )

                                        })}

                                    </div>}
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md={2}>
                            {subtotal}
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

export default Cart;