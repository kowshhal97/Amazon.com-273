import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridProductsImage from '../products/gridProductimages';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddToCart from '../products/addToCart';
import Rating from '@material-ui/lab/Rating';

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


 const AutoGrid = () => {
   
  const [value, setValue] = React.useState(2);

  const classes = useStyles();

  return (
    <div className={classes.root}>
       
      <Grid container spacing={3}>
      {/* <Paper className={classes.paper}> */}
        <Grid item xs>  
              <GridProductsImage/>             
        </Grid>
        {/* </Paper>  */}
        <Grid  alignItems="flex-start" item xs >
        {/* <div>product deatils description
                </div> */}
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apple
          </Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica is this all enoug the data we have the mannaher jk
            dab sjefbksefnlk amajfn 
          </Typography>
        </CardContent>
        </Grid>
        <div> 
        <AddToCart />
          </div>
      </Grid>
    </div>
  );
}

export default AutoGrid;