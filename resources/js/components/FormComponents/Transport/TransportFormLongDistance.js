import React from 'react';
import {Col, Form, Row, Button, Alert  } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'
const NumberRegex = new RegExp("^[0-9]+$");
const WordRegex = new RegExp("^[A-z]+$");
/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportFormLongDistance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            NomVoyage: '',
            Origine: '',
            Destination: '',
            NombrePassagers: '',
            FrequenceAnnuelle: '',
            Kilometres: '',
            Vehicule: '',
            VehiculeCat: '',
            UID: sessionStorage.getItem('UID'),
            rows: [],
            Libelle: [],
            LongDistance: sessionStorage.getItem('LongDistance'),
            error: false,

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

    test = () => {
        console.log('test');
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

    validate(data) {
        if (
            WordRegex.test(data.Origine) &&
            WordRegex.test(data.Destination) &&
            WordRegex.test(data.NomVoyage) &&
            NumberRegex.test(data.Kilometres) &&
            NumberRegex.test(data.NombrePassagers) &&
            NumberRegex.test(data.FrequenceAnnuelle)
        ) {
            this.setState({error: false})
            return true
        }
        else {

            this.setState({error: true})
            return false
        }
    }
    handleSubmit (e){
        let data = this.state;
        console.log(data);

        let id = sessionStorage.getItem('UID');

        const form = e.currentTarget;
        console.log(form.checkValidity());
        console.log('boi');
        if (this.validate(data) === false) {

            console.log(form.checkValidity)
            e.preventDefault();
            e.stopPropagation();

        }
        else {
            fetch('/deplacementlong/' + id, {
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
        }
        this.setState(({validated: true}));
        this.getTableRows();
        this.clearState();

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

    store(e) {
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
                                        <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.NomVoyage"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="NomVoyage"
                                                required
                                                type="text"
                                                placeholder="Nom Voyage"
                                                onChange={this.handleChange}
                                                value={this.state.NomVoyage}
                                                pattern="^[a-zA-Z]+$"
                                            />
                                        </Col>

                                        <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.Origine"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="Origine"
                                                required
                                                type="text"
                                                placeholder="Origine"
                                                onChange={this.handleChange}
                                                value={this.state.Origine}
                                                pattern="^[a-zA-Z]+$"
                                            />
                                        </Col>

                                        <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.Destination"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="Destination"
                                                required
                                                type="text"
                                                placeholder="Destination"
                                                onChange={this.handleChange}
                                                value={this.state.Destination}
                                                pattern="^[a-zA-Z]+$"
                                            />
                                        </Col>
                                    </Row>

                                    <br />

                                    <Row>

                                        <Col lg="4">

                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.VehiculeCategory"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control as='select'
                                                          name="VehiculeCat"
                                                          required
                                                          type="text"
                                                          placeholder="VehiculeCat"
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

                                        <Col lg="8">

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
                                            </Form.Control>
                                        </Col>
                                    </Row>

                                    <br/>

                                    <Row>
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
                                                placeholder="Kilometres"
                                                onChange={this.handleChange}
                                                value={this.state.Kilometres}
                                                pattern="^[0-9]+$"
                                            />
                                        </Col>

                                        <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.NombrePassagers"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="NombrePassagers"
                                                required
                                                type="text"
                                                placeholder="Nombre de Passagers"
                                                onChange={this.handleChange}
                                                value={this.state.NombrePassagers}
                                                pattern="^[0-9]+$"

                                            />
                                        </Col>

                                        <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage
                                                id="TransportForm.FrequenceAnnuelle"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="FrequenceAnnuelle"
                                                required
                                                type="text"
                                                placeholder="Frequence Annuelle"
                                                onChange={this.handleChange}
                                                value={this.state.FrequenceAnnuelle}
                                                pattern="^[0-9]+$"
                                            />
                                        </Col>




                                    </Row>


                                </Form>

                                <br/>
                                <Row>
                                    <Col lg="4">
                                        <Button type="submit"
                                                onClick={this.handleSubmit}>Submit</Button>
                                    </Col>
                                    <Col lg="8">
                                        {
                                        this.state.error ?
                                            <Alert variant="danger">Please check your input</Alert>

                                            :

                                            null
                                        }
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
