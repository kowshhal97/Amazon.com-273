import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'


class Cart extends Component {

    

    giftCheckBox = (e) => {
        console.log(e.target.checked)
    }

    render() {

        let products = [{
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
                                                <ListGroup.Item>
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
                                                                product name
                                                            </Row>
                                                            <Row>
                                                              <small style={{color:'green'}}>In stock</small>
                                                            </Row>
                                                            <Row>
                                                            <small><img src={require('../../icon.png')} style={{ maxWidth: '10%', minHeight: '10%', maxHeight: '0%' }} /></small>

                                                            </Row>
                                                           
                                                            <Row>
                                                            <Form.Check aria-label="option 1" onChange = {this.giftCheckBox} label={ <small>This is a gift</small>}
 />

                                                
                                                            </Row>
                                                            <Row>
                                                              QTY
                                                            </Row>
                                                        </Col>
                                                        <Col xs={1}>
                                                            <strong><p style={{color:'#B12704'}}>$11.98</p></strong>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )

                                        })}

                                    </div>}
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

export default Cart;