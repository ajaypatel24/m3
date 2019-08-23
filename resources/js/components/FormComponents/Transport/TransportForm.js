import React from 'react';
import {Col, Form, Row, Button, Jumbotron } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
            Yearly: "",
            Delete: true,
            UID: sessionStorage.getItem('UID'),
            rows: [],
            Libelle: [],
            NombreVoiture: '',
            JoursOuvrables: '',
            SpecificOrGeneral: '',
            VehiculeCat: '',
            Vehicule: '',
            Kilometres: '',
            Confirmed: '',
            LongDistance: sessionStorage.getItem('LongDistance')

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeOption = this.changeOption.bind(this);
        this.changeSelection = this.changeSelection.bind(this);
        this.distanceForm = this.distanceForm.bind(this);

    }

    componentWillMount = () => {
        this.getTableRows();
        sessionStorage.setItem('LongDistance', 'Step1')
        this.setState({LongDistance: 'Step1'})

    }



    clearState = () => {
        this.setState({
            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
            Confirmed: "",
        })
    }

    distanceForm = () => {
        this.setState({Confirmed: 'LongDistance'})
    }
    confirm = () => {
        this.setState({Confirmed: 'ConfirmInformation'})
    }

    handleDelete(e) {
        e.preventDefault();
        let uid = this.state.UID;
        let intrant = this.state.NomIntrant;
        fetch('/delIntrants/' + intrant + '/' + uid, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {
                console.log('Request suceeded');


            })
            .catch(function (error) {
                console.log('Request failed', error);

            });


        this.getTableRows();
        this.clearState();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        {/*
        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
        */}
    }

    handleChange2(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        {/*
        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
        */}


        axios.get('/libelledata/' + e.target.value)
            .then(response => {
                this.setState({Libelle: response.data});
            });
    }


    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/transportdata/')
            .then(response => {

                this.setState({rows: response.data});

            });


    }

    getItem = () => {
        return localStorage.getItem('cat');
    }


    store = () => {
        let data = this.state;


        let id = sessionStorage.getItem('UID');

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            fetch('/deplacement/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (response) {

                    console.log('Request succeeded with JSON response');


                })
                .catch(function (error) {
                    console.log('Request failed', error);

                });
        }

        this.getTableRows();


    }

    changeDelete = () => {
        this.setState({Delete: !this.state.Delete})

    }

    changeOption = () => {
        this.setState({Confirmed: this.state.SpecificOrGeneral})
    }

    changeSelection = () => {
        this.setState({SpecificOrGeneral: ''})
        this.clearState();
        window.location.reload();
    }

    handleSubmit(e) {
        e.preventDefault();

        let id = sessionStorage.getItem('UID');
        //VERY IMPORTANT
        const data = this.state;
        //checks all auth





        console.table([data]);
        fetch('/intrants/' + id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {

                console.log('Request succeeded with JSON response');


            })
            .catch(function (error) {
                console.log('Request failed', error);

            });

        this.getTableRows();
        this.clearState();



    }



    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    render()
    {



        const {validated} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">











                                        <Row>


                                            {
                                                {
                                                    'V1':

                                                        <div>
                                                            <h1>V1</h1>
                                                            <p><FormattedHTMLMessage id="TransportForm.TypeVehicule"
                                                                                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                     description="Welcome header on app main page"
                                                                                     values={{what: 'react-intl'}}/></p>
                                                            <Form noValidate
                                                                  validated={validated}
                                                                  onSubmit={e => this.handleSubmit(e)}
                                                                  method="POST" action="/"
                                                                  enctype="multipart/form-data">


                                                                <Row>
                                                                    <Col lg="5">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.VehiculeCategory"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="VehiculeCat"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange2}
                                                                                      value={this.state.VehiculeCat}

                                                                        >


                                                                            <option></option>
                                                                            {this.state.rows.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Col>

                                                                    <Col lg="7">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Vehicule"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="Vehicule"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange}
                                                                                      value={this.state.Vehicule}
                                                                                      disabled={this.state.VehiculeCat === null}
                                                                        >

                                                                            <option></option>
                                                                            {this.state.Libelle.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>

                                                                            ))}
                                                                            <option></option>
                                                                        </Form.Control>
                                                                    </Col>
                                                                </Row>

                                                                <br/>

                                                                <Row>
                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Number"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="NombreVoitures"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.NombreVoitures}
                                                                            pattern="^[0-9]$"

                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.BusinessDays"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="JoursOuvrables"
                                                                            required
                                                                            type="text"
                                                                            placeholder="220"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.JoursOuvrables}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Kilometres"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="Kilometres"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.Kilometres}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>


                                                                </Row>


                                                            </Form>

                                                            <br/>
                                                            <Row>
                                                                <Col lg="4">
                                                                    <Button type="submit"
                                                                            onClick={this.store}>Submit</Button>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col lg="4">
                                                                    <Button onClick={this.distanceForm}>NextPage</Button>
                                                                </Col>
                                                            </Row>


                                                        </div>,

                                                    'V2':


                                                        <div>
                                                            <h1>V2</h1>
                                                            <p><FormattedHTMLMessage id="TransportForm.TypeVehicule"
                                                                                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                     description="Welcome header on app main page"
                                                                                     values={{what: 'react-intl'}}/></p>
                                                            <Form noValidate
                                                                  validated={validated}
                                                                  onSubmit={e => this.handleSubmit(e)}
                                                                  method="POST" action="/"
                                                                  enctype="multipart/form-data">


                                                                <Row>
                                                                    <Col lg="5">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.VehiculeCategory"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="VehiculeCat"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange2}
                                                                                      value={this.state.VehiculeCat}

                                                                        >


                                                                            <option></option>
                                                                            {this.state.rows.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Col>

                                                                    <Col lg="7">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Vehicule"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="Vehicule"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange}
                                                                                      value={this.state.Vehicule}
                                                                                      disabled={this.state.VehiculeCat === null}
                                                                        >
                                                                            \
                                                                            <option></option>
                                                                            {this.state.Libelle.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>

                                                                            ))}
                                                                            <option></option>
                                                                        </Form.Control>
                                                                    </Col>
                                                                </Row>

                                                                <br/>

                                                                <Row>
                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Number"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="NombreVoitures"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.NombreVoitures}
                                                                            pattern="^[0-9]$"

                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.BusinessDays"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="JoursOuvrables"
                                                                            required
                                                                            type="text"
                                                                            placeholder="220"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.JoursOuvrables}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Kilometres"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="Kilometres"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.Kilometres}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>


                                                                </Row>


                                                            </Form>

                                                            <br/>
                                                            <Row>
                                                                <Col lg="4">
                                                                    <Button type="submit"
                                                                            onClick={this.store}>Submit</Button>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col lg="4">
                                                                    <Button onClick={this.distanceForm}>NextPage</Button>
                                                                </Col>
                                                            </Row>


                                                        </div>,

                                                    'LongDistance':


                                                        <div>
                                                            <h1>Long Distance</h1>
                                                            <p><FormattedHTMLMessage id="TransportForm.TypeVehicule"
                                                                                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                     description="Welcome header on app main page"
                                                                                     values={{what: 'react-intl'}}/></p>
                                                            <Form noValidate
                                                                  validated={validated}
                                                                  onSubmit={e => this.handleSubmit(e)}
                                                                  method="POST" action="/"
                                                                  enctype="multipart/form-data">


                                                                <Row>
                                                                    <Col lg="5">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.VehiculeCategory"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="VehiculeCat"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange2}
                                                                                      value={this.state.VehiculeCat}

                                                                        >


                                                                            <option></option>
                                                                            {this.state.rows.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Col>

                                                                    <Col lg="7">

                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Vehicule"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control as='select'
                                                                                      name="Vehicule"
                                                                                      required
                                                                                      type="text"
                                                                                      placeholder="Quantite"
                                                                                      onChange={this.handleChange}
                                                                                      value={this.state.Vehicule}
                                                                                      disabled={this.state.VehiculeCat === null}
                                                                        >
                                                                            \
                                                                            <option></option>
                                                                            {this.state.Libelle.map(vehicule => (
                                                                                <option>
                                                                                    {vehicule}
                                                                                </option>

                                                                            ))}
                                                                            <option></option>
                                                                        </Form.Control>
                                                                    </Col>
                                                                </Row>

                                                                <br/>

                                                                <Row>
                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Number"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="NombreVoitures"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.NombreVoitures}
                                                                            pattern="^[0-9]$"

                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.BusinessDays"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="JoursOuvrables"
                                                                            required
                                                                            type="text"
                                                                            placeholder="220"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.JoursOuvrables}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>

                                                                    <Col lg="4">
                                                                        <Form.Label><FormattedHTMLMessage
                                                                            id="TransportForm.Kilometres"
                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                            description="Welcome header on app main page"
                                                                            values={{what: 'react-intl'}}/></Form.Label>
                                                                        <Form.Control
                                                                            name="Kilometres"
                                                                            required
                                                                            type="text"
                                                                            placeholder="Intrant"
                                                                            onChange={this.handleChange}
                                                                            value={this.state.Kilometres}
                                                                            pattern="^[0-9]$"
                                                                        />
                                                                    </Col>


                                                                </Row>


                                                            </Form>

                                                            <br/>
                                                            <Row>
                                                                <Col lg="4">
                                                                    <Button onClick={this.distanceForm} >PrevPage</Button>
                                                                </Col>

                                                                <Col lg="4">
                                                                    <Button onClick={this.confirm}>NextPage</Button>
                                                                </Col>
                                                            </Row>


                                                        </div>,

                                                    'ConfirmInformation':


                                                        <div>
                                                            <Button>Confirm</Button>

                                                            <p>{this.state.NombreVoitures}</p>

                                                <Row>
                                                <Col lg="4">
                                                <Button onClick={this.confirm}>PrevPage</Button>
                                                </Col>
                                                </Row>
                                                            <Row>
                                                                <Button type="submit" onClick={this.handleSubmit}>test</Button>
                                                            </Row>
                                                        </div>,



                                                    '':
                                                        null,

                                                    null:
                                                        null


                                                } [this.state.Confirmed]
                                            }

                                        </Row>







                            <Row>

                                { this.state.Confirmed === '' || this.state.Confirmed === null ?

                                    <div>
                                        <Row>
                                            <Col lg="12">
                                            <h1> Transport: Employees </h1>
                                            <h6> Choisie un des types d'analyse </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="7">
                                                <Form.Control as="select" name="SpecificOrGeneral"
                                                              onChange={this.handleChange} required>
                                                    <option> </option>
                                                    <option value="V1"> Emissions by Vehicule Type </option>
                                                    <option value="V2"> Emissions by Individual Employees </option>

                                                </Form.Control>
                                            </Col>
                                            <Col lg="5">
                                                <Button onClick={this.changeOption}>Confirm One Selection</Button>
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

                                    <div>
                                        <Button variant="primary" onClick={this.changeSelection}>Change Selection</Button>
                                    </div>







                                }
                            </Row>



                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
