import React from 'react';
import { Button , Col, Container, Form } from 'react-bootstrap';
import Header from "../../header/header";

class AddProduct extends React.Component {

    constructor(){
        super();
        this.state = {
            productName: '',
            price: '',
            category: '',
            description: '',
            fileArray: [],
            filePreviewUrls: []
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onSubmitHandler = e =>{

    }

    selectMultipleFiles = e => {
        e.preventDefault()
        var selectedFiles = e.target.files;
        var uploadedFiles = this.state.fileArray;
        var totalFiles = selectedFiles.length + uploadedFiles.length;
        if(totalFiles>5){
            alert("You are allowed to upload only 5 Images")
            e.preventDefault()
            document.getElementById("productImages").value = "" 
            return;
        } else {
            e.preventDefault()
            var fileArray = [...uploadedFiles, ...selectedFiles]
            this.setState({fileArray: fileArray})
            var filePreviewUrls = []
            for (let i = 0; i < fileArray.length; i++) {
                filePreviewUrls.push(URL.createObjectURL(fileArray[i]))
            }
            this.setState({filePreviewUrls: filePreviewUrls})
        }

    }


    render(){
        return(
          <div>
            <Header />
            <Container>
                <br/>
                <h2>Add a New Product:</h2>
                <br/>
                <Form onSubmit={this.onSubmitHandler}>                    
                    <Form.Group>
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control id="productName" 
                                      value={this.state.productName} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Product Name"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control id="price" 
                                      value={this.state.price} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Price"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Product Category:</Form.Label>
                        <Form.Control id="productCategory" 
                                      value={this.state.productCategory} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Product Category" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Product Description:</Form.Label>
                        <Form.Control id="productDescription" 
                                      value={this.state.productDescription} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Product Description" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Product Images:</Form.File.Label>
                            <div className="form-group multi-preview">
                                {(this.state.filePreviewUrls || []).map(url => (
                                    <div style={{float:"left"}}>  
                                        <img src={url} alt="..." width={150} height={150}/> 
                                        &nbsp; &nbsp; &nbsp;
                                    </div>
                                ))}
                            </div>
                            {/* <Button variant="primary" style={{float:"right"}}>Upload</Button> */}
                            <Form.File.Input onChange={this.selectMultipleFiles} multiple id="productImages"/>
                        </Form.File>
                    </Form.Group>
                    <br/>
                    <Button variant="warning" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>                
          </div>
        );
    }
}

export default AddProduct;