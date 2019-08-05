import {Form, Table, Row, Col, Button} from "react-bootstrap";

import React from "react";
import axios from 'axios/index';
import { FormattedHTMLMessage } from 'react-intl'
import Container from '@material-ui/core/Container';
/**
 * Energy table with conditional rendering allowing users
 * to add their energy expenditures to the database
 */
export default class ProcessTable extends React.Component {


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

            N2OSol: "",
            N2OSolUnite: "",

            N2OAnimaux: "",
            N2OAnimauxUnite: "",

            MethaneAnimaux: "",
            MethaneAnimauxUnite: "",

            Coke: "",
            CokeUnite: "",


            SCIAN: "",
            UID: sessionStorage.getItem('UID'),
            TableSubmit: sessionStorage.getItem('TableSubmit'),
            validated: false


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


        console.log(this.state.SCIAN);
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


        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {


            fetch('/procede/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (data) {
                    console.log('Request succeeded with JSON response', data);
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

        let bois;


        let vin;
        let biere;

        let N2OSol;
        let N2OAnimaux;

        let autremethane;
        let halocarbures;
        let usinage;
        let Soudure;


        switch (this.state.SCIAN) {
            case 'SCIAN 21':
            case 'SCIAN 31-33':


                bois =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Wood"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Bois"
                            placeholder="valeur"
                            value={this.state.Bois}
                            onChange={this.handleChange}
                        ></Form.Control></td>
                        <td><Form.Control as="select" name="BoisUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>


                vin =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Wine"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Vin"
                            placeholder="valeur"
                            value={this.state.Vin}
                            onChange={this.handleChange}>

                        </Form.Control></td>
                        <td><Form.Control as="select" name="VinUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                biere =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Beer"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Biere"
                            placeholder="valeur"
                            value={this.state.Biere}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="BiereUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                halocarbures =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Halocarbures"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Halocarbunes"
                            placeholder="valeur"
                            value={this.state.Halocarbunes}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="HaloUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                usinage =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Usinage"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="CNC"
                            placeholder="valeur"
                            value={this.state.CNC}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="UsinageUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                Soudure =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Soudure"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Soudure"
                            placeholder="valeur"
                            value={this.state.Soudure}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="SoudureUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                break;

            case 'SCIAN 11':
                bois =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.Wood"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="Bois"
                            placeholder="valeur"
                            value={this.state.Bois}
                            onChange={this.handleChange}
                        ></Form.Control></td>
                        <td><Form.Control as="select" name="BoisUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                N2OSol =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.n2o"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="N2OSol"
                            placeholder="valeur"
                            value={this.state.N2OSol}
                            onChange={this.handleChange}
                        ></Form.Control></td>
                        <td><Form.Control as="select" name="N2OSolUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                N2OAnimaux =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.N2OAnimaux"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="N2OAnimaux"
                            placeholder="valeur"
                            value={this.state.N2OAnimaux}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="N2OAnimauxUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>

                autremethane =
                    <tr>
                        <td><FormattedHTMLMessage id="EnergyTable.MethaneOther"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></td>
                        <td><Form.Control
                            name="AutreMethane"
                            placeholder="valeur"
                            value={this.state.AutreMethane}
                            onChange={this.handleChange}>
                        </Form.Control></td>
                        <td><Form.Control as="select" name="AutreMethaneUnite"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>

                    </tr>
                break;


        }


        return (


            <Container maxWidth="lg">

                <Row>
                    <Col lg="12">
                        <h1> Table de Procédés </h1>
                        <h6> Remplire les données nécessaires </h6>
                    </Col>
                </Row>

                <br/>

                <Form noValidate
                      validated={validated}
                    onSubmit={e => this.handleSubmit(e)} method="POST" action="/">
                    <Table responsive> {/**/}
                        <thead>

                        <tr>
                            <th colSpan="3">Compatiblisation direct des combustibles</th>

                        </tr>
                        <tr>
                            <th>Combustibles fossiles, sources fixes</th>
                            <th>Consommation</th>
                            <th>Unite</th>


                        </tr>
                        </thead>
                        <tbody>



                        {vin}

                        {biere}

                        {N2OSol}

                        {N2OAnimaux}

                        <tr>
                            <td><FormattedHTMLMessage id="EnergyTable.AnimalMethane"
                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                      description="Welcome header on app main page"
                                                      values={{what: 'react-intl'}}/></td>
                            <td><Form.Control name="MethaneAnimaux"
                                              placeholder="valeur"
                                              value={this.state.MethaneAnimaux}
                                              onChange={this.handleChange}
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="MethaneAnimauxUnite"
                                              onChange={this.handleChange}>
                                <option></option>
                                <option value="Litre">Litre</option>
                                <option value="Kg">Kg</option>
                                <option value="KWH">KWH</option>
                            </Form.Control></td>

                        </tr>

                        {autremethane}

                        {halocarbures}

                        {usinage}

                        {Soudure}

                        <tr>
                            <td><FormattedHTMLMessage id="EnergyTable.Truck"
                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                      description="Welcome header on app main page"
                                                      values={{what: 'react-intl'}}/></td>
                            <td><Form.Control name="Cammionage"
                                              placeholder="valeur"
                                              value={this.state.Cammionage}
                                              onChange={this.handleChange}
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="CammionageUnite"
                                              onChange={this.handleChange} >
                                <option></option>
                                <option value="Litre">Litre</option>
                                <option value="Kg">Kg</option>
                                <option value="KWH">KWH</option>
                            </Form.Control></td>

                        </tr>

                        <tr><FormattedHTMLMessage id="EnergyTable.EndOfLife"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/></tr>


                        </tbody>

                    </Table>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>


                {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}


                {/*
                <Table responsive striped bordered hover variant="dark">
                    <thead>

                    <tr>
                        <th colSpan="5">Hors Energie</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Compatiblisation direct des procedes</th>
                        <th>Facteur sur site</th>
                        <th>Total GES</th>
                    </tr>
                    <tr>
                        <th>Combustibles fossiles, sources fixes</th>
                        <th>Consommation</th>
                        <th>Unite</th>


                    </tr>

                    </thead>
                    <tbody>
                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>2.3</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>1.2</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>1.23</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>2.3</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>1.2</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Emissions de CO2 hors energie</td>
                        <td><Form.Control name="x[]" placeholder="valeur"></Form.Control></td>
                        <td><Form.Control as="select" name="SectorActivity"
                                          onChange={this.handleChange} required>
                            <option></option>
                            <option value="Litre">Litre</option>
                            <option value="Kg">Kg</option>
                            <option value="KWH">KWH</option>
                        </Form.Control></td>
                        <td>1.23</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                </Table>

                */}


            </Container>


        )
    };
}
