

import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
import {Col, Form, Row, Card, Button} from "react-bootstrap";
import {FormattedHTMLMessage} from "react-intl";
import MaterialTable from "material-table";
import Transport from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function IntrantTransportForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({ //application state here
        ChoixVehicule: '',
        Origine: '',
        Destination: '',
        Transporteur: '',
        Kilometrage: '',


    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        console.log(event.target.value);
        setIntrantData(event.target.value);


console.log([event.target.name] + ':' + event.target.value);
        //getMoreData(event.target.value)
    }
    function componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/inventaire/' + uid)
            .then(response => {
                var t = response.data;
                console.log(t[0]);
                return t;


            });



    }

    function g() {

        let id = sessionStorage.getItem('UID');
        console.log(values);
        let data = values;
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

    const [Intrant, setIntrant] = React.useState([]);

    const [IntrantData, setIntrantData] = React.useState('');





    async function getMoreData(IntrantData) { //get specific transport, test on intrants

        let id = sessionStorage.getItem('UID');
        const res = await fetch("/IHT/" + IntrantData);
    }



    async function fetchData() {
        let id = sessionStorage.getItem('UID');
        const res = await fetch("/getIntrant/" + id);
        res
            .json()
            .then(res => setIntrant(res))
    }

    async function getTransport() {
        let id = sessionStorage.getItem('UID');
        const res = await fetch('/')
    }






    useEffect(() => {
        fetchData();
    }, []); //[] stops infinte execution

    return (

        <div>

            <Row>
                {
                    IntrantData === '' ?
                        <h1>Transport des Intrants</h1>

                        :

                        <h1> Transport: {IntrantData} </h1>
                }
            </Row>





            <Row>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-Intrant-simple">
                    Intrant
                </InputLabel>
                <Select
                    value={values.Intrant}
                    onChange={handleChange}
                    input={<OutlinedInput labelWidth={labelWidth} name="Intrant" id="outlined-Intrant-simple" />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={Intrant[0]}>{Intrant[0]}</MenuItem>
                    <MenuItem value={Intrant[1]}>{Intrant[1]}</MenuItem>
                    <MenuItem value={Intrant[2]}>{Intrant[2]}</MenuItem>
                </Select>
            </FormControl>

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
                        onChange={handleChange}

                       />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>

            <Form.Group controlId="validationCustom01">

                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                        name="Destination"
                        required
                        type="text"
                        onChange={handleChange}


                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>

            <Form.Group controlId="validationCustom02">



                    <Form.Label>Transporteur</Form.Label>
                    <Form.Control
                        name="Transporteur"
                        required
                        type="text"

                        onChange={handleChange}


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
                        onChange={handleChange}

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

                        onChange={handleChange}


                        pattern="^[0-9]+ [A-z]+$"

                    />


                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                </Form.Group>

                    <Button variant="primary" onClick={g}>Submit</Button>
                </Card.Body>
                </Card>

            </Form.Group>





                </Col>

                <Col lg="9">
            <MaterialTable
                title="Transports"
                columns={[
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
                ]}
                data={[]}
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