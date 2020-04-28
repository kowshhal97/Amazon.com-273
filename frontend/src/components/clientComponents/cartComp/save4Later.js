import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import EachProductCart from './eachProductCart';


class Save4Later extends Component {

    constructor() {
        super();
        this.state = {
        }

    }

    componentDidMount() {

    }


    deleteClicked = (product, event) => {
        console.log(product)
        console.log(event)
        //delete and update store.

    }
    moveClicked = (product, event) => {
        console.log(product)
        console.log(event)

    }




    render() {

        let products = [{
            cartid: 1,
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
            cartid: 2,
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
                    <Row>
                        <Col md={9}>
                            {/* <h3>Save for Later</h3> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>


                            <Card >
                                <Card.Header><strong>Save for Later ({products.length + " item)"}</strong></Card.Header>
                                <ListGroup variant="flush">

                                    {products.length && <div>
                                        {products.map((product, i) => {
                                            return (
                                                <ListGroup.Item key={i}>
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


                                                            </Row>
                                                            <Row>

                                                            </Row>
                                                            <Row>

                                                                <Link onClick={(value, event) => this.deleteClicked(product, event)}> <small>Delete</small></Link> |
                                                                 <Link onClick={(value, event) => this.moveClicked(product, event)}><small> Move to Cart</small></Link>


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

                    </Row>

                </div>
            </div>
        )
    }
}

export default Save4Later;