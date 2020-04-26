import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import EachProduct from './eachProductCart_m';
import Save4Later from './save4Later';


class cart extends Component {

    constructor() {
        super();
        this.state = {
            redirect: '',
            products: [{ a: 1, b: 2, c: 3 },
            { a: 4, b: 5, c: 6 },
            { a: 7, b: 8, c: 9 }],
            laterProducts:[{ a: 1, b: 2, c: 3 },
                { a: 4, b: 5, c: 6 },
                { a: 7, b: 8, c: 9 }]
        };
    }


    componentDidMount() {
        //from store get the list of products in the cart


    }

  

    render() {

        return (
            <div>
                <div>

                </div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={9}>
                            <h2>Shopping cart</h2>
                            <List dense >
                                {this.state.products.map((value, index) => {
                                    return <EachProduct key={index} productValue={value} />

                                })}


                            </List>

                            <h2>Save for Later</h2>
                            <List dense >
                                {this.state.laterProducts.map((value, index) => {
                                    return <Save4Later productValue={value} />

                                })}


                            </List>


                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Container fixed>

                                <Card border={1} >

                                    <CardContent>
                                        <h4><strong>{"Subtotal ( " + this.state.products.length + " items): "}</strong></h4>
                                        <h4>{this.state.price + " $"}</h4>

                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default cart;
