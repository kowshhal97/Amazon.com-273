import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { getSellers } from '../../../store/actions/adminActions/ordersActions';
import axios from 'axios';
import exportData from '../../../config/config';


class SellerInfo extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            seller: this.props.location.state.seller ? this.props.location.state.seller : {},
            products: [],
            loading: true
        }
    }

    async componentDidMount() {

        try {
            console.log(this.props.location.state.seller.name)
            //all products under seller api
            const response = await axios.get(exportData.backenedURL + 'read/seller/orders/' + this.props.location.state.seller.name);
            console.log(response)

            if (response.data.length) {
                this.setState({
                    products: response.data
                })
            }
            else {

            }

            this.setState({
                loading: false
            })

        }
        catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <div>
                <div>
                    {!this.state.loading && <div>
                        <Row>
                            <br></br>
                            <Col md={3}></Col>
                            <Col md={8}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses', 'Profit'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Company Performance',
                                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                        },
                                    }}
                                />
                            </Col>


                        </Row>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={8}>
                            <h2>List of products</h2>
                            {this.state.products.map((product, i)=>{

                            })}
                            </Col>
                        </Row>
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { totalSellers: state.totalSellers }
}

export default connect(mapStateToProps, { getSellers })(SellerInfo);