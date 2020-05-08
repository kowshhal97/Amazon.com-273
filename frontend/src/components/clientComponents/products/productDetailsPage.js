import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import StarRating from "react-bootstrap-star-rating";
import { Link } from "react-router-dom";
import ProductImages from "../products/productImages";
import "../../CSS/styles.css";
import Header from "../../header/header";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import StarRatingComponent from 'react-star-rating-component';
import { getProductDetails, getALLCommentsForProduct , postCommentForProduct,addProductToCart} from '../../../store/actions/clientActions/productsActions';
import { Redirect } from 'react-router';



class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loading: true,
      commentt:''
    };
  
  }


  async componentDidMount() {
    console.log(localStorage.getItem('prod_id'))
    await this.props.getProductDetails(localStorage.getItem('prod_id'))
    await this.props.getALLCommentsForProduct(localStorage.getItem('prod_id'))
    this.setState({
        loading: false
    })

}

onChangeHandler = e => {
  this.setState({
    commentt: e.target.value
  });
};


 addcomment =  e =>  {
 
   const data = {
    comment: this.state.commentt,  
  }
  console.log(data)
   this.props.postCommentForProduct(localStorage.getItem('prod_id'),localStorage.getItem('id'),data)

}

addtoCart = e =>{
  const data = {
    quantity: 1,
    flag: 0,
    gift: 0  
  }
  console.log(data)
this.props.addProductToCart(localStorage.getItem('id'),localStorage.getItem('prod_id'),data)

}


  render() {
    const product = this.props.ProductDetails
   const comments = this.props.allComments
   let redirectVar = null;
   if (!localStorage.getItem("id") || localStorage.getItem("usertype") !== 'customer') {
       redirectVar = <Redirect to="/unauthorised" />
   }
    return (
      <div>
         {redirectVar}
        <Header />
        <h3> {product.productName} </h3>
        <div>
          <Container>
            <Row>
              <Col>
                <ProductImages />
              </Col>
              <Col xs={6}>
                <Row>{product.productName}</Row>
                <Row>
                  <small style={{ color: "green" }}>In stock</small>
                </Row>
                <Row>
                  <small>
                    <img
                      alt=""
                      src={require("../../icon.png")}
                      style={{
                        maxWidth: "10%",
                        minHeight: "10%",
                        maxHeight: "0%",
                      }}
                    />
                  </small>
                </Row>
                <Row>
                  <strong>
                    <p style={{ color: "#B12704" }}>
                      {" "}
                      price: ${product.price}
                    </p>
                  </strong>
                </Row>
                <Row>
                <small style={{ color: "green" }}>Rating :</small>
                <StarRatingComponent 
               name="rating" 
                starCount={5}
                   value={product.rating}
        />
                </Row>
                <Row>
                  <h2>Details</h2>
                  {product.productDiscription}
                </Row>
              </Col>
              <Col>
                <span className="block-cart  border border-light">
                  <div>To buy, Select quanitity</div>
                  <div>
                    <Button
                      variant="warning"
                      size="sm"
                      block 
                      onClick ={this.addtoCart}
                    ><Link to={{ pathname: "/user/cart/" }} style={{ color: 'black' }}>  Add to Cart</Link>  
                    </Button>
                  </div>

                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        size="sm"
                        block
                        id="dropdown-basic"
                      >
                        Add to List
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </span>
              </Col>
            </Row>
          </Container>
   
          <strong>
            <p style={{ color: "#B12704" }}>Reviews</p>
          </strong>

          <ListGroup variant="flush">
          {comments.map((type) => (
                    <div>
                       <ListGroup.Item>{type.comment}</ListGroup.Item>
                    </div>
                  ))}   
          </ListGroup>
    <div>     
    {/* <Form.Label>Add Comment</Form.Label> */}
    <input
                    type="text"
                    name="comment"
                    id="comment"
                    className="form-control form-control-lg"
                    onChange={this.onChangeHandler}
                    required
                  />
</div>
  <Button variant="warning" type="submit" onClick={this.addcomment} size="sm">
    Add Comment
  </Button>

        </div>
      </div>
    );
  }
}

//fetching from store
const mapStateToProps = (state) => {
  return { ProductDetails: state.ProductDetails ,
             allComments : state.allComments}
}

export default connect(mapStateToProps, { getProductDetails, getALLCommentsForProduct, postCommentForProduct,addProductToCart})(ProductDetailsPage);

