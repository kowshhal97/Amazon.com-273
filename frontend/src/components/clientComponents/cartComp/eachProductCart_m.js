import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';

class EachProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: '',
           
              quantity:1
          };
    }

    laterClicked = () => {
        
    }

    handleChangeQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={3}>

                            <img
                                alt=''
                                style={{ width: '100%' }}
                                src={'https://imagesbuckethandshake.s3-us-west-1.amazonaws.com/product.jpg'}
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={9}>

                            <p>product details</p>
                            <Grid item xs={3}>

                            <Select

                                id="quantity"
                                value={this.state.quantity}
                                onChange={this.handleChangeQuantity}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>

                            </Select>
                            </Grid>
                            <Link href="#" onClick={this.laterClicked} variant="body2">
                               save for later
                            </Link>
                            <Link href="#" onClick={this.deleteClicked} variant="body2">
                               Delete
                            </Link>
                        </Grid>

                    </Grid>
                </div>
            </div>
        )
    }
}

export default EachProduct;
