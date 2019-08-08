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
import Container from '@material-ui/core/Container';


export default class IntrantTransportForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Lib_origine', field: 'Lib_origine' },
                { title: 'Lib_destination', field: 'Lib_destination' },
                { title: 'Nb_km', field: 'Nb_km' },
                { title: 'Nom_Transporteur', field: 'Nom_Transporteur' },


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

        this.getTransport();

    }

    getTransport() {
        let uid = sessionStorage.getItem('UID');

        axios.get('/getTransport/' + uid)
            .then(response => {
                this.setState({TableData: response.data})

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
                            {this.state.ChoixVehicule === '' ?

                                <h1>Transport des Intrants</h1>

                                :


                                <h1> Transport: {this.state.ChoixVehicule} </h1>
                            }
                        </div>
                    }
                </Row>





                <Row>


                            <Col lg="4">
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
                            </Col>


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