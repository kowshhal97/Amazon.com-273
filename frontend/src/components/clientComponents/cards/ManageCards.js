import React from 'react';
import {Redirect} from 'react-router';
import { Button , Container, Card, CardColumns, Modal } from 'react-bootstrap';
import Header from "../../header/header";
import axios from 'axios';
import exportData from '../../../config/config';

class ManageCards extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal: false,
            paymentCards: [],
            redirect: ''
        }
    }

    onAddClick = e => {
      e.preventDefault();
      this.setState({ redirect: <Redirect to='/user/cards/addCard/' /> });
    }

    onEditClick = e => {
      e.preventDefault();
      this.setState({ redirect: <Redirect to='/user/cards/editCard/' /> });
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
      const id = localStorage.getItem("id")
      axios.get(exportData.backenedURL + 'read/customer/profile/' + id).then(res => {
        console.log(res)  
        if (res.status === 200) {
            this.setState({
              paymentCards : res.data.cards
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
                <h2>Your Payment Options:</h2>
                <br/>
                <Button variant="dark" onClick={this.onAddClick}>Add Card</Button>
                <br/>
                <br/>
                <CardColumns>
                  {this.state.paymentCards.map((paymentCard)=>{
                    return (
                      <Card>
                        <Card.Header>
                          {paymentCard.name}
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            Card Number: {paymentCard.cardNumber}
                            <br/>
                            Expiration Date: {paymentCard.expirationDate}
                            <br/>
                            Security Code or CVV: {paymentCard.cvv}
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
                    <Modal.Title>Delete Card</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to delete this card?</Modal.Body>
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

export default ManageCards;