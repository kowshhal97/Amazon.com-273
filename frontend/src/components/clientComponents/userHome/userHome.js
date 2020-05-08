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
import Axios from "axios";
import Select from 'react-select';
const _ = require('lodash');

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      productList: [],
      filterProducts: [],
      allCatgories: [],
      selectedFilter: null,
      paginationStart: 0,
      paginationEnd:10,
      search:""
    };
  }

  async componentDidMount() {

    await Axios.get(exportData.backenedURL + 'read/admin/category/noProductsMapped')
      .then((response) => {
        let cat = []
        for (let i of response.data) {

          cat.push({ value: i.id, label: i.categoryName })
        }
        this.setState({ allCatgories: cat })
        console.log(cat);

      })
      .catch((error) => {

        console.log(error);
      })

    await this.props.getALLProducts()
    this.setState({
      productList: this.props.allProducts,
      filterProducts: this.props.allProducts,
      loading: false
    })
  }


  productSearchHandler = (e) => {
    let searchProductTxt = e.target.value;
    var clonedArray = JSON.parse(JSON.stringify(this.state.productList));
    clonedArray=clonedArray.slice(this.state.paginationStart,this.state.paginationEnd);
    let filteredArray=[]
    if(this.state.selectedFilter!=null){
    for(let i of clonedArray){
      console.log(i.categoryId)
      console.log(this.state.selectedFilter)
      if(i.categoryId===this.state.selectedFilter){
        filteredArray.push(i)
      }
    }
  }else{
    filteredArray=clonedArray;
  }
    let fList = _.filter(filteredArray, function (o) { return o.productName.toLowerCase().includes(searchProductTxt.toLowerCase()); });
    this.setState({
      filterProducts: fList,
      searchProductName: searchProductTxt,
      search:e.target.value
    })
  }

search=()=>{
  var clonedArray = JSON.parse(JSON.stringify(this.state.productList));
    clonedArray=clonedArray.slice(this.state.paginationStart,this.state.paginationEnd);
    let filteredArray=[]
  if(this.state.search!=""){
    filteredArray = _.filter(clonedArray, (o)=> { return o.productName.toLowerCase().includes(this.state.search); });
 }
 this.setState({filterProducts:filteredArray})
}

  filterProducts = (e) => {
    if(e===null){
    this.setState({selectedFilter:null,filterProducts:this.state.productList})
    this.search()
    return;
    }

    let filterValue = e.value;
    var clonedArray = JSON.parse(JSON.stringify(this.state.productList));
    clonedArray=clonedArray.slice(this.state.paginationStart,this.state.paginationEnd);
    let filteredArray=[]
    if(this.state.search!=""){
     filteredArray = _.filter(clonedArray, (o)=> { return o.productName.toLowerCase().includes(this.state.search); });
  }else{
    filteredArray=clonedArray;
  }
  let fList=[]
  for(let i of filteredArray){
    if(i.categoryId===filterValue){
      fList.push(i)
    }
  }
    this.setState({
      filterProducts: fList,
      selectedFilter: filterValue,
      search:e.value
    })





    this.setState({selectedFilter:e.value})
  }

  displayProducts = () => {
    //for loop
    let output = []
    for (let i = 0; i < this.state.filterProducts.length; i += 3) {
      output.push(<div>
        <Row>
          <Col md={4}>
            {this.state.filterProducts[i] && <ProductCard cproducts={this.state.filterProducts[i]} key={i} />}
          </Col>
          <Col md={4}>
            {this.state.filterProducts[i + 1] && <ProductCard cproducts={this.state.filterProducts[i + 1]} key={i + 1} />}
          </Col >
          <Col md={4}>
            {this.state.filterProducts[i + 2] && <ProductCard cproducts={this.state.filterProducts[i + 2]} key={i + 2} />}

          </Col>
        </Row>
      </div>)
    }
    return output;
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
            <Col md={3}>

              <Row>
                <input
                  style={{ width: "90%", margin: "auto", marginTop: 30, marginBottom: 10 }}
                  type="text"
                  name="comment"
                  id="comment"
                  className="form-control form-control-lg"
                  placeholder="Search here"
                  onChange={this.productSearchHandler}
                  required
                />
              </Row>
              <div style={{ marginTop: 50 }}>
                <h4>Filters</h4>

                <Select
                  onChange={this.filterProducts}
                  options={this.state.allCatgories}
                  isClearable={true}
                  placeholder="Select Category"
                />
              </div>
              {/* </span> */}
            </Col>
            {this.state.filterProducts.length === 0 ? null : <Col md={9}>
              <div>
                {this.displayProducts()}
              </div>
              {/* {this.state.filterProducts.map((product, ind)=>{    
              return (<Row><Col sm = {12}><ProductCard  cproducts = {product} key={ind}/></Col></Row>)
            })} */}
            </Col>}

          </Row>
          {this.state.filterProducts.length === 0 ? null :
            <Row style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
              <PageNation />
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

