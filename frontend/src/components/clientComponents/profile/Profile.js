import React from 'react';
import { Col , Row, Container, Form, Card, Button, Media, Modal, Image } from 'react-bootstrap';
import Header from "../../header/header";
import DefaultProfilePic from '../../../images/default-profile.png'

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"Sumeet Deshpande",
            selectedFile: '',
            filePreviewUrl : '',
            productReviews: [{productName: "Adidas Shoes", votes: "3.5/5", comments:"Good Product"},
            {productName: "Apple iPhone", votes: "4.5/5", comments:"Best Product"},
            {productName: "Nike Bag", votes: "2.5/5", comments:"Bad Product"},
            {productName: "Samsung Tab", votes: "4/5", comments:"Good Product"}],
            showModal: false
        }
    }

    onEditClick = e => {
        e.preventDefault();
        this.handleShow()
    }

    handleShow = () => {
        this.setState({
            showModal: true,
            filePreviewUrl: ''
        })
    }
  
    handleClose = () => {
        this.setState({
            showModal: false,
            filePreviewUrl: ''
        })
    }

    onFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            filePreviewUrl : URL.createObjectURL(e.target.files[0])
        });
    }

    onUploadClick = (e) => {
        
    }

    render() {
        return (
          <div>
            <Header />
            {/* Profile Component  */}
            <div style={{float:"left", width:"20%", marginLeft:"15%"}}>
                <h2>Your Profile:</h2>
                <br/>
                <Card>
                    <Card.Img variant="top" src={DefaultProfilePic} height={200}/>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        <br/>
                        <center>
                            <Button variant="warning" onClick={this.onEditClick}>Edit your Profile</Button>
                        </center>
                    </Card.Body>
                </Card>
            </div>
            {/* Comments And Ratings Component  */}
            <div style={{float:"left", marginLeft:"5%"}}>
                <h2>Product Reviews and Comments:</h2>
                <br/>
                <h3>Product Ratings: </h3>
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
                <hr/>
                <h3>Product Comments:</h3>
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
                                Comments: {productReview.comments} 
                                <hr/>
                            </Media.Body>
                        </Media>
                    )
                })}
            </div>


            <Modal show={this.state.showModal} onHide={this.handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.File.Label>Profile Picture:</Form.File.Label>
                    <br/>
                    <center>
                        <Image src={(this.state.filePreviewUrl === '')? DefaultProfilePic : this.state.filePreviewUrl} width={280} height={200}>
                        </Image>
                    </center>
                    <br/>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Input onChange={this.onFileSelect}/>
                        </Form.File>
                    </div>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="Name" placeholder="Name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    <Button variant="light" onClick={this.handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
          </div>
        );
    }
}

export default Profile;
