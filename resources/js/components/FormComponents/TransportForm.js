import React from 'react';
import {Col, Form, Row, Button  } from "react-bootstrap";

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

            VehiculeCat: '',
            Vehicule: '',
            Kilometres: '',

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentWillMount = () => {
        this.getTableRows();

        console.log(this.state.VehiculeCat);


    }


    /*
    fixQuantity = () => {
        console.table([this.state.Yearly, this.state.Frequency]);


        }
    }

*/

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

                            <Row>

                                <Col lg="1">
                                    <button onClick={this.changeDelete}>Switch</button>
                                </Col>

                                {this.state.Delete ?


                                    <Col lg="3">
                                        <p>par employe, origine destination</p>

                                        <Form noValidate
                                              validated={validated}
                                              onSubmit={e => this.handleSubmit(e)}
                                              method="POST" action="/"
                                              enctype="multipart/form-data">



                                            <Form.Group>
                                                <Form.Label>Nombre de Transports</Form.Label>
                                                <Form.Control
                                                    name="NbTransport"
                                                    required
                                                    type="text"
                                                    placeholder="# de Transports"
                                                    onChange={this.handleChange}
                                                    value={this.state.NbTransport}

                                                />
                                            </Form.Group>




                                            <button type="submit" onClick={this.handleSubmit}>submit</button>

                                        </Form>


                                    </Col>

                                    :


                                    <div>
                                        <p>Type vehicule, kilometrage et nombre d'employes</p>
                                        <Form noValidate
                                              validated={validated}
                                              onSubmit={e => this.handleSubmit(e)}
                                              method="POST" action="/"
                                              enctype="multipart/form-data">



                                            <Row>
                                            <Col lg="5">

                                                <Form.Label>Vehicule Category</Form.Label>
                                                <Form.Control as='select'
                                                              name="VehiculeCat"
                                                              required
                                                              type="text"
                                                              placeholder="Quantite"
                                                              onChange={this.handleChange2}
                                                              value={this.state.VehiculeCat}

                                                >


                                                    <option> </option>
                                                    {this.state.rows.map(vehicule => (
                                                        <option >
                                                            {vehicule}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>

                                            <Col lg="7">

                                                <Form.Label>Vehicule</Form.Label>
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
                                                    <option> </option>
                                                    {this.state.Libelle.map(vehicule => (
                                                        <option >
                                                            {vehicule}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                            </Row>

                                           <br/>

                                            <Row>
                                                <Col lg="4">
                                                    <Form.Label>Nombre de Voitures</Form.Label>
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
                                                    <Form.Label>Jours Ouvrables</Form.Label>
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
                                                    <Form.Label>Kilometres Parcourus</Form.Label>
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
                                            <Button type="submit" onClick={this.store}>Submit</Button>
                                            </Col>
                                        </Row>


                                    </div>


                                }


                                <Col lg="5">




                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
