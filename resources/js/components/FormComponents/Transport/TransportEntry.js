import React from 'react';
import TransportFormShortDistanceGeneral from './TransportShortDistanceGeneral'
import TransportFormShortDistanceSpecific from './TransportShortDistanceSpecific'
import TransportFormLongDistance from './TransportFormLongDistance'
import TransportConfirm from './TransportConfirm'
import {Button, Col, Form, Jumbotron, Row} from "react-bootstrap";

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */

const Component = {
    0: <p></p>,
    ShortGeneral: <TransportFormShortDistanceGeneral/>,
    ShortSpecific: <TransportFormShortDistanceSpecific/>,
    LongDistance: <TransportFormLongDistance/>,
    Confirm: <TransportConfirm/>
}
export default class TransportEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            PageIndex: 0,
            SpecificOrGeneral: '',

        };

        this.pageForward = this.pageForward.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeOption = this.changeOption.bind(this);

    }

    componentWillMount = () => {
        this.setState({SpecificOrGeneral: ''});
    }
    //
    pageForward = () => {
        if (this.state.SpecificOrGeneral === "V1") {
            this.setState({PageIndex: this.state.PageIndex + 1})
            console.log(this.state.PageIndex);
        } else if (this.state.SpecificOrGeneral === "V2") {
            this.setState({PageIndex: this.state.PageIndex + 1})
            console.log(this.state.PageIndex);
        }
        this.setState({PageIndex: this.state.PageIndex + 1})
    }

    pageBackward = () => {
        this.setState({PageIndex: (this.state.PageIndex - 1)})
        console.log(this.state.PageIndex);
    }


    test = () => {
        console.log(this.state.PageIndex);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    changeOption = () => {

        /*
                if (this.state.SpecificOrGeneral === "V1") {
                    window.location.href = '#/transport/general/short';
                } else {
                    window.location.href = '#/transport/specific/short';
                }
        */
        if (this.state.SpecificOrGeneral != '') {
            this.setState({PageIndex: (this.state.PageIndex + 1)})
            console.log(this.state.PageIndex + "eyo");
        }
    }

    render() {


        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">

                            <Row>

                                {
                                    this.state.PageIndex === 0 ?

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
                                                        <option value="V2"> Emissions by Individual Employees
                                                        </option>

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

                                        :
                                        null
                                }


                                <Row>

                                    {
                                        {


                                            0:
                                                <div>
                                                    {Component['0']}
                                                </div>,


                                            1:

                                                    {

                                                    "V1":

                                             <div>
                                                 {Component['ShortGeneral']}
                                             </div>,


                                                     "V2":


                                                  <div>
                                                 {Component['ShortSpecific']}
                                                 </div>,
                                    } [this.state.SpecificOrGeneral],





                                        2:
                                        <div>
                                        {Component['LongDistance']}
                                        </div>,


                                            3:
                                                <div>
                                                    {Component['Confirm']}
                                                </div>,


                                    } [this.state.PageIndex]
                                    }

                                </Row>

                                {
                                    this.state.PageIndex === 0 || this.state.PageIndex === Component.length - 1 ?

                                        null

                                        :

                                        <Row>
                                            <Col lg="4">
                                                <Button onClick={this.pageBackward}>Prev</Button>
                                            </Col>
                                            <Col lg="4">
                                                <Button onClick={this.pageForward}>Next</Button>
                                            </Col>

                                        </Row>
                                }
                            </Row>


                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
