import React, { Component } from "react";
import Header from './header/header';
import First from '../images/ipad.jpeg';
import Second from '../images/lion.jpg';
import Third from '../images/apple.jpeg';
import Forth from '../images/shoes.png';


class Home extends Component {
  render() {
    return (
    
      <div> 
          <Header/>
        <section>
            <img src={First} style={{width:'100%'}}></img> 
        </section>
        <section>
            <img src={Second} style={{width:'100%'}}></img> 
        </section>
        <section>
            <img src={Third} style={{width:'100%'}}></img> 
        </section>
        <section>
            <img src={Forth} style={{width:'100%'}}></img> 
        </section>
      </div>
      
    );
  }
}

export default Home;
