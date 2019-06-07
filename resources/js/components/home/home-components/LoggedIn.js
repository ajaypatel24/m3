import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import { Tab, Row, Nav, Carousel, Card, Table, Dropdown} from 'react-bootstrap';

import { DynamicTable } from './DynamicTable'





const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");


export default class LoggedIn extends React.Component {


    constructor(props) {
        super(props); //required

        this.handleChange = this.handleChange.bind(this); //handle change function
        this.handleSubmit = this.handleSubmit.bind(this); //handle submit function

        this.state = {


            BusinessName: "",
            QuebecAddress: "",
            City: "",
            PostalCode: "",
            CorporateAddress: "",
            IncomeValue: "",
            EmployeeNumber: "",
            OfferToClient: "",
            SectorActivity: "",
            ClientBase: "",

            DiffCorpAddress: "",
            validated: false,


            BusinessNameError: ""

        };
    }


    handleSubmit(e) {
        e.preventDefault();

        const data = this.state; //VERY IMPORTANT

        //checks all auth
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            fetch('/', {
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
                });

        }
        this.setState(({validated: true}));
        console.log(data);


    };

    handleChange(e) {
        { /* = e => */
        }


        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    showHideDiv(corpAddress) {
        var box = document.getElementById("corpAddress");
        box.style.display = checkCorp.checked ? "block" : "none";

    }

    handleCheck() {
        if (this.state.DiffCorpAddress != "") {
            console.log(this.state.DiffCorpAddress);
            return true;
        }
        return false;
    }


    formValid() {
        const {
            BusinessName, QuebecAddress,
            City, PostalCode, CorporateAddress
        } = this.state;

        let g = BusinessName && QuebecAddress &&
            City && PostalCode && CorporateAddress;


        console.log(g);
        return g
        //Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false);
    };


    render() {

        return (

            <div>


                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>

                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Inventaire</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Inventaire</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Realiser votre inventaire de vos depenses energetiques, procedes,
                                                    intrants, etc. et calculer les emissions annuelles de votre activite
                                                </Card.Text>
                                                <Table responsive striped bordered hover variant="dark">
                                                    <thead>
                                                    <tr>
                                                        <th colSpan="5">Energie</th>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan="3">Compatiblisation direct des combustibles</th>
                                                        <th>Facteur Combustion</th>
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
                                                        <td>Gaz natural</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Propane</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Essence a la pompe</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Gazole a la pompe</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fioul domestique</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mazout leger, num 4 a 6</td>
                                                        <td ><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Charbon, coke... (kg)</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>

                                                    <th colSpan="4">Combustibles d'origine organique, sources fixes</th>
                                                    <tr>
                                                        <td>Biodiesel</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bois buche, sciures...(KG)</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td ><Form.Control as="select"  name="SectorActivity"
                                                                           onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>place</td>
                                                        <td>0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Chauffage fossible a partier des m^2 chauffes</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>

                                                        <th colSpan="4">Electricite achetee</th>



                                                    <tr>
                                                        <td>Total Electricite</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Achats de vapeur et de froid</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.23</td>
                                                        <td>0</td>
                                                    </tr>
                                                        </tbody>

                                                    </Table>

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
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emissions de CO2 hors energie</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emissions de CO2 hors energie</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td ><Form.Control as="select"  name="SectorActivity"
                                                                           onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.23</td>
                                                        <td>0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Emissions de CO2 hors energie</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>2.3</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emissions de CO2 hors energie</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td><Form.Control as="select"  name="SectorActivity"
                                                                          onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.2</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emissions de CO2 hors energie</td>
                                                        <td><Form.Control name="x" placeholder="valeur"></Form.Control></td>
                                                        <td ><Form.Control as="select"  name="SectorActivity"
                                                                           onChange={this.handleChange} required>
                                                            <option></option>
                                                            <option value="Unite1"> Unite1</option>
                                                        </Form.Control></td>
                                                        <td>1.23</td>
                                                        <td>0</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>

                                                <Table>
                                                    <tbody>
                                                <DynamicTable > </DynamicTable>
                                                    </tbody>
                                                </Table>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Featured</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Tab 2</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Tab 3</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>




            </div>





        );

    }
}



