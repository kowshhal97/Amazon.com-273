import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderHeader from './orderHeader';
import { Link } from 'react-router-dom';
import moment from 'moment';
import exportData from '../../../config/config';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getCustOrders, } from '../../../store/actions/clientActions/ordersActions';
import Header from "../../header/header";
import { Redirect } from 'react-router';

let user_id = localStorage.getItem("id");
class CancelledOrders extends Component {

    componentDidMount () {
         this.props.getCustOrders(user_id);

    }
    render() {
        let redirectVar = null;
        if (!localStorage.getItem("id")|| localStorage.getItem("usertype") !== 'customer') {
            redirectVar = <Redirect to="/unauthorised" />
        }
        return (
            <div>
                {redirectVar}
                <div>
                <Header />
                    <OrderHeader />
                    <br></br>
                    <Container>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                            {this.props.customerOrders.length ? <div>
                                {this.props.customerOrders.length && this.props.customerOrders.map((orders, i) => {
                                    return (
                                        <div key={i}>
                                            {orders.products.map((product, i) => {
                                                    console.log(product)
                                                    if(product.orderStatus === 2 || product.orderStatus === "2"){
                                                    
                                                return (
                                                    <div key={i}>
                                                        <Card>
                                                            <Card.Header >
                                                                <Row>
                                                                    <Col md={3}>
                                                                        <Row>
                                                                            <small className="text-muted">
                                                                                ORDER PLACED</small>
                                                                        </Row>
                                                                        <Row>
                                                                            <small className="text-muted">{moment(orders.orderDate).format('MMM') + " " + moment(orders.orderDate).format('DD') + ", " +
                                                                                moment(orders.orderDate).format('YYYY')}</small>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Row>
                                                                            <small className="text-muted">
                                                                                SHIP TO</small>
                                                                        </Row>
                                                                        <Row>
                                                                            <small className="text-muted">{orders.shippingAddress.name}</small>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <Row>
                                                                            <small className="text-muted">
                                                                                Order #</small>
                                                                            <small className="text-muted">
                                                                                {orders._id}</small>
                                                                        </Row>
                                                                        <Row>
                                                                            <Link to={{pathname:"/user/orders/details/", state:{orderInfo:orders, productInfo:product}}} >Order details</Link>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Header >
                                                            <Card.Body>

                                                                <Card.Title>{exportData.orderStatus[product.orderStatus]}</Card.Title>
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
                                                                    <Col md={7}>
                                                                        <Row>
                                                                        {product.productName}
                                                                        </Row>
                                                                        <Row>
                                                                        
                                                                            <Link> {product.sellerName}</Link>
                                                                        </Row>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                    <Button variant="primary" style={{ float: 'right', width: '100%', background: '#f3cf75', border: '#f3cf75', color: 'black' }} > <Link to={{pathname:"/user/orders/orderStatus/", state:{ productInfo:product}}} style={{color:'black'}}>Track Package</Link></Button>
  
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                        <br></br>
                                                    </div>
                                                ) 
                                                    }
                                                    else{
                                                        return(
                                                            <div>
                                                                </div>
                                                        )
                                                    }
                                               
                                            })}
                                        </div>
                                    )
                                })}

                                </div> :
                                    <div>
                                    </div>}

                               
                            </Col>

                            <Col md={2}></Col>

                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { customerOrders: state.customerOrders }
}

export default connect(mapStateToProps, {getCustOrders})(CancelledOrders);