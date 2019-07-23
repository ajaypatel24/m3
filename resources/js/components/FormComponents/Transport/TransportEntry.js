import React from 'react';
import TransportFormShortDistance from './TransportShortDistanceSpecific'
import TransportFormLongDistance from './TransportFormLongDistance'
import {Button, Col, Form, Jumbotron, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */

const Component = [<TransportFormShortDistance/>, <TransportFormLongDistance/>,]
export default class TransportEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            PageIndex: 1,
            SpecificOrGeneral: '',

        };

        this.changePage = this.changePage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeOption = this.changeOption.bind(this);

    }

    //{Component[this.state.PageIndex]}
    changePage = () => {

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    changeOption = () => {
        if (this.state.SpecificOrGeneral === "V1") {
            window.location.href = '#/transport/general/short';
        } else {
            window.location.href = '#/transport/specific/short';
        }
    }

    render() {


        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">

                            <Row>


                                <div>
                                    <Row>
                                        <Col lg="12">
                                            <h1> Transport: Employees </h1>
                                            <h6> Choisie un des types d'analyse </h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="9">
                                            <Form.Control as="select" name="SpecificOrGeneral"
                                                          onChange={this.handleChange} required>
                                                <option></option>
                                                <option value="V1"> Emissions by Vehicule Type</option>
                                                <option value="V2"> Emissions by Individual Employees</option>

                                            </Form.Control>
                                        </Col>
                                        <Col lg="3">
                                                <Button onClick={this.changeOption}> Confirm </Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="12">
                                            {
                                                {
                                                    "V1":
                                                        <div>
                                                            <br/>
                                                            <Jumbotron><h4>choix V1</h4></Jumbotron>
                                                        </div>,

                                                    "V2":

                                                        <div>
                                                            <br/>
                                                            <Jumbotron><h4>choix V2</h4></Jumbotron>
                                                        </div>,

                                                    "":
                                                        null,
                                                    null:
                                                        null,


                                                } [this.state.SpecificOrGeneral]
                                            }

                                        </Col>
                                    </Row>


                                </div>


                                {/*
                                <div>
                                    <Button variant="primary" onClick={this.changeSelection}>Change Selection</Button>
                                </div>
                                */}



                            </Row>


                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
