import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import exportData from "../../../config/config";
import Form from "react-bootstrap/Form";
import ProductCard from "../products/productCard";
import "../../CSS/styles.css";
import Header from "../../header/header";
import { connect } from 'react-redux';
import { getALLProducts } from '../../../store/actions/clientActions/productsActions';
import PageNation from '../../pagenation/pagenation'
const _ = require('lodash');

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      productList: [],
      filterProducts: []
    };
  }

async componentDidMount() {

    await  this.props.getALLProducts()
      this.setState({
        productList: this.props.allProducts,
        filterProducts : this.props.allProducts,
        loading: false
    })
}


productSearchHandler = (e) => {
  let searchProductTxt = e.target.value;
  let list = this.state.productList;
  let fList = _.filter(list, function (o) { return o.productName.toLowerCase().includes(searchProductTxt.toLowerCase()); });
  this.setState({
      filterProducts: fList,
      searchProductName: searchProductTxt
  })
}


displayProducts = () => {
  //for loop
  for(let i=0; i<this.state.filterProducts.length; i+=3){
    return (<div>
      <Row>
        <Col md={4}>
     { this.state.filterProducts[i] && <ProductCard  cproducts = {this.state.filterProducts[i]} key={i}/>}
     </Col>
     <Col md={4}>
    { this.state.filterProducts[i+1] && <ProductCard  cproducts = {this.state.filterProducts[i+1]} key={i+1}/> }
    </Col>
    { this.state.filterProducts[i+2] && <ProductCard  cproducts = {this.state.filterProducts[i+2]} key={i+2}/>}
    </Row>
    </div>)
  }
}
  render() {
    // console.log(this.state.filterProducts);
    return (

      <div>
        
        <div>
          <Header />
        </div>
        <Container fluid>
        <Row>
          <input
                    type="text"
                    name="comment"
                    id="comment"
                    className="form-control form-control-lg"
                    onChange={this.productSearchHandler}
                    required
                  />
    </Row>
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
            {this.state.filterProducts.length===0?null:<Col md={9}>
              {this.displayProducts()}
              {/* {this.state.filterProducts.map((product, ind)=>{    
              return (<Row><Col sm = {12}><ProductCard  cproducts = {product} key={ind}/></Col></Row>)
            })} */}
            </Col>}
            
          </Row>
          {this.state.filterProducts.length===0?null:
          <Row>
            <PageNation/>
            </Row>}
          
        </Container>
      </div>
    );
  }
}


//fetching from store
const mapStateToProps = (state) => {
  return { allProducts: state.allProducts }
}

export default connect(mapStateToProps, { getALLProducts })(UserHome);

