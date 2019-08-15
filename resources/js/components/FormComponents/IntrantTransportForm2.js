import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios/index";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import { Chart } from "react-google-charts";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Transport from '@material-ui/icons/Person';
import Container from '@material-ui/core/Container';

import "../animation.css"



export default class IntrantTransportForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Intrant_idIntrant', field: 'Intrant_idIntrant' },
                { title: 'Quantite', field: 'Quantite' },
                { title: 'Frequence', field: 'Frequence' },
                { title: 'Unite', field: 'Unite' },


                {/*
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
                */}
            ],


            TableData: [],

            ChoixVehicule: '',
            Origine: '',
            Destination: '',
            Transporteur: '',
            Kilometrage: '',
            Intrants: [],
            ChoixIntrant: '',
            Change: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.g = this.g.bind(this);

        this.getTransport2 = this.getTransport2.bind(this);
    }

    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/getIntrant/' + uid)
            .then(response => {
                this.setState({Intrants: response.data})

                console.log(this.state.TableData)

            });

        this.getTransport();

    }

    getTransport() {
        let uid = sessionStorage.getItem('UID');
        axios.get('/getTransport/' + uid)
            .then(response => {
                this.setState({TableData: response.data})
            });
    }

    test() {

        let data = this.state;
        let id = sessionStorage.getItem('UID');
        let intrant = this.state.ChoixIntrant;
        fetch('/IntrantTransport/' + intrant + '/' + id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                console.log(data.status);
                if (data.status === 500) {

                    console.log('500');
                }
                else if (data.status === 200) {

                    console.log('200');
                }

            })
            .catch(function (error) {

                console.log('Request failed', error);
                console.log("why");
            });

    }


    getTransport2() {


        let intrant = this.state.ChoixIntrant;

        if (intrant != '') {
            this.setState({Change: this.state.ChoixIntrant})
        }
        else {
            this.setState({Change: ''})
        }
        axios.get('/getTransportMethods/' + intrant)
            .then(response => {
                this.setState({TableData: response.data})
            });

    }

    g() {

        let id = sessionStorage.getItem('UID');
        let data = this.state;


        fetch('/addTransport/' + id , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                console.log(data.status);
                if (data.status === 500) {

                    console.log('500');
                }
                else if (data.status === 200) {

                    console.log('200');
                }

            })
            .catch(function (error) {

                console.log('Request failed', error);
                console.log("why");
            });


        this.getTransport();
        this.test();



    }
    handleChange(e) {


            this.setState({
                [e.target.name]: e.target.value
            });





        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    render() {
        return (

            <div>

                <Row>
                    {
                        <div>
                            {this.state.Change === '' ?

                                <h1>Transport des Intrants</h1>

                                :


                                <h1> Transport: {this.state.Change} </h1>
                            }
                        </div>
                    }
                </Row>



                <div className="col-md-12 column">
                <Row>


                    <div id="matTable">
                            <Col lg="3">
                    <Form.Group>





                        <Form.Label>Choix du Vehicule</Form.Label>
                        <Form.Control
                            as='select'
                            name="ChoixIntrant"
                            required
                            type="text"
                            pattern="^[a-zA-Z]+$"
                            onChange={this.handleChange}

                        >

                            <option></option>
                            {this.state.Intrants.map(Intrant => (
                                <option>
                                    {Intrant}
                                </option>
                            ))}
                        </Form.Control>

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                    </Form.Group>

                            </Col>
                    <Col lg="4">
                        <Form.Group>
                        <Button onClick={this.getTransport2} variant="primary">Confirm</Button>
                        </Form.Group>
                    </Col>
                    </div>


                </Row>

                <Row>


                    <Col lg="3">
                        <Form.Group>


                            <div id="matTable">
                            <Card >
                                <Card.Header className="d-flex justify-content-center login-btn-color-font"><Transport />Transport</Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="validationCustom01">

                                        <Form.Label>Origine</Form.Label>
                                        <Form.Control
                                            name="Origine"
                                            required
                                            type="text"
                                            onChange={this.handleChange}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group controlId="validationCustom01">

                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control
                                            name="Destination"
                                            required
                                            type="text"
                                            onChange={this.handleChange}


                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group controlId="validationCustom02">



                                        <Form.Label>Transporteur</Form.Label>
                                        <Form.Control
                                            name="Transporteur"
                                            required
                                            type="text"

                                            onChange={this.handleChange}


                                            pattern="^[0-9]+ [A-z]+$"

                                        />


                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                                    </Form.Group>

                                    <Form.Group>




                                        <Form.Label>Choix du Vehicule</Form.Label>
                                        <Form.Control
                                            as='select'
                                            name="ChoixVehicule"
                                            required
                                            type="text"
                                            pattern="^[a-zA-Z]+$"
                                            onChange={this.handleChange}

                                        >

                                            <option></option>
                                            <option>
                                                vehicule
                                            </option>
                                        </Form.Control>

                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                                    </Form.Group>


                                    <Form.Group controlId="validationCustom02">



                                        <Form.Label>Kilometres</Form.Label>
                                        <Form.Control
                                            name="Kilometrage"
                                            required
                                            type="text"

                                            onChange={this.handleChange}


                                            pattern="^[0-9]+ [A-z]+$"

                                        />


                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                                    </Form.Group>

                                    <Button variant="primary" onClick={this.g}>Submit</Button>
                                </Card.Body>
                            </Card>
                            </div>

                        </Form.Group>





                    </Col>

                    <Col lg="9">
                        <div id="matTable">
                        <MaterialTable
                            title="Transports"
                            columns={this.state.columns}
                            data={this.state.TableData}
                            editable={{



                                onRowDelete: oldData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            {
                                                let data = this.state.data;
                                                const index = data.indexOf(oldData);
                                                data.splice(index, 1);
                                                this.setState({ data }, () => resolve());
                                            }
                                            resolve()
                                        }, 1000)
                                    }),
                            }}



                        />
                        </div>

                    </Col>

                </Row>





                </div>
            </div>
        );
    }
}