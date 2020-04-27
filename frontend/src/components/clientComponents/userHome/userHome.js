import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import exportData from "../../../config/config";
import Form from "react-bootstrap/Form";
import ProdctCard from "../products/productCard";
import "../../CSS/styles.css";
import Header from "../../header/header";
class UserHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // productInfo: this.props.location.state.productInfo
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Container fluid>
          <Row>
            <Col sm="3">
              <h4>Product Categories</h4>
              <span className="block-example border border-dark">
                {/* <Container className="themed-container"> </Container> */}
                <Form>
                  {["1", "2", "3", "4", "5"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={`product-${type}`}
                        label={`category ${type}`}
                      />
                    </div>
                  ))}
                </Form>
              </span>
            </Col>

            <Col sm="9">
              <ProdctCard />
              <ProdctCard />
              <ProdctCard />
            </Col>
          </Row>
          <Row>PageNation</Row>
        </Container>
      </div>
    );
  }
}
export default UserHome;
