import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';


/**
 * Additonal info to provide once user signs in
 *
 *
 */

export default class ContactInformationForm extends React.Component
{
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
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
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

    render() {
        const {validated} = this.state;

        return (

            <Form noValidate
                   validated={validated}
                   onSubmit={e => this.handleSubmit(e)}
                   method="POST" action="/"
                   enctype="multipart/form-data">
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fonction</Form.Label>
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
                        <Form.Label>Telephone</Form.Label>
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
                    <Form.Label>Telephone2</Form.Label>
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
                    <Form.Label>Poste Telephone</Form.Label>
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
                        <Form.Label>City</Form.Label>
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
                        <Form.Label>Language</Form.Label>
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

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }
}