

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
import {Col, Form, Row, Card} from "react-bootstrap";
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
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
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

    const [Intrant, setIntrant] = React.useState([]);

    async function fetchData() {
        let id = sessionStorage.getItem('UID');
        const res = await fetch("/getIntrant/" + id);
        res
            .json()
            .then(res => setIntrant(res))
    }




    useEffect(() => {
        fetchData();
    }, []); //[] stops infinte execution

    return (

        <div>

            <Row>
        <h1> Transport des Intrants </h1>
            </Row>





            <Row>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Age
                </InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>{Intrant[0]}</MenuItem>
                    <MenuItem value={20}>{Intrant[1]}</MenuItem>
                    <MenuItem value={30}>{Intrant[2]}</MenuItem>
                    <MenuItem value={3}>test</MenuItem>
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
                <Col sm="5">
                    <Form.Label>fdsfdsf</Form.Label>
                    <Form.Control
                        name="BusinessName"
                        required
                        type="text"


                       />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group controlId="validationCustom01">
                <Col sm="5">
                    <Form.Label>fdsfdsf</Form.Label>
                    <Form.Control
                        name="BusinessName"
                        required
                        type="text"


                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group controlId="validationCustom02">
                <Col sm="5">


                    <Form.Label>fdsfsd</Form.Label>
                    <Form.Control
                        name="QuebecAddress"
                        required
                        type="text"



                        pattern="^[0-9]+ [A-z]+$"

                    />


                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Col>
            </Form.Group>

            <Form.Group>
                <Col sm="5">

                    <Form.Label>fdsfdsf</Form.Label>
                    <Form.Control
                        name="City"
                        required
                        type="text"



                        pattern="^[a-zA-Z]+$"
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Col>
            </Form.Group>
                </Card.Body>
                </Card>

            </Form.Group>





                </Col>

                <Col lg="9">
            <MaterialTable
                title="Procede"
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