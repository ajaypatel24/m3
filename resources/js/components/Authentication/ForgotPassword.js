import {Button, Card, Form, FormGroup, Row, Col, Alert} from "react-bootstrap";
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/VpnKey';
import "../../../sass/animation.css"
import {FormattedHTMLMessage} from "react-intl";
/**
 * Registartion form using firebase to create an account in the m3
 * system, upon registration, the user should be stored in both the
 * firebase authentication system as well as the 'register' table
 * in the database
 */

const EmailVerification = "Email Verifcation Link Sent";
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            organization: '',
            Email: '',
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
            [e.target.name]: e.target.value,
            error: '',
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
    componentDidMount = () => {

    }

    handleSwitch = () => {

    }

    forgotPassword = () => {


        let currentComponent = this



        let email = this.state.Email;


        firebase.auth().sendPasswordResetEmail(email)

            .then(error => {

                currentComponent.setState({error: 'Courriel Envoyé'})

            })
            .catch(error => { //catches login errors

                switch (error.code) {
                    case "auth/user-not-found":
                        currentComponent.setState({error: "l'Utilisateur n'existe pas"})
                        break;
                    case 'auth/invalid-email':
                        currentComponent.setState({error: 'Courriel Invalide'})
                        break;

                }

                return


            })

















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
                        this.setState({error: 'Error: Invalid Email',
                            email: '',
                            password: '',})


                        break;
                    case 'auth/weak-password':
                        this.setState({error: 'Error: Password too weak',
                            password: '',
                            passwordConfirm: '',})


                        break;
                    case 'auth/email-already-in-use':
                        this.setState({error: 'Error: This email is in use',
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
                    currentComponent.setState({error: "Email Verifcation Link Sent"})
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



                    })
                    .catch(function (error) {
                        console.log('Request failed', error);
                    });




            }).catch(function (error) {
            // Sign Up errors
            console.log(error.code);


            if (error.code === 'auth/email-already-in-use') {

            }
            console.log(error.code);

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
                    <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />  Oublier Mot de Passe </Card.Header>

                    <Card.Body>
                        <Card.Text>Entrer le courriel associé au compte. Un lien de restitution sera envoyer.</Card.Text>

                        <form id="registerForm">


                                {/**
                                 * Each new entry requires
                                 * <Form.Group>
                                 * <Form.Label>Label</Form.Label>
                                 * <Form.Control />
                                 * </Form.Group>
                                 */}
                                <Form.Group controlId="signUpFormName">
                                    <Form.Label>Courriel</Form.Label>
                                    <Form.Control name="Email" type="text" onChange={this.handleChange}
                                                  placeholder="Courriel"/>
                                </Form.Group>



                                </form>

                        {this.state.error === '' ? (
                            null
                        ) : this.state.error === 'Courriel Envoyé' ? (
                            <Alert variant="success"
                                   className="d-flex justify-content-center">{this.state.error}</Alert>
                        ) : (
                            <Alert variant="danger"
                                   className="d-flex justify-content-center">{this.state.error}</Alert>
                        )}

                        <Row>
                            <Col>
                        <Button variant="outline-info"  onClick={this.sendData}>
                            Retour
                        </Button>
                            </Col>

                            <Col>
                            <Button variant="primary"  onClick={this.forgotPassword}>Confirme
                            </Button>
                            </Col>
                        </Row>



                    </Card.Body>
                </Card>
            </div>
        );
    }
}