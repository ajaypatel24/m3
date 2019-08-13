import React from 'react';
import {Button, Col, Form, Row, Jumbotron, Card} from 'react-bootstrap';
import {FormattedHTMLMessage} from "react-intl";

import Container from '@material-ui/core/Container';
/**
 * Additonal info to provide once user signs in
 *
 *
 */

export default class TransportTabSwitch extends React.Component {
    /**
     *
     * @param props
     * Fonction: role at company
     * Telephone: Number 1
     * Telephone2: Optional number 2
     * PosteTelephone: Work Number
     * Langue: FR or EN
     */
    constructor(props) {
        super(props);

        this.state = {
            Fonction: "",
            Telephone: "",
            Telephone2: "",
            PosteTelephone: "",
            Langue: "",
        }

        this.handleChange = this.handleChange.bind(this);

    }

    /**
     * Allows user to write into forms
     * @param e
     */
    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    selection(e) {
        switch(e.target.id) {

            case "Employee":
                window.location.href = '#/transport';

                break;
            case "Intrant":
                window.location.href ='#/IntrantTransport';

                break;

        }
    }


    render() {


        return (
            <Container maxWidth="lg">
                <Row>
                    <Col>
                        <h1> Transport </h1>
                        <h6> Employees & Intrants </h6>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                <Card className="text-center">
                    <Card.Header>INTRANTS</Card.Header>
                    <Card.Body>
                        <Card.Title>Transport des Intrants</Card.Title>
                        <Card.Text>
                            Modifier le transport des intrants
                        </Card.Text>
                        <Button id="Intrant" variant="primary" onClick={this.selection}>Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="12">
                <Card className="text-center">
                    <Card.Header>EMPLOYES</Card.Header>
                    <Card.Body>
                        <Card.Title>Transport des Employes</Card.Title>
                        <Card.Text>
                            Modifier le transport des employes
                        </Card.Text>
                        <Button id="Employee" variant="primary" onClick={this.selection}>Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                    </Col>
                </Row>
            </Container>
        );

    }
}