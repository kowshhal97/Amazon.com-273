import React from 'react';
import { Col , Row, Container, Form, Card, Button, Media, Modal, Image } from 'react-bootstrap';
import Header from "../../header/header";
import DefaultProfilePic from '../../../images/default-profile.png'
import axios from 'axios';
import exportData from '../../../config/config';

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name:'',
            address: '',
            profilePic: DefaultProfilePic,
            selectedFile: '',
            filePreviewUrl : '',
            temporaryName: '',
            temporaryAddress: '',
            productsAdded: []
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    onEditClick = e => {
        e.preventDefault();
        this.handleShow()
    }

    handleShow = () => {
        var filePreviewUrl = this.state.profilePic
        var temporaryName = this.state.name
        var temporaryAddress = this.state.address
        this.setState({
            showModal: true,
            filePreviewUrl: filePreviewUrl,
            temporaryName: temporaryName,
            temporaryAddress: temporaryAddress
        })
    }
  
    handleClose = () => {
        this.setState({
            showModal: false,
            filePreviewUrl: '',
            temporaryName: '',
            temporaryAddress: ''
        })
    }

    onFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            filePreviewUrl : URL.createObjectURL(e.target.files[0])
        });
    }

    async componentDidMount(){
        // const id = localStorage.getItem("user_id")
        const id = localStorage.getItem("id")
        axios.get(exportData.backenedURL + 'read/seller/profile/' + id).then(res => {
            console.log(res)  
            if (res.status === 200) {
                this.setState({
                    name : res.data.name
                })
            }    
        })
        axios.get(exportData.backenedURL + 'read/seller/product/' + id).then(res => {
            console.log(res)  
            if (res.status === 200) {
                this.setState({
                    productsAdded : res.data
                })
            }    
        })   
    
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
                        {/* Located At: {this.state.address} */}
                        <br/>
                        <br/>
                        <center>
                            <Button variant="warning" onClick={this.onEditClick}>Edit your Profile</Button>
                        </center>
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
                                <br/>
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
                    <center>
                        <Image src={this.state.filePreviewUrl} width={280} height={200}>
                        </Image>
                    </center>
                    <hr/>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Profile Picture:</Form.File.Label>
                            {/* <Button variant="primary" style={{float:"right"}}>Upload</Button> */}
                            <Form.File.Input onChange={this.onFileSelect}/>
                        </Form.File>
                    </div>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control placeholder="Name" value={this.state.temporaryName} id="temporaryName"/>
                        </Form.Group>
                        {/* <Form.Group controlId="address">
                            <Form.Label>Located At:</Form.Label>
                            <Form.Control placeholder="Address" value={this.state.temporaryAddress} id="temporaryAddress"/>
                        </Form.Group> */}
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
