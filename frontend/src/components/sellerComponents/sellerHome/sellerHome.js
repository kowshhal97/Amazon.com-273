import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import exportData from "../../../config/config";
import Form from "react-bootstrap/Form";
import ProductCard from "../../clientComponents/products/productCard";
import "../../CSS/styles.css";
import Header from "../../header/header";
import { connect } from 'react-redux';
import { getALLProductsBySeller } from '../../../store/actions/clientActions/productsActions';

const sell_id = localStorage.getItem('id');
class SellerHome extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

async componentDidMount() {

    await  this.props.getALLProductsBySeller(sell_id)
    this.setState({
        loading: false
    })
  
  //  console.log(this.allProducts.data)

}

displayProducts = () => {
  //for loop
  for(let i=0; i<this.props.allSellerProducts.length; i+=3){
    return (<div>
      <Row>
        <Col md={4}>
     { this.props.allSellerProducts[i] && <ProductCard  cproducts = {this.props.allSellerProducts[i]} key={i}/>}
     </Col>
     <Col md={4}>
    { this.props.allSellerProducts[i+1] && <ProductCard  cproducts = {this.props.allSellerProducts[i+1]} key={i+1}/> }
    </Col>
    { this.props.allSellerProducts[i+2] && <ProductCard  cproducts = {this.props.allSellerProducts[i+2]} key={i+2}/>}
    </Row>
    </div>)
  }
}
  render() {
    const products = this.props.allSellerProducts
    console.log(products);
    return (
      <div>
        <div>
          <Header />
        </div>
        <Container fluid>
          <Row>
            <Col md={3}>
              <h4>Product Categories</h4>
              <span className="block-example border border-dark">
                {/* <Container className="themed-container"> </Container> */}
                <Form>
                  {["1", "2", "3", "4", "5"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={`product-${type}`}
                        label={` product category ${type}`}
                      />
                    </div>
                  ))}
                </Form>
              </span>
            </Col>
            {this.props.allSellerProducts.length===0?<h1>No Products for this Seller</h1>:<Col md={9}>
                  {this.displayProducts()}
              {/* {this.props.allProducts.map((product, ind)=>{    
              return (<Row><Col sm = {12}><ProductCard  cproducts = {product} key={ind}/></Col></Row>)
            })} */}
            </Col>}
            
          </Row>
          {this.props.allSellerProducts.length===0?null:
          <Row>PageNation</Row>}
            {/* <Col md={9}>
              {this.displayProducts()}
              {/* {this.props.allProducts.map((product, ind)=>{    
              return (<Row><Col sm = {12}><ProductCard  cproducts = {product} key={ind}/></Col></Row>)
            })} */}
           
        
        </Container>
      </div>
    );
  }
}


//fetching from store
const mapStateToProps = (state) => {
  return { allSellerProducts: state.allSellerProducts }
}

export default connect(mapStateToProps, { getALLProductsBySeller })(SellerHome);

