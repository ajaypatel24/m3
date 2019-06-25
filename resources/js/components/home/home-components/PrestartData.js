import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios';

export default class PrestartData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],

        };
    }


    componentDidMount() {
        let uid = localStorage.getItem('UID');
        console.log(uid);
        axios.get('/contact/' + uid)
            .then(response => {
                this.setState({prestart: response.data});

            });

        axios.get('/inventaire/'+uid)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("hello");
                console.log(this.state.TableData);
                console.log(this.state.TableData[1]);
            });

        console.log(this.state.prestart);
    }


    render() {


        return (

            <div>

                {this.state.TableData.map(data => {
                    return (

                        <th>

                            <tr>g</tr>
                            <tr>{data.Num_affiche}</tr>

                            <tr>{data.Nom_procede}</tr>
                            <tr>{data.Quantite_an}</tr>
                            <tr>{data.Unite_an}</tr>
                            <tr>{data.idProcede}</tr>



                        </th>

                    )
                })};

                {this.state.prestart.map(attribute => {
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
                                            Fonction
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



