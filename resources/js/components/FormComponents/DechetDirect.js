import {Col, Form, Row, Table, Button, Alert, Card} from "react-bootstrap";

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

            RecycleWaste: '',
            RecycleWasteUnite: '',

            DomesticWaste: '',
            DomesticWasteUnite: '',

            Incineration: '',
            IncinerationUnite: '',

            OrganicComposed: '',
            OrganicComposedUnite: '',



            SCIAN: "",
            UID: sessionStorage.getItem('UID'),
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

    }

    componentWillMount = () => {

    }



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

        let id = sessionStorage.getItem('UID');
        let g = this;

        console.log(data);


        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            fetch('/dechet/' + id, {
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


            <div>


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
                    <Card>
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
                                name="RecycleWaste"
                                placeholder="valeur"
                                value={this.state.RecycleWaste}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$">
                            </Form.Control></td>
                            <td><Form.Control as="select" name="RecycleWasteUnite"
                                              onChange={this.handleChange}>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="L">L</option>
                            </Form.Control></td>

                        </tr>
                        <tr>
                            <td>Infill of domestic waste</td>
                            <td><Form.Control
                                name="DomesticWaste"
                                placeholder="valeur"
                                value={this.state.DomesticWaste}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$">
                            </Form.Control></td>
                            <td><Form.Control as="select" name="DomesticWasteUnite"
                                              onChange={this.handleChange}
                            >
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="L">L</option>
                            </Form.Control></td>

                        </tr>
                        <tr>
                            <td>Incineration of domestic waste</td>
                            <td><Form.Control
                                name="Incineration"
                                placeholder="valeur"
                                value={this.state.Incineration}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$"
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="IncinerationUnite"
                                              onChange={this.handleChange}>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="L">L</option>
                            </Form.Control></td>

                        </tr>








                        <th colSpan="3">Matière organique</th>
                        <tr>
                            <td>Composed organic material</td>
                            <td><Form.Control
                                name="OrganicComposed"
                                placeholder="valeur"
                                value={this.state.OrganicComposed}
                                onChange={this.handleChange}
                                pattern="^[0-9]+$"
                            ></Form.Control></td>
                            <td><Form.Control as="select" name="OrganicComposedUnite"
                                              onChange={this.handleChange}>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="L">L</option>
                            </Form.Control></td>

                        </tr>






                        </tbody>
                    </Table>
                    </Card>
                    <br/>
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


            </div>


        )
    }
}
