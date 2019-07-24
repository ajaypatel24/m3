import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {FormattedHTMLMessage} from "react-intl";


/**
 * Additonal info to provide once user signs in
 *
 *
 */

export default class ContactInformationForm extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
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


    /**
     * Posts information into the database using the contact controller method
     * checks that all forms are valid beforehand
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();


        const data = this.state; //VERY IMPORTANT

        //checks all auth
        const form = e.currentTarget;

        //checks that all forms are valid before submission
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else { //post to database by using the contact/{id} route
            let id = sessionStorage.getItem('UID');
            fetch('/contact/' + id, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (data) {
                    console.log("success")
                    //console.log('Request succeeded with JSON response', data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                    //console.log("why");
                });

        }
        this.setState(({validated: true}));
        console.log(data);


    };

    /**
     * Make use of Form, Form.Row, Form.Group to make contact information form page
     * General form to add a form box
     *
     * <Form.Group as={Col} controlId="formGridEmail">
     * <Form.Label>Fonction</Form.Label>
     * <Form.Control
     *      name="{name}" //include same name in state
     *      required
     *      value={this.state.{statename}} //
     *      onChange={this.handleChange}
     *      type="text"
     *      placeholder="{name}"
     *      pattern="^[a-zA-Z]+$" //pattern that the input MUST obey
     *      />
     * </Form.Group>
     * @returns {*}
     */
    render() {
        const {validated} = this.state;

        return (
            <div>
                <Row>
                    <Col lg="12">
                        <h1> Contact Information </h1>
                        <h6> Remplir les formulaires </h6>
                    </Col>
                </Row>

                <br/>

                <Form noValidate
                      validated={validated}
                      onSubmit={e => this.handleSubmit(e)}
                      method="POST" action="/"
                      enctype="multipart/form-data">
                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><FormattedHTMLMessage id="ContactInformationForm.Role"
                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                              description="Welcome header on app main page"
                                                              values={{what: 'react-intl'}}/></Form.Label>
                            <Form.Control
                                name="Fonction"
                                required
                                value={this.state.Fonction}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Fonction"
                                pattern="^[a-zA-Z]+$"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label><FormattedHTMLMessage id="ContactInformationForm.Telephone"
                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                              description="Welcome header on app main page"
                                                              values={{what: 'react-intl'}}/></Form.Label>
                            <Form.Control
                                name="Telephone"
                                required
                                value={this.state.Telephone}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Telephone"
                                pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                            />
                        </Form.Group>
                    </Form.Row>


                    <Form.Group controlId="formGridAddress1">
                        <Form.Label><FormattedHTMLMessage id="ContactInformationForm.Telephone2"
                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                          description="Welcome header on app main page"
                                                          values={{what: 'react-intl'}}/></Form.Label>
                        <Form.Control
                            name="Telephone2"
                            value={this.state.Telephone2}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Telephone"
                            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"

                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label><FormattedHTMLMessage id="ContactInformationForm.WorkTelephone"
                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                          description="Welcome header on app main page"
                                                          values={{what: 'react-intl'}}/></Form.Label>
                        <Form.Control
                            name="PosteTelephone"
                            required
                            value={this.state.PosteTelephone}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Poste Telephone"
                            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"

                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label><FormattedHTMLMessage id="ContactInformationForm.City"
                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                              description="Welcome header on app main page"
                                                              values={{what: 'react-intl'}}/></Form.Label>
                            <Form.Control
                                name="City"
                                required
                                type="text"
                                placeholder="City"
                                onChange={this.handleChange}
                                value={this.state.City}
                                pattern="^[a-zA-Z]+$"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><FormattedHTMLMessage id="ContactInformationForm.Language"
                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                              description="Welcome header on app main page"
                                                              values={{what: 'react-intl'}}/></Form.Label>
                            <Form.Control as="select"
                                          name="Langue"
                                          required
                                          onChange={this.handleChange}>
                                <option></option>
                                <option value="EN">EN</option>
                                <option value="FR">FR</option>
                            </Form.Control>
                        </Form.Group>


                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );

    }
}