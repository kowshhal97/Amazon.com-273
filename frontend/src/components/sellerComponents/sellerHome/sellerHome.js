import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import moment from 'moment';
import ProdctCard from '../../clientComponents/products/productCard'
   

class UserHome extends Component {
  constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            // productInfo: this.props.location.state.productInfo
        }
    }

    getProducts = () => {

    }

    render() {

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
        return (
            <div>
                <div>
                   {/* <NavBar/> */}
                    <h2>Header</h2>
                    </div>
                    <Container fluid>
                       <Row> 
                      <Col sm="3">filters</Col>
                       <Col sm="9">
                       <ProdctCard/>
                       <ProdctCard/>
                       <ProdctCard/>
                       <ProdctCard/>
                       </Col>
                </Row>
               <Row>PageNation</Row>        
                    </Container>
                
            </div>
        )
    }
}
export default UserHome;