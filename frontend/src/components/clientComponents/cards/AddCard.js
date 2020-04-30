import React from 'react';
import { Button , Container, Form } from 'react-bootstrap';
import Header from "../../header/header";

class AddCard extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            cardNumber: '',
            expirationDate: '',
            CVV: ''
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onSubmitHandler = e =>{

    }

    render(){
        return(
          <div>
            <Header />
            <Container>
                <br/>
                <h2>Add a new card:</h2>
                <br/>
                <Form onSubmit={this.onSubmitHandler}>                    
                    <Form.Group>
                        <Form.Label>Name on Card:</Form.Label>
                        <Form.Control id="name" 
                                      value={this.state.name} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Name on Card"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Card Number:</Form.Label>
                        <Form.Control id="cardNumber" type="number"
                                      value={this.state.cardNumber} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Card Number"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Expiration Date:</Form.Label>
                        <Form.Control id="expirationDate" type="date"
                                      value={this.state.expirationDate} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Expiration Date" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Security Code or CVV:</Form.Label>
                        <Form.Control id="CVV" 
                                      type="password" 
                                      value={this.state.CVV} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Security Code or CVV" 
                                      required/>
                    </Form.Group>
                    <br/>
                    <Button variant="warning" type="submit">
                        Add Card
                    </Button>
                </Form>
            </Container>                
          </div>
        );
    }
}

export default AddCard;