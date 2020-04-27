import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import Form from 'react-bootstrap/Form'
import logo from '../../../images/shoes.png'
import Carousel from 'react-bootstrap/Carousel'

class ProductImages extends Component{

render(){
    return(
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
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