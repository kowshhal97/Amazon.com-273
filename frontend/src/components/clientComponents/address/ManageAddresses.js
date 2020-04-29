import React from 'react';
import {Redirect} from 'react-router';
import { Button , Container, Card, CardColumns, Modal } from 'react-bootstrap';
import Header from "../../header/header";

class ManageAddresses extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal: false,
            addressCards: [
                {name: "Roger Federer", streetAddressLine1:"190 Ryland Street", streetAddressLine2:"Fountain Plaza", city:"San Jose",
                 state:"CA", country: "United States", zipCode:"95110", phoneNumber:"987361924"},
                {name: "Virat Kohli", streetAddressLine1:"140 South Avenue", streetAddressLine2:"Villa Torrino", city:"Los Angeles",
                 state:"CA", country: "United States", zipCode:"92304", phoneNumber:"9867723924"},
                {name: "Harvey Dent", streetAddressLine1:"5th Street", streetAddressLine2:"33rd South", city:"New York City",
                 state:"NY", country: "United States", zipCode:"34562", phoneNumber:"9800023924"},
                {name: "Sachin Tendulkar", streetAddressLine1:"Carter Road", streetAddressLine2:"Bandra West", city:"Mumbai",
                 state:"Maharashtra", country: "India", zipCode:"400030", phoneNumber:"9456223924"},
                {name: "Roger Federer", streetAddressLine1:"190 Ryland Street", streetAddressLine2:"Fountain Plaza", city:"San Jose",
                 state:"CA", country: "United States", zipCode:"95110", phoneNumber:"987361924"},
                {name: "Virat Kohli", streetAddressLine1:"140 South Avenue", streetAddressLine2:"Villa Torrino", city:"Los Angeles",
                 state:"CA", country: "United States", zipCode:"92304", phoneNumber:"9867723924"},
                {name: "Harvey Dent", streetAddressLine1:"5th Street", streetAddressLine2:"33rd South", city:"New York City",
                 state:"NY", country: "United States", zipCode:"34562", phoneNumber:"9800023924"},
                {name: "Sachin Tendulkar", streetAddressLine1:"Carter Road", streetAddressLine2:"Bandra West", city:"Mumbai",
                 state:"Maharashtra", country: "India", zipCode:"400030", phoneNumber:"9456223924"}],
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
                            {addressCard.streetAddressLine1}
                            <br/>
                            {addressCard.streetAddressLine2}
                            <br/>
                            {addressCard.city}
                            <br/>
                            {addressCard.state}
                            <br/>
                            {addressCard.country}
                            <br/>
                            {addressCard.zipCode}
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