import {Col, Form, Row, Table, Button, Alert} from "react-bootstrap";

import React from "react";
import axios from 'axios/index';
import { FormattedHTMLMessage } from 'react-intl'
import Container from '@material-ui/core/Container';
/**
 * Energy table with conditional rendering allowing users
 * to add their energy expenditures to the database
 */
export default class DechetDirect extends React.Component {


    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this); //handle change function
        this.handleSubmit = this.handleSubmit.bind(this); //handle submit function


        this.state = {

            GazNaturel: "",
            GazUnite: "",

            Propane: "",
            PropaneUnite: "",

            EssencePompe: "",
            EssenceUnite: "",

            GazolePompe: "",
            GazoleUnite: "",

            FioulDomestique: "",
            FioulUnite: "",

            MazoutLeger: "",
            MazoutUnite: "",

            Charbon: "",
            CharbonUnite: "",

            Cammionage: "",
            CammionageUnite: "",

            TotalElectricite: "",
            ElectriciteUnite: "",

            Fossil: "",
            FossileUnite: "",

            Biodiesel: "",
            BiodieselUnite: "",

            Bois: "",
            BoisUnite: "",

            Soudure: "",
            SoudureUnite: "",

            CNC: "",
            UsinageUnite: "",

            VapeurFroid: "",
            VapeurUnite: "",

            Vin: "",
            VinUnite: "",

            Biere: "",
            BiereUnite: "",

            Halocarbunes: "",
            HaloUnite: "",

            AutreMethane: "",
            AutreMethaneUnite: "",

            n2osol: "",
            n2osolUnite: "",

            n2oanimaux: "",
            n2oanimauxUnite: "",

            MethaneAnimaux: "",
            MethaneAnimauxUnite: "",

            Coke: "",
            CokeUnite: "",


            SCIAN: "",
            UID: "",
            TableSubmit: sessionStorage.getItem('TableSubmit'),
            EnergyCategories: [],
            validated: false,
            error: '',
            TableData: [],
            DisplayData: sessionStorage.getItem('Empty'),

        }


    }

    componentDidMount() {


        let uid = sessionStorage.getItem('UID');
        console.log(uid);
        axios.get('/scian/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({SCIAN: response.data, UID: uid});
            });

        axios.get('/test/')
            .then(response => {
                console.log(response.data);
                this.setState({EnergyCategories: response.data});
            });


        console.log(this.state.EnergyCategories);

        axios.get('/inventaire/' + uid)
            .then(response => {
                this.setState({TableData: response.data})

                console.log(this.state.TableData)
                console.log('yes');

            });

        console.log(this.state.TableData);
        if (this.state.TableData != null) {
            console.log('notnull')
        }
    }

    componentWillMount = () => {
        if (this.state.TableData[0] == "") {
            sessionStorage.setItem('Empty', 'true')
        } else {
            console.log(this.state.TableData[0])
            sessionStorage.setItem('Empty', 'false')
        }
    }




    /*
        componentDidMount() {
            axios.get('/prestart')
                .then(response => {
                    this.setState({categories: response.data});

                });
        }
        */


    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };


    handleSubmit(e) {
        e.preventDefault();

        const data = this.state; //VERY IMPORTANT

        //checks all auth
        /*
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
        */
        let g = this;

        console.log(data);


        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            fetch('/categorie', {
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
                        g.setState({error: 'All fields must be numerical'})
                    } else if (data.status === 200) {
                        g.setState({error: 'Data submitted successfully'})
                        //window.location.reload();
                    }
                })
                .catch(function (error) {

                    console.log('Request failed', error);
                    console.log("why");
                });
        }
        this.setState(({validated: true}));

        /* this.setState(({validated: true})); */
        console.log((data));


    };


    /**
     * Restrictions (2019-06-14)
     *
     * CHARBON                  21; 32; 33
     * COKE                     21; 32; 33
     * BOIS                     11; 21; 32; 33
     * ACHATS VAPEUR/FROID      21; 32; 33
     * FERMENTATION VIN         31
     * GAZIFICATION BIERRE      31
     * EMISSION N2O ENGRAIS SOL 11; 31
     * EMISSION N2O ANIMAUX     11
     * AUTRES EMISSIONS METHANE 11
     * EMISSIONS HALOCARBURES   21; 32; 33
     * USINAGE ET TOURNAGE      21; 32; 33
     * SOUDURE                  21; 32; 33
     *
     *
     */
    render() {
        const {validated} = this.state;

        return (


            <Container maxWidth="lg">


                <Row>
                    <Col lg="4">
                        <h1> Dechets Directs </h1>
                    </Col>
                    <Col lg="4">

                        {

                            this.state.DisplayData === 'true' ?
                                <Alert variant="info" content>Data Submitted, Click to Edit</Alert>

                                :

                                null
                        }
                    </Col>
                    <Col lg="5">
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6> Remplire les données nécessaires </h6>
                    </Col>
                </Row>


                <Form noValidate
                      validated={validated}
                      onSubmit={e => this.handleSubmit(e)} method="POST" action="/">
                    <Table responsive> {/**/}
                        <thead>
                        <tr>
                            <th colSpan="3">Dechets Directs</th>
                        </tr>
                        <tr>
                            <th>Fin de vie des matières résiduelles</th>
                            <th>Consommation</th>
                            <th>Unite</th>

                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td>Recycling of mixed waste</td>
                            <td><Form.Control
                                name="GazNaturel"
                                placeholder="valeur"
                                value={this.state.GazNaturel}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$">
                            </Form.Control></td>
                            <td><Form.Control as="select" name="GazUnite"
                                              onChange={this.handleChange}>
                                <option value="Kg">Kg</option>
                            </Form.Control></td>

                        </tr>
                        <tr>
                            <td>Infill of domestic waste</td>
                            <td><Form.Control
                                name="Propane"
                                placeholder="valeur"
                                value={this.state.Propane}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$">
                            </Form.Control></td>
                            <td><Form.Control as="select" name="PropaneUnite"
                                              onChange={this.handleChange}
                            >
                                <option value="Kg">Kg</option>
                            </Form.Control></td>

                        </tr>
                        <tr>
                            <td>Incineration of domestic waste</td>
                            <td><Form.Control
                                name="EssencePompe"
                                placeholder="valeur"
                                value={this.state.EssencePompe}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$"
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="EssenceUnite"
                                              onChange={this.handleChange}>
                                <option value="Kg">Kg</option>
                            </Form.Control></td>

                        </tr>








                        <th colSpan="3">Matière organique</th>
                        <tr>
                            <td>Composed organic material</td>
                            <td><Form.Control
                                name="GazolePompe"
                                placeholder="valeur"
                                value={this.state.GazolePompe}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$"
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="GazoleUnite"
                                              onChange={this.handleChange}>
                                <option value="Kg">Kg</option>
                            </Form.Control></td>

                        </tr>






                        </tbody>
                    </Table>
                    <Row>
                        <Col lg="3">
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                        <Col lg="9">
                            {
                                {
                                    'All fields must be numerical':
                                        <Alert variant="danger"
                                               className="d-flex justify-content-center">{this.state.error}</Alert>,
                                    'Data submitted successfully':
                                        <Alert variant="success"
                                               className="d-flex justify-content-center">{this.state.error}</Alert>,
                                    '':
                                        null,
                                }[this.state.error]
                            }
                        </Col>
                    </Row>

                </Form>


            </Container>


        )
    }
}
