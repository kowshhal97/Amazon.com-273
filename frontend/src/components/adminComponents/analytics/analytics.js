import * as React from "react";
import { Chart } from "react-google-charts";
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import axios from 'axios';
import exportData from '../../../config/config';


class Analytics extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            mostSoldProducts: [],
            topSellers: [],
            topCustomers: [],
            topProdRating: [],
            topProdViewed: [],
            ordersCount: [],
        }
    }

    async componentDidMount() {

        let ordersCountArray = [];
        let mostSoldProductsArray = [], topSellersArray = [], topCustomersArray = [], topProdRatingArray = [], topProdViewedArray = [];

        ordersCountArray.push(['Number of orders', 'Count']);
        mostSoldProductsArray.push(['Top Sold Products', 'Count']);
        topSellersArray.push(['System top sellers', 'Count']);
        topCustomersArray.push(['System top customers', 'Count']);
        topProdRatingArray.push(['Top products based on ratings', 'Count']);
        topProdViewedArray.push(['Top products based on number of views', 'Count'])

      await  axios.get(exportData.backenedURL + 'read/admin/stats/orderperday/')
        .then((response) => {
            console.log(response.data.length)
            ordersCountArray.push(['Orders',response.data.length ]);
           
        })
        .catch((error) => {

            console.log(error);
        })

      await  axios.get(exportData.backenedURL + 'read/admin/stats/top/seller')
        .then((response) => {
            console.log(response.data)
            response.data.map((value)=>{
                topSellersArray.push([value.sellerName, value.sales])
            })
           console.log(topSellersArray);

        })
        .catch((error) => {

            console.log(error);
        })
       
       await axios.get(exportData.backenedURL + 'read/admin/stats/top/customer')
        .then((response) => {
            console.log(response.data)
            response.data.map((value)=>{
                topCustomersArray.push([value.customerName, value.purchase])
            })
           console.log(topCustomersArray);

        })
        .catch((error) => {

            console.log(error);
        })



        mostSoldProductsArray.push(['Apple Iphone', 10],
            ['Nike Men Shoe', 8]);

        //change values
        // topSellersArray.push(['Apple', 1000],
        //     ['Nike', 1170]);

        // topCustomersArray.push(['USER1', 1000],
        //     ['USER2', 1170]);

        topProdRatingArray.push(['Apple', 4.8],
            ['Nike', 4.6]);

        topProdViewedArray.push(['Apple', 2000],
            ['Nike', 2170]);



        this.setState({
            ordersCount: ordersCountArray,
            topSellers: topSellersArray,
            mostSoldProducts: mostSoldProductsArray,
            topCustomers: topCustomersArray,
            topProdRating: topProdRatingArray,
            topProdViewed: topProdViewedArray,
            loading:false
        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.loading && <Spinner animation="grow" variant="primary" style={{ marginLeft: '34%' }} />}
                    {!this.state.loading && <div>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={5}>
                                <Card>
                                    <Card.Body>
                                        <Chart

                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.ordersCount}
                                            options={{
                                                chart: {
                                                    title: 'Number of orders per day',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                            }}

                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card>
                                    <Card.Body>
                                        <Chart
                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.mostSoldProducts}
                                            options={{
                                                chart: {
                                                    title: 'Top 5 most sold products',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                            }}

                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md={1}></Col>

                            <Col md={5}>
                                <Card>
                                    <Card.Body>
                                        <Chart
                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.topSellers}
                                            options={{
                                                chart: {
                                                    title: 'Top 5 sellers based on total sales amount',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                            }}

                                        />
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Chart
                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.topCustomers}
                                            options={{
                                                chart: {
                                                    title: 'Top 5 customers based on total purchase amount',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                                colors: ["#FB7A21"]
                                            }}

                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={5}>
                                <Card>
                                    <Card.Body>

                                        <Chart
                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.topProdRating}
                                            options={{
                                                chart: {
                                                    title: 'Top 10 products based on rating',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                            }}

                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Chart
                                            width={'500px'}
                                            height={'300px'}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.topProdViewed}
                                            options={{
                                                chart: {
                                                    title: 'Top 10 products viewed per day',
                                                    subtitle: moment().format('DD') + " " + moment().format('MMM') + ", " + moment().format("YYYY"),
                                                },
                                            }}

                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>}
                </div>
            </div>
        )
    }
}


export default Analytics


