import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios/index';
import Avatar from '@material-ui/core/Avatar';
import {FormattedHTMLMessage} from "react-intl";
/**
 * Contact information of current user displayed here before
 * or after they fill out required contact info, access
 * by clicking on profile dropdown item
 */

import "../../../sass/animation.css";


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
        axios.get('/contact/' + uid)
            .then(response => {
                this.setState({profile: response.data});

            });


        axios.get('/name/' + uid)
            .then(response => {
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
                                <h1><FormattedHTMLMessage id="ContactInformationData.Profile"
                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                          description="Welcome header on app main page"
                                                          values={{what: 'react-intl'}}/></h1>
                                <Avatar id="BigAvatar"><h1>{this.state.name}</h1></Avatar>
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
                                            <FormattedHTMLMessage id="ContactInformationData.Name"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.name} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Organization"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.organization} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail" >
                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Role"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.fonction} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Email"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.email} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Telephone"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly value={attribute.telephone} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">

                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Telephone2"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                        </Form.Label>
                                        <Col sm="10">

                                            <Form.Control plaintext readOnly value={attribute.telephone2} />

                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        <FormattedHTMLMessage id="ContactInformationData.CorpTelephone"
                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                              description="Welcome header on app main page"
                                                              values={{what: 'react-intl'}}/>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly value={attribute.Poste_telephone} />
                                    </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            <FormattedHTMLMessage id="ContactInformationData.Language"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
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



