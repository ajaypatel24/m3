import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios/index';

/**
 * Contact information of current user displayed here before
 * or after they fill out required contact info, access
 * by clicking on profile dropdown item
 */
export default class ContactInformationData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            profile: [],
            TableData: [],

        };
    }


    componentDidMount() {
        let uid = sessionStorage.getItem('UID');
        console.log(uid);
        axios.get('/contact/' + uid)
            .then(response => {
                this.setState({profile: response.data});

            });

    }


    render() {


        return (

            <div>


                {this.state.profile.map(attribute => {
                    return (


                        <Row>

                            <Col lg="1">
                            </Col>
                            <Col lg="4">
                                <h1>Profile</h1>
                            </Col>

                            <Col lg="7">
                                <div>

                                    <Form.Group as={Row} controlId="formPlaintextEmail" >
                                        <Form.Label column sm="2">
                                            Name
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.name} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Organization
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.organization} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail" >
                                        <Form.Label column sm="2">
                                            Fonction/Role
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.fonction} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.email} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                           Telephone
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.telephone} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">

                                        <Form.Label column sm="2">
                                            Telephone 2
                                        </Form.Label>
                                        <Col sm="10">

                                            <Form.Control plaintext readOnly value={attribute.telephone2} />

                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Organization
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly value={attribute.Poste_telephone} />
                                    </Col>
                                </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Langue
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.langue} />
                                        </Col>
                                    </Form.Group>

                                    <p></p>
                                </div>
                            </Col>


                        </Row>
                    )

                })
                }


            </div>


        );

    }
}



