import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import Form from 'react-bootstrap/Form'
import ProductImages from '../products/productImages';
import    '../../CSS/styles.css';
import Header from '../../header/header'
import  Dropdown from 'react-bootstrap/Dropdown';


class ProductDetailsPage extends Component {
  constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            // productInfo: this.props.location.state.productInfo
        }
    }

   

render(){
    return(
    

   <div>
        <Header/>
      <h3> This is Products Details page </h3> 
      <div>
       <Container >
           <Row>
    <Col><ProductImages/></Col>
    <Col xs={6}>
        2 of 3 (wider)
        
        </Col>
    <Col> 
    <span className="block-cart  border border-light">
        <div>
                  To  buy, Select quanitity
                   </div><div>
                   <Button variant="warning" size="sm" block onClick={this.signup}>
                   Add to Cart          
                        </Button>  
                        </div>
                        
                        <div>

                        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Add to List
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
             </div>      
    </span>
    </Col>
  </Row>
 
</Container>
     </div>
   </div>



    );
}
}

export default  ProductDetailsPage ;