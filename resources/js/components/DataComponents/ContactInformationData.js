import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios/index';
import Avatar from '@material-ui/core/Avatar';
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
            name: '',

        };
    }


    /**
     * Contact fills out their information which much be displayed somewhere for reference
     * Here, the UID is retrieved from session storage and used to access the users information
     * from the /contact route controller method call. The data retrieved in then placed in the
     * profile state array for access
     */
    componentDidMount() {
        let uid = sessionStorage.getItem('UID');
        console.log(uid);
        axios.get('/contact/' + uid)
            .then(response => {
                this.setState({profile: response.data});

            });


        axios.get('/name/' + uid)
            .then(response => {
                console.log(response.data);
                sessionStorage.setItem('name', response.data);
                this.setState({name: response.data});
            });


    }



    render() {

        return (

            <div>


                {/**
                * HOF (higher order function) map is used to iterate over the profile state array
                * attribute is an Object who's elements can be accessed by typing attribute.{ElementName}
                * this call is used to display all the information of the object on the user profile page
                */}

                {this.state.profile.map(attribute => {
                    return (


                        <Row>

                            <Col lg="1">
                            </Col>
                            <Col lg="4">
                                <h1>Profile</h1>
                                <Avatar>{this.state.name}</Avatar>
                            </Col>

                            <Col lg="7">
                                <div>

                                    {/**
                                    * Each new entry requires
                                    * <Form.Group as {Row}>
                                    * <Form.Label>Label</Form.Label>
                                    * <Col {sizing paramter for columns}>
                                    * <Form.Control plaintext readOnly value = attribute.{elementName} />
                                    * </Col>
                                    * </Form.Group>
                                    */}

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



