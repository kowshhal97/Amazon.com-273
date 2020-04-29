import React from 'react';
import {Redirect} from 'react-router';
import { Button , Container, Card, CardColumns } from 'react-bootstrap';
import Header from "../../header/header";

class ManageCards extends React.Component {

    constructor(){
        super();
        this.state = {
            paymentCards: [
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"},
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"},
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"},
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"},
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"},
                {name: "Roger Federer", cardNumber:"1234567890", expirationDate:"01/01/2025", CVV:"***"}],
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
                            Security Code or CVV: {paymentCard.CVV}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button variant="outline-success" onClick={this.onEditClick}>Edit</Button>
                          &nbsp; &nbsp;
                          <Button variant="outline-danger">Delete</Button>
                        </Card.Footer>
                      </Card>)
                  })}
                </CardColumns>
            </Container>                
          </div>
        );
    }
}

export default ManageCards;