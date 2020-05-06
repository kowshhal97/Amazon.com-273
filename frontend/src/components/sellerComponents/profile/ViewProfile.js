import React from 'react';
import { Col , Row, Container, Form, Card, Button, Media, Modal, Image } from 'react-bootstrap';
import Header from "../../header/header";
import DefaultProfilePic from '../../../images/default-profile.png'

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"Sumeet Deshpande",
            address: "San Jose, California",
            profilePic: DefaultProfilePic,
            productsAdded: [{productName: "Adidas Shoes", votes: "3.5/5", comments:"Good Product"},
            {productName: "Apple iPhone", votes: "4.5/5", comments:"Best Product"},
            {productName: "Nike Bag", votes: "2.5/5", comments:"Bad Product"},
            {productName: "Samsung Tab", votes: "4/5", comments:"Good Product"}]
        }
    }

    render() {
        return (
          <div>
            <Header />
            <div style={{float:"left", width:"25%", marginLeft:"15%"}}>
                <h2>Your Profile:</h2>
                <br/>
                <Card>
                    <Card.Img variant="top" src={this.state.profilePic} 
                              width={200} height={200}/>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        Located At: {this.state.address}
                    </Card.Body>
                </Card>
            </div>
            <div style={{float:"left", marginLeft:"5%"}}>
                <h2>Products Added:</h2>
                <br/>
                {this.state.productsAdded.map((product)=>{
                    return (
                        <Media>
                            <img width={64} height={64} className="mr-3"
                                src={DefaultProfilePic}
                                alt="Generic placeholder"/>
                            <Media.Body>
                                <a href="#">
                                    <h5>{product.productName}</h5>
                                </a>
                                Rating: {product.votes}
                                <hr/>
                            </Media.Body>
                        </Media>
                    )
                })}
            </div>
          </div>
        );
    }
}

export default Profile;
