import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Save4Later from './save4Later';
import { connect } from 'react-redux';
import { getCartProducts } from '../../../store/actions/clientActions/cartActions';

//change it to local storage
let user_id = 1;
class Cart extends Component {

    constructor() {
        super();
        this.state = {
            subtotal: 0
        }

    }

    async componentDidMount() {

        await this.props.getCartProducts(user_id)

         for(let i =0; i < this.props.cartProducts.length;i++){
             let cost = 0;
             console.log(this.props.cartProducts[i].price)
             if(this.props.cartProducts[i].price){
                 cost = (Number(this.props.cartProducts[i].quantity) * Number( this.props.cartProducts[i].price));

             }
             this.setState({
                 subtotal:this.state.subtotal+ cost
             })
         }
    }

    giftCheckBox = (e) => {
        //gift checked API
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
        let oldPrice = this.state.subtotal - (product.price * product.quantity);
        let newPrice = product.price * event.target.value
        console.log(oldPrice)

        oldPrice += newPrice;
        console.log(oldPrice)
        this.setState({
            subtotal: oldPrice
        })
        //   this.subtotal+=newPrice;
        //  console.log(this.subtotal)
        //change subtotal
    }


    render() {

        console.log(this.props.cartProducts);


        return (
            <div>
                <div>
                    <Row>
                        <Col md={9}>
                            <h3>Shopping Cart</h3>
                            <h5 style={{ float: 'right', marginRight: '3%' }}>price</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>


                            <Card >
                                <ListGroup variant="flush">

                                    {this.props.cartProducts.length && <div>
                                        {this.props.cartProducts.map((product, i) => {
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
                                                                <Form.Check aria-label="option 1" onChange={this.giftCheckBox} label={<small>This is a gift</small>}
                                                                    checked={product.gift} />

                                                            </Row>
                                                            <Row>
                                                               
                                                            </Row>
                                                            <Row>
                                                                <Col xs={2}>
                                                                    <Form>

                                                                        <Form.Control as="select" custom onChange={(e) => this.changeQuantity(product, e)}>
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
                                                                    </Form>
                                                                </Col>
                                                                |    <Link onClick={(value, event) => this.deleteClicked(product, event)}> <small>Delete</small></Link> |
                                                                     <Link onClick={(value, event) => this.save4laterClicked(product, event)}><small> Save for later</small></Link>


                                                            </Row>
                                                        </Col>
                                                        <Col xs={1}>
                                                            <strong><p style={{ color: '#B12704' }}>{"$" + product.price}</p></strong>
                                                        </Col>
                                                    </Row>

                                                </ListGroup.Item>

                                            )

                                        })}

                                    </div>}
                                </ListGroup>
                            </Card>

                            <p style={{ float: 'right', marginTop: '2%' }}><strong>{"Subtotal(" + this.props.cartProducts.length + " items): "}<strong style={{ color: '#B12704' }}>{"$" + this.state.subtotal}</strong></strong></p>


                        </Col>
                        <Col md={3} >
                            <Card style={{ background: '#f3f3f3', width: '90%' }}>
                                <Card.Body>
                                    <Row>
                                        <h6>{"Subtotal (" + this.props.cartProducts.length + " item): "}<strong style={{ color: '#B12704' }}>{"$" + this.state.subtotal}</strong></h6>
                                    </Row>
                                    <Row>
                                       
                                    </Row>
                                    <Row>
                                        <Button variant="primary" style={{ float: 'right', width: '100%', background: '#f3cf75', border: '#f3cf75', color: 'black' }} > <Link to={{ pathname: "/user/orders/orderStatus/" }} style={{ color: 'black' }}>Checkout Amazon Cart</Link></Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div>
                        <br></br>
                        <Save4Later />
                    </div>
                </div>

            </div>
        )
    }
}

//fetching from store
const mapStateToProps = (state) => {
    return { cartProducts: state.cartProducts }
}

export default connect(mapStateToProps, { getCartProducts })(Cart);