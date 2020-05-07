import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SellerInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col md = {1}></Col>
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
                                // Material design options
                                chart: {
                                    title: 'Company Performance',
                                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                },
                            }}
                                                    />
                        </Col>
                        <Col md = {1}></Col>

                    </Row>
                    <Row>
                        <h2>List of products</h2>
                        
                    </Row>
                </div>
            </div>
        )
    }
}

export default SellerInfo;
