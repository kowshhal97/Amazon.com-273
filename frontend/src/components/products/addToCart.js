import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddToList from '../products/addToList';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  style: { width: '15rem', height: '15rem' },
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




const AddToCart = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <Box display="flex" justifyContent="center" > */}
      <Box borderColor="secondary.main"   {...defaultProps} >
    <div>
    To buy, select below
    </div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Add to Cart
      </Button>
      <div>
    --------------------
    </div>
      <div>
        <AddToList/>
    </div>
    </Box>
    
     </div>
     
  );
}

export default  AddToCart;