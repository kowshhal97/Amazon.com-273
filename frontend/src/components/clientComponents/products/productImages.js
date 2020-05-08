import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import Form from 'react-bootstrap/Form'
import logo from '../../../images/shoes.png'
import Carousel from 'react-bootstrap/Carousel'

class ProductImages extends Component{

render(){
  if(this.props.images===undefined){
    return null;
  }

    return(
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.images[0].imageUrl}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.images[1].imageUrl}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.images[2].imageUrl}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.images[3].imageUrl}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
);

}

}

export default ProductImages;