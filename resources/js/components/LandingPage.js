import React from 'react';
import {Button, Card, Col, Nav, Row, Tab, Table} from 'react-bootstrap';

import {EnergyTable} from './FormComponents/EnergyTable';
import '../../sass/TabStyle.css'
import ContactInformationForm from "./FormComponents/ContactInformationForm";
import IntrantForm from "./FormComponents/IntrantForm";
import TransportForm from "./FormComponents/Transport/TransportForm";

const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");

/**
 * Important page combining energy table, contact info, intrants and transport
 * change the sidenav it takes up too much space, make it collapsable
 */
export default class LandingPage extends React.Component {


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
            SCIAN22: false,
            DiffCorpAddress: "",
            validated: false,
            BusinessNameError: "",
            categories: []

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
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };



    render() {


        return (

            <div>

                {/**
                 * Custom use of Bootstrap Nav and tabs to make sidenav
                 * SECTION 1:
                 * Titles on the side nav outlining exactly what is in each
                 * to change titles, change the name contained within Nav.Link
                 *
                 * SECTION 2:
                 * Content on each portion of the sidenav,
                 * Import component from another javascript file and place
                 * the file you imported's defined tag within the Card.Body
                 * portion
                 *
                 * General Form of Section 2
                 * <Tab.Pane eventKey="{position}">
                 * <Col sm="{4}">
                 * <Card>
                 * <Card.Header as="h5">Title at top of card</Card.Header>
                 * <Card.Body>
                 * <Card.Title>another title</Card.Title>
                 * <Card.Text>
                 * Description of what is needed
                 * </Card.Text>
                 * <EnergyTable/> {Component that you want to add to the card}
                 * <Button variant="primary">Go somewhere</Button> {Button to do whatever you want}
                 * </Card.Body>
                 * </Card>
                 * </Col>
                 * </Tab.Pane>
                 */}



                {/** SECTION 1 **/}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>

                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="test">Inventaire</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="test">Contact Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Intrants</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Transport</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        {/**END SECTION 1 **/}


                        {/** SECTION 2 **/}
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

                                                 <EnergyTable/>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Contact Information</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Please fill in all required information before accessing
                                                    our services
                                                </Card.Text>


                                                <ContactInformationForm/>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Intrants</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Fill in the required information
                                                </Card.Text>

                                                <Table>


                                                    <tbody>
                                                    <IntrantForm> </IntrantForm>
                                                    </tbody>


                                                </Table>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Intrants</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Fill in the required information
                                                </Card.Text>

                                                <Table>
                                                <tbody>
                                                <TransportForm></TransportForm>
                                                </tbody>
                                                </Table>

                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                {/**END SECTION 2 **/}


            </div>


        );

    }
}



