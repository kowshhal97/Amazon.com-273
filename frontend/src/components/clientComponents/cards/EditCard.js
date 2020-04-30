import React from 'react';
import {Redirect} from 'react-router';
import { Button , Container, Form } from 'react-bootstrap';
import Header from "../../header/header";

class EditCard extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            cardNumber: '',
            expirationDate: '',
            CVV: '',
            redirect: ''
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onSubmitHandler = e =>{

    }

    onCancelClick = e => {
        e.preventDefault();
        this.setState({ redirect: <Redirect to='/user/cards/manageCards/' /> });
    }

    render(){
        return(
          <div>
            <Header />
            <Container>
                {this.state.redirect}
                <br/>
                <h2>Edit card:</h2>
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
                        Save Changes
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant="light" onClick={this.onCancelClick}>
                        Cancel
                    </Button>
                </Form>
            </Container>                
          </div>
        );
    }
}

export default EditCard;