import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class CancelOrder extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            orderInfo: this.props.location.state.orderInfo,
            productInfo: this.props.location.state.productInfo,
            redirect:'',

        }
    }

    orderCancelled = () => {
        //call action and redirect

        this.setState({
            redirect:'a'
        })
    }

    render() {
        return (
            <div>
                <div>
                    <br></br>
                    <div>
                        <Container>
                            <Row>
                            <Col md={1}></Col>
                            <h4>Are you sure you want to cancel the order?</h4>

                            <Col md = {10}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={8}>
                                        <strong>Item Ordered</strong>
                                    </Col>
                                    <Col md={4}>
                                        <strong>Price</strong>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={8}>

                                        <Row>
                                            <Link to="">{this.state.productInfo.productName}</Link>
                                        </Row>
                                        <Row>
                                            <small>Sold by:</small>
                                            <small>{this.state.productInfo.sellerName}</small>
                                        </Row>
                                      
                                    </Col>
                                    <Col md={4}>
                                        ${this.state.productInfo.totalPrice}
                                        <br></br>
                                        <Row>
                                                <Button onClick={this.orderCancelled}> Cancel Order</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default CancelOrder;

