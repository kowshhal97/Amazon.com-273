import React from 'react';
import {Redirect} from 'react-router';
import { Button , Container, Card, CardColumns, Modal } from 'react-bootstrap';
import Header from "../../header/header";
import axios from 'axios';
import exportData from '../../../config/config';

class ManageAddresses extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal: false,
            addressCards: [],
            redirect: ''
        }
    }

    onAddClick = e => {
      e.preventDefault();
      this.setState({ redirect: <Redirect to='/user/address/addAddress/' /> });
    }

    onEditClick = e => {
      e.preventDefault();
      this.setState({ redirect: <Redirect to='/user/address/editAddress/' /> });
    }

    onDeleteClick = e => {
      e.preventDefault();
      this.handleShow()
    }

    handleShow = () => {
      this.setState({showModal: true})
    }

    handleClose = () => {
      this.setState({showModal: false})
    }

    componentDidMount(){
      // const id = localStorage.getItem("user_id")
      const id = 1
      axios.get(exportData.backenedURL + 'read/customer/profile/' + id).then(res => {
        console.log(res)  
        if (res.status === 200) {
            this.setState({
              addressCards : res.data.customerAddresses
            })
          }    
      })    
    }

    render(){
        return(
          <div>
            <Header />
            <Container>
                {this.state.redirect}
                <br/>
                <h2>Your Addresses:</h2>
                <br/>
                <Button variant="dark" onClick={this.onAddClick}>Add Address</Button>
                <br/>
                <br/>
                <CardColumns>
                  {this.state.addressCards.map((addressCard)=>{
                    return (
                      <Card>
                        <Card.Header>
                          {addressCard.name}
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {addressCard.address1}
                            <br/>
                            {addressCard.address2}
                            <br/>
                            {addressCard.city}
                            <br/>
                            {addressCard.state}
                            <br/>
                            {addressCard.country}
                            <br/>
                            {addressCard.zipcode}
                            <br/>
                            {addressCard.phoneNumber}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button variant="outline-success" onClick={this.onEditClick}>Edit</Button>
                          &nbsp; &nbsp;
                          <Button variant="outline-danger" onClick={this.onDeleteClick}>Delete</Button>
                        </Card.Footer>
                      </Card>)
                  })}
                </CardColumns>
                <Modal show={this.state.showModal} onHide={this.handleClose} animation={false} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to delete this address?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Container>                
          </div>
        );
    }
}

export default ManageAddresses;