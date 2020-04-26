import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import moment from 'moment';
import ProdctCard from '../products/productCard';
import Header from '../../header/header'
class UserHome extends Component {
  constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            // productInfo: this.props.location.state.productInfo
        }
    }

   

    render() {

     
        return (
            <div>
                <div>
                    <Header/>      
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