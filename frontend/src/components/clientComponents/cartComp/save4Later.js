import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


 class Save4Later extends Component {
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

                           
                            </Grid>
                            <Link href="#" onClick={this.cartClicked} variant="body2">
                              Move to Cart
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

export default Save4Later;
