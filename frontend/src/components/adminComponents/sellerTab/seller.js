import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import moment from 'moment';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getSellers } from '../../../store/actions/adminActions/ordersActions';



class SellerList extends Component {


    async componentDidMount() {
        await this.props.getSellers();

    }

    render() {
        console.log(this.props.totalSellers);
        const options = [];
        this.props.totalSellers.map((seller) => {
            options.push({ value: seller.name, label: seller.name })
        })

        return (
            <div>
                <div>
                    <div>
                        <br></br>
                        <Row>
                            <Col md={1}>
                            </Col>
                            <Col md={10}>
                                <Card>
                                    <br></br>
                                    <Row>
                                        <Col xs={1}></Col>

                                        <Col xs={10}>
                                            <Select
                                                onChange={this.handleChangeSeller}
                                                options={options}
                                                isClearable={true}
                                                placeholder="Select seller name"
                                            />
                                        </Col>
                                        <Col xs={1}></Col>


                                    </Row>
                                    <br></br>
                                </Card>

                            </Col>
                            <Col md={1}>


                            </Col>

                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>


                            </Col>

                            <Col md={10}>
                                
                                    {this.props.totalSellers.length ? <Row>
                                        {this.props.totalSellers.map((seller, i) => {


                                            return (<Col md={4} key={i}>
                                                <Card style={{ width: '20rem' }}>
                                                    <Card.Img variant="top" src={'https://imagesbuckethandshake.s3-us-west-1.amazonaws.com/product.jpg'} />
                                                    <Card.Body>
                                                        {/* <Card.Title>Card Title</Card.Title>
                                               
                                            </Card.Body>
                                            hello
                                             <Card.Body> */}
                                                        <Card.Link href="#">{seller.name}</Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>)
                                        })

                                        }
                                    </Row> : <div></div>}


                                
                            </Col>

                        </Row>
                        <br></br>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { totalSellers: state.totalSellers }
}

export default connect(mapStateToProps, { getSellers })(SellerList);