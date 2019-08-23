import {Button, Card, Form, FormGroup, Row, Col, Alert} from "react-bootstrap";
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import "../../../sass/animation.css"
import {FormattedHTMLMessage} from "react-intl";
/**
 * Registartion form using firebase to create an account in the m3
 * system, upon registration, the user should be stored in both the
 * firebase authentication system as well as the 'register' table
 * in the database
 */

const EmailVerification = "Email Verifcation Link Sent";
export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            organization: '',
            email: '',
            password: '',
            passwordConfirm: '',
            passwordStrength: 'd-none',
            passwordMatch: "d-none",
            errors: {},
            LoginOrRegister: this.props.select,
            error: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePasswordStrength = this.handleChangePasswordStrength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     *
     * @param e
     *
     * Crucial function, allows for forms (textboxes) all over the page
     * to allow for data to be entered into them
     */
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    clearState = () => {
        this.setState({
            name: '',
            organization: '',
            email: '',
            password: '',
            passwordConfirm: '',
        })
    }

    sendData = () => {
        this.props.parentCallback(false);
    }


    handleSwitch = () => {

    }


    /**
     *
     * @param e
     * Checks if password entered obeys the requirement set by
     * the regex pattern strongRegex
     */
    handleChangePasswordStrength(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
        if (!this.state.password.match(strongRegex)) {
            this.setState({
                passwordStrength: "d-flex"
            });

        } else {
            this.setState({
                passwordStrength: "d-none"
            });
        }
    }

    /**
     *
     * @param e
     * Handles form submission, makes a call to firebase using the .createUserWithEmailAndPassword
     * function, the parameters are taken from the state. The same data is posted to the register table
     * using the /register RestAPI call
     */

    handleSubmit = (e) =>
    {
        e.preventDefault();

        let currentComponent = this
        // Checks passwords match
        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({
                passwordMatch: "d-flex"
            });
            return;
        }

        let uid = null;
        let name = this.state.name;
        let organization = this.state.organization;
        let email = this.state.email;


        // Signs user up and send data to custom backend
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => { //catches login errors



                switch(error.code) {
                    case 'auth/invalid-email':
                        this.setState({error: 'Erreur: Courriel Invalide',
                                            email: '',
                                            password: '',})

                        
                        break;
                    case 'auth/weak-password':
                        this.setState({error: 'Erreur: Mot de Passe trop Faible',
                                            password: '',
                                            passwordConfirm: '',})


                        break;
                    case 'auth/email-already-in-use':
                        this.setState({error: 'Erreur: Courriel deja enregistrer',
                                            email: '',
                                            password: '',
                                            passwordConfirm: '',})


                        break;

                }




                this.setState({
                    email: '',
                    password: '',
                })

            return;

            })
            .then(function () {
            // SECURITY PROBLEM ?


                firebase.auth().currentUser.sendEmailVerification().then(function () {
                    currentComponent.setState({error: "Verification enovyé par courriel"})
                    window.location.reload();
                })




            let data = {
                uid: firebase.auth().currentUser.uid,
                name: name,
                organization: organization,
                email: email
            };

                currentComponent.clearState

            fetch('/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }
            })
                .then(function (data) {
                    console.log('Request succeeded');


                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });


            console.log(data);

        }).catch(function (error) {
            // Sign Up errors


            if (error.code === 'auth/email-already-in-use') {

            }

        });


    };


    /**
     *
     * @returns {*}
     * Card Form Group made using bootstrap Form, Card, and Button
     * This is the register form which allows new users to create
     * accounts, each Form has an ID and a Label to make identification
     * easy
     */
    render()
    {
        return (
            <div>
                <br/>
                <br/>
                <Card id="test">
                <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />S'Inscrire</Card.Header>
                <Card.Body>

                    <form id="registerForm">
                        <FormGroup role="form">

                            {/**
                            * Each new entry requires
                            * <Form.Group>
                            * <Form.Label>Label</Form.Label>
                            * <Form.Control />
                            * </Form.Group>
                            */}
                            <Form.Group controlId="signUpFormName">
                                <Form.Label><FormattedHTMLMessage id="Register.Name"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control name="name" type="text" onChange={this.handleChange}
                                              placeholder="Nom Complet"/>
                            </Form.Group>

                            <Form.Group controlId="signUpFormOrganization">
                                <Form.Label>Organisation{/* <FormattedHTMLMessage id="Register.Organization"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/> */} </Form.Label>
                                <Form.Control name="organization" onChange={this.handleChange} type="text"
                                              placeholder="Nom d'Organisation"/>
                            </Form.Group>

                            <Form.Group controlId="signUpFormEmail">
                                <Form.Label><FormattedHTMLMessage id="Register.Email"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control name="email" type="email" onChange={this.handleChange}
                                              placeholder="Courriel"/>
                            </Form.Group>

                            <Form.Group controlId="signUpFormPassword">
                                <Form.Label><FormattedHTMLMessage id="Register.Password"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control name="password" type="password"
                                              onChange={this.handleChangePasswordStrength}
                                              placeholder="Mot de Passe"/>
                                <Form.Text className="text-muted">Minimum de 8 caractères, 1 majuscule, 1 miniscule et 1 numéro

                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="signUpFormPasswordCheck">
                                <Form.Label>Confirmer Mot de Passe</Form.Label>
                                <Form.Control name="passwordConfirm" type="password" onChange={this.handleChange}
                                              placeholder="Confirmer mot de passe"/>
                            </Form.Group>

                            <Form.Group>
                                <Row>
                                    <Col lg="6">

                                        <Button variant="outline-info"  onClick={this.sendData}>
                                            Retour
                                        </Button>
                                    </Col>
                                    <Col lg="6">
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                S'Inscrire
                            </Button>
                                    </Col>


                                </Row>
                            </Form.Group>

                            <div className={"mt-3 red-text ".concat(this.state.passwordMatch)}>
                                These passwords don't match
                            </div>


                        </FormGroup>
                    </form>
                    {this.state.error === '' ? (
                        null
                    ) : this.state.error === "Verification enovyé par courriel" ? (
                        <Alert variant="success" className="d-flex justify-content-center">{this.state.error}</Alert>
                    ) : (
                        <Alert variant="danger" className="d-flex justify-content-center">{this.state.error}</Alert>
                    )}
                </Card.Body>
                </Card>
            </div>
        );
    }
}