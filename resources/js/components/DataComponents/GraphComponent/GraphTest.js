import React from 'react'
import {Col, Row, Container} from "react-bootstrap";
import {Chart} from "react-google-charts";



export default class GraphTest extends React.Component {

    constructor(props) {
        super(props);

    }
    render () {
        return (
            <Container maxWidth="lg" >
                <Row>
                    <Col>
                        <h1> Home </h1>
                        <p> Data des donnees </p>
                    </Col>
                </Row>


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
                <Chart
                    width={'100%'}
                    height={'200px'}
                    chartType="Timeline"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            { type: 'string', id: 'Position' },
                            { type: 'string', id: 'Name' },
                            { type: 'date', id: 'Start' },
                            { type: 'date', id: 'End' },
                        ],
                        [
                            'President',
                            'George Washington',
                            new Date(1789, 3, 30),
                            new Date(1797, 2, 4),
                        ],
                        ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                        [
                            'President',
                            'Thomas Jefferson',
                            new Date(1801, 2, 4),
                            new Date(1809, 2, 4),
                        ],
                        [
                            'Vice President',
                            'John Adams',
                            new Date(1789, 3, 21),
                            new Date(1797, 2, 4),
                        ],
                        [
                            'Vice President',
                            'Thomas Jefferson',
                            new Date(1797, 2, 4),
                            new Date(1801, 2, 4),
                        ],
                        [
                            'Vice President',
                            'Aaron Burr',
                            new Date(1801, 2, 4),
                            new Date(1805, 2, 4),
                        ],
                        [
                            'Vice President',
                            'George Clinton',
                            new Date(1805, 2, 4),
                            new Date(1812, 3, 20),
                        ],
                        [
                            'Secretary of State',
                            'John Jay',
                            new Date(1789, 8, 25),
                            new Date(1790, 2, 22),
                        ],
                        [
                            'Secretary of State',
                            'Thomas Jefferson',
                            new Date(1790, 2, 22),
                            new Date(1793, 11, 31),
                        ],
                        [
                            'Secretary of State',
                            'Edmund Randolph',
                            new Date(1794, 0, 2),
                            new Date(1795, 7, 20),
                        ],
                        [
                            'Secretary of State',
                            'Timothy Pickering',
                            new Date(1795, 7, 20),
                            new Date(1800, 4, 12),
                        ],
                        [
                            'Secretary of State',
                            'Charles Lee',
                            new Date(1800, 4, 13),
                            new Date(1800, 5, 5),
                        ],
                        [
                            'Secretary of State',
                            'John Marshall',
                            new Date(1800, 5, 13),
                            new Date(1801, 2, 4),
                        ],
                        [
                            'Secretary of State',
                            'Levi Lincoln',
                            new Date(1801, 2, 5),
                            new Date(1801, 4, 1),
                        ],
                        [
                            'Secretary of State',
                            'James Madison',
                            new Date(1801, 4, 2),
                            new Date(1809, 2, 3),
                        ],
                    ]}
                    rootProps={{ 'data-testid': '3' }}
                />
                </Row>





            </Container>






        )
    }
}