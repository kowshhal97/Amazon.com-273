import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderHeader from './orderHeader';
import { Link } from 'react-router-dom';

class CancelledOrders extends Component {
    render() {
        return (
            <div>
                <div>
                    <OrderHeader />
                    <br></br>
                    <Container>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <Card>
                                    <Card.Header >   
                                        Order Placed
                                        </Card.Header>
                                    <Card.Body>

                                        <Card.Title>Delivered</Card.Title>
                                            <Row>
                                                <Col md = {2}>
                                                    <Link to= {{pathname:'//', state:{}}}>
                                                <img
                                alt=''
                                style={{ width: '100%' }}
                                src={'https://imagesbuckethandshake.s3-us-west-1.amazonaws.com/product.jpg'}
                            ></img>
                            </Link>
                                                </Col>
                                                <Col md = {7}>
                                                    product name
                                                    <Row>
                                                   <Link> Seller name</Link>
                                                   </Row>
                                                </Col>
                                                <Col md={3}>
                                               
                                                </Col>
                                            </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={2}></Col>

                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}
export default CancelledOrders;