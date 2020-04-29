import React from 'react';
import { Col , Row, Container, Form, Card, Button, Media } from 'react-bootstrap';
import Header from "../../header/header";
import DefaultProfilePic from '../../../images/default-profile.png'

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"Sumeet Deshpande",
            address: "San Jose, California",
            productReviews: [{productName: "Adidas Shoes", votes: "3.5/5", comments:"Good Product"},
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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={DefaultProfilePic} 
                              width={280} height={200}/>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        Located At: {this.state.address}
                        <br/>
                        <br/>
                        <center>
                            <Button variant="warning">Edit your Profile</Button>
                        </center>
                    </Card.Body>
                </Card>
            </div>
            <div style={{float:"left", width:"50%"}}>
                <h2>Products Added:</h2>
                <br/>
                {this.state.productReviews.map((productReview)=>{
                    return (
                        <Media>
                            <img width={64} height={64} className="mr-3"
                                src={DefaultProfilePic}
                                alt="Generic placeholder"/>
                            <Media.Body>
                                <a href="#">
                                    <h5>{productReview.productName}</h5>
                                </a>
                                Rating: {productReview.votes}
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
