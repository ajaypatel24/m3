import React from 'react'
import {Col, Row} from "react-bootstrap";
import {Chart} from "react-google-charts";



export default class GraphTest extends React.Component {

    constructor(props) {
        super(props);

    }
    render () {
        return (
            <div>
                <Row>
                    <Col lg="6">
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                                ['Commute', 2],
                                ['Watch TV', 2],
                                ['Sleep', 7],
                            ]}
                            options={{
                                title: 'My Daily Activities',
                                // Just add this option
                                is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </Col>
                    <Col lg="6">
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                                ['Commute', 2],
                                ['Watch TV', 2],
                                ['Sleep', 7],
                            ]}
                            options={{
                                title: 'My Daily Activities',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="Line"
                            loader={<div>Loading Chart</div>}
                            data={[
                                [
                                    'Day',
                                    'Guardians of the Galaxy',
                                    'The Avengers',
                                    'Transformers: Age of Extinction',
                                ],
                                [1, 37.8, 80.8, 41.8],
                                [2, 30.9, 69.5, 32.4],
                                [3, 25.4, 57, 25.7],
                                [4, 11.7, 18.8, 10.5],
                                [5, 11.9, 17.6, 10.4],
                                [6, 8.8, 13.6, 7.7],
                                [7, 7.6, 12.3, 9.6],
                                [8, 12.3, 29.2, 10.6],
                                [9, 16.9, 42.9, 14.8],
                                [10, 12.8, 30.9, 11.6],
                                [11, 5.3, 7.9, 4.7],
                                [12, 6.6, 8.4, 5.2],
                                [13, 4.8, 6.3, 3.6],
                                [14, 4.2, 6.2, 3.4],
                            ]}
                            options={{
                                chart: {
                                    title: 'Box Office Earnings in First Two Weeks of Opening',
                                    subtitle: 'in millions of dollars (USD)',
                                },
                            }}
                            rootProps={{ 'data-testid': '3' }}
                        />
                    </Col>
                    <Col lg="6">
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['City', '2010 Population', '2000 Population'],
                                ['New York City, NY', 8175000, 8008000],
                                ['Los Angeles, CA', 3792000, 3694000],
                                ['Chicago, IL', 2695000, 2896000],
                                ['Houston, TX', 2099000, 1953000],
                                ['Philadelphia, PA', 1526000, 1517000],
                            ]}
                            options={{
                                title: 'Population of Largest U.S. Cities',
                                chartArea: { width: '50%' },
                                colors: ['#b0120a', '#ffab91'],
                                hAxis: {
                                    title: 'Total Population',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: 'City',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '4' }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="Scatter"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Student ID', 'Hours Studied', 'Final'],
                                [0, 0, 67],
                                [1, 1, 88],
                                [2, 2, 77],
                                [3, 3, 93],
                                [4, 4, 85],
                                [5, 5, 91],
                                [6, 6, 71],
                                [7, 7, 78],
                                [8, 8, 93],
                                [9, 9, 80],
                                [10, 10, 82],
                                [11, 0, 75],
                                [12, 5, 80],
                                [13, 3, 90],
                                [14, 1, 72],
                                [15, 5, 75],
                                [16, 6, 68],
                                [17, 7, 98],
                                [18, 3, 82],
                                [19, 9, 94],
                                [20, 2, 79],
                                [21, 2, 95],
                                [22, 2, 86],
                                [23, 3, 67],
                                [24, 4, 60],
                                [25, 2, 80],
                                [26, 6, 92],
                                [27, 2, 81],
                                [28, 8, 79],
                                [29, 9, 83],
                            ]}
                            options={{
                                // Material design options
                                chart: {
                                    title: "Students' Final Grades",
                                    subtitle: 'based on hours studied',
                                },
                                width: 800,
                                height: 500,
                                series: {
                                    0: { axis: 'hours studied' },
                                    1: { axis: 'final grade' },
                                },
                                axes: {
                                    y: {
                                        'hours studied': { label: 'Hours Studied' },
                                        'final grade': { label: 'Final Exam Grade' },
                                    },
                                },
                            }}
                            rootProps={{ 'data-testid': '4' }}
                            legendToggle
                        />
                    </Col>
                </Row>







            </div>






        )
    }
}