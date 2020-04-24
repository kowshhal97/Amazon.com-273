import React,{Component }from 'react';
import ProductCard from './productcard';
import Pagenation  from './pagenation';
// import axios from 'axios';
// import Button from '@material-ui/core/Button';
import Grid from './gridList';
import Header from '../header/header';
class products extends Component {
   
    render() { 
      return (
        <div>
           <Header/>
           <div style={{ float: 'left', width:'25%', marginLeft: '6%' , marginTop: '2%'}} >
                <p> search conditions </p>
              </div>
        <div style={{ float: 'right', width:'80%', marginLeft: '6%' , marginTop: '2%'}}>
        <Grid/> 
        <Pagenation/>     
        </div>
        
      </div>
       
      );
    }
  }

  export default products;