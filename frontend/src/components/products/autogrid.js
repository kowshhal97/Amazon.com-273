import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridProductsImage from '../products/gridProductimages';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddToCart from '../products/addToCart';
import Rating from '@material-ui/lab/Rating';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



 const AutoGrid = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
 

  return (
    <div className={classes.root}>
       
      <Grid container spacing={3}>
     
        <Grid item xs>  
              <GridProductsImage/>             
        </Grid>
      
        <Grid  alignItems="flex-start" item xs >
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apple
          </Typography>
          <Rating name="read-only" value={value} readOnly />
          <p> Price :  </p>
          <p> Size :  </p>

          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
          

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