import React from 'react';
import {Col, Form, Row, Button, Alert} from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';


const NumberRegex = new RegExp("^[0-9]+$");
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

        this.setState({LongDistance: 'Step1'})





        axios.get('/libelledata/' + 'journalier/')
            .then(response => {

                this.setState({Libelle: response.data});
            });



    }


    /*
    fixQuantity = () => {
        console.table([this.state.Yearly, this.state.Frequency]);


        }
    }

*/



    clearState = () => {
        this.setState({
            Vehicule: '',
            NombreVoitures: '',
            JoursOuvrables: '',
            Kilometres: '',
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


    }

    handleChange2(e) {

        this.setState({
            [e.target.name]: e.target.value
        });



        axios.get('/libelledata/' + 'journalier/')
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

    validate(data) {
        if (NumberRegex.test(data.NombreVoitures) &&
            NumberRegex.test(data.JoursOuvrables) &&
            NumberRegex.test(data.Kilometres)) {
            this.setState({error: false});
            return true
        }
        else {
            this.setState({error: true});
            return false;
        }
    }

    handleSubmit (e) {
        let data = this.state;


        let id = sessionStorage.getItem('UID');

        const form = e.currentTarget;
        if (this.validate(data) === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            fetch('/deplacement/' + id, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (response) {

                    console.log('Request succeeded with JSON response');
                    this.clearState();


                })
                .catch(function (error) {
                    console.log('Request failed', error);
                    this.clearState;
                });
        }

        this.setState(({validated: true}));
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
                                                pattern="^[0-9]+$"

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
                                                pattern="^[0-9]+$"
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
