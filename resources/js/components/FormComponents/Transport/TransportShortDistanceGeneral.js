import React from 'react';
import {Col, Form, Row, Button  } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportFormShortDistanceGeneral extends React.Component {
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


    }

    componentWillMount = () => {
        this.getTableRows();
        sessionStorage.setItem('LongDistance', 'Step1')
        console.log(this.state.VehiculeCat);
        this.setState({LongDistance: 'Step1'})



    }


    /*
    fixQuantity = () => {
        console.table([this.state.Yearly, this.state.Frequency]);


        }
    }

*/

    buttonclick = () => {
        console.log('hello');
        console.log(sessionStorage.getItem('LongDistance'));
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
                console.log(response.data)


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });


        this.getTableRows();
        this.clearState();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    handleChange2(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);

        console.log('executes');
        axios.get('/libelledata/' + e.target.value)
            .then(response => {
                console.log(response.data);
                this.setState({Libelle: response.data});
            });
    }


    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/transportdata/')
            .then(response => {
                console.log(response.data);
                this.setState({rows: response.data});
                console.log(this.state.rows);
            });


    }

    getItem = () => {
        return localStorage.getItem('cat');
    }


    store = () => {
        let data = this.state;

        console.log(data);
    }

    changeDelete = () => {
        this.setState({Delete: !this.state.Delete})
        console.log(this.state.Delete);
    }

    changeOption = () => {
        console.log(this.state.SpecificOrGeneral);
        this.setState({Confirmed: this.state.SpecificOrGeneral})
    }

    changeSelection = () => {
        this.setState({SpecificOrGeneral: ''})
        this.clearState();
        window.location.reload();
    }

    handleSubmit(e) {
        e.preventDefault();


        //VERY IMPORTANT
        const data = this.state;
        //checks all auth
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }


        let id = sessionStorage.getItem('UID');


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
                console.log(response.data)
                console.log('Request succeeded with JSON response', data);


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
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



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
