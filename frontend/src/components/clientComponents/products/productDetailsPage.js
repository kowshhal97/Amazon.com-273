import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRating from "react-bootstrap-star-rating";
import { Link } from "react-router-dom";
import exportData from "../../../config/config";
import ProductImages from "../products/productImages";
import "../../CSS/styles.css";
import Header from "../../header/header";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // productInfo: this.props.location.state.productInfo
    };
  }

  render() {
    let product = {
      productid: 1,
      gift: true,
      productDiscription:
        "hello please buy this product this is very very cheap not only that its very common stuff",
      price: "10",
      flag: 0,
      productid: 1,
      customerid: 3,
      productName: "Addidas mens sport shoes",
      sellerName: "seller 1",
      productPrice: 30,
      rating: 2.5,
      sellerid: 1,
      comments: ["This is ok", "Not so Great", "Can try once"],
      productPhoto: "",
    };

    return (
      <div>
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
                      price: ${product.productPrice}
                    </p>
                  </strong>
                </Row>
                <Row>
                  <StarRating
                    defaultValue={product.rating}
                    min={0}
                    max={5}
                    step={0.5}
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
                      onClick={this.signup}
                    >
                      Add to Cart
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
            <ListGroup.Item>not good</ListGroup.Item>
            <ListGroup.Item>Great in use</ListGroup.Item>
            <ListGroup.Item>OK ok</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default ProductDetailsPage;
