import React,{ Component }from 'react';
import  Header from '../header/header';
// import gridProdcutImage from './gridProductimages';
import  AutogridLayout from './autogrid';
// import axios from 'axios';
// import Button from '@material-ui/core/Button';

class ProductDetails extends Component {
    
    render() {
      return ( 
        <div>
            <Header />
          <AutogridLayout />
       </div>
       
      );
    }
  }

  export default ProductDetails;