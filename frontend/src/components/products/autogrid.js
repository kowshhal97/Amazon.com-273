import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <div>auto grid image of the product
                </div>
          {/* <Paper className={classes.paper}>auto grid image of the product</Paper> */}
        </Grid>
        <Grid item xs>
        <div>product deatils description
                </div>
          {/* <Paper className={classes.paper}> product deatils description</Paper> */}
        </Grid>
        <div> add  to cart
                </div>
        {/* <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}