import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios/index";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Transport from '@material-ui/icons/Person';


export default class IntrantTransportForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Procede', field: 'Nom_procede' },
                { title: 'Quantite', field: 'Quantite_an' },
                {
                    title: 'Unite', field: 'Unite_an',
                    lookup: {
                        Kg: 'Kg',
                        KWH: 'kWh',
                        Litre: 'L'


                    },
                },



                { title: 'GES (kg)', field: 'Emission_GES' },
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

        }

        this.handleChange = this.handleChange.bind(this);
        this.g = this.g.bind(this);

    }

    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/getIntrant/' + uid)
            .then(response => {
                this.setState({Intrants: response.data})

                console.log(this.state.TableData)

            });

    }

    g() {

        let id = sessionStorage.getItem('UID');
        let data = this.state
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
                            <h1>{this.state.Intrants}</h1>



                            <h1> Transport: {this.state.Intrants} </h1>
                        </div>
                    }
                </Row>





                <Row>

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
                            <option>{this.state.Intrants[0]}</option>
                            <option>{this.state.Intrants[1]}</option>
                            <option>{this.state.Intrants[2]}</option>
                        </Form.Control>

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                    </Form.Group>

                </Row>

                <Row>


                    <Col lg="3">
                        <Form.Group>


                            <Card>
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

                        </Form.Group>





                    </Col>

                    <Col lg="9">
                        <MaterialTable
                            title="Transports"
                            columns={this.state.columns}
                            data={this.state.TableData}
                            editable={{


                                onRowAdd: newData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            {
                                                const data = this.state.data;
                                                data.push(newData);
                                                this.setState({ data }, () => resolve());
                                            }
                                            resolve()
                                        }, 1000)
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            {
                                                const data = this.state.data;
                                                const index = data.indexOf(oldData);
                                                data[index] = newData;
                                                this.setState({ data }, () => resolve());
                                            }
                                            resolve()
                                        }, 1000)
                                    }),
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

                    </Col>

                </Row>



            </div>
        );
    }
}