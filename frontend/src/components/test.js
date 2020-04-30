import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        e.preventDefault()
        // this.fileArray=[]
        // this.fileObj=[]
        // this.setState({file: [null]})
        console.log(e.target.files)
        console.log(this.fileObj)
        this.fileObj.push(e.target.files)
        console.log(this.fileObj)
        this.fileArray=[]
        for (let i = 0; i < this.fileObj.length; i++) {
            for(let j=0; j<this.fileObj[i].length;j++){
                this.fileArray.push(URL.createObjectURL(this.fileObj[i][j]))
            }
            
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.fileObj)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." width={200} height={200}/>
                    ))}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
            </form >
        )
    }
}