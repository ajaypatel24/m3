import {Button, Card, Form, FormGroup} from "react-bootstrap";
import React from 'react';
import {register} from "./UserFunctions";

/**
 * Old login test, deprecated
 */

export default class LoginScreen extends React.Component {
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
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePasswordStrength = this.handleChangePasswordStrength.bind(this);
        this.toSubmit = this.toSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

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

    toSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            if(res === 201) {
                console.log("success");
            }
            //window.location.href = '/login/';
            //console.log(localStorage.getItem('usertoken'));
        })

        document.getElementById("registerForm").reset();


    }




    handleSubmit = (e) =>
    {
        e.preventDefault();

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
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function () {
            // SECURITY PROBLEM ?
            let data = {
                uid: firebase.auth().currentUser.uid,
                name: name,
                organization: organization,
                email: email
            };

            fetch('/register', {
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


            console.log(data);

        }).catch(function (error) {
            // Sign Up errors
            console.log(error.code);
            console.log(error.message);

            if (error.code === 'auth/email-already-in-use') {
                alert("this email is already in use");
            }
            console.log(error.code);
            console.log(error.message);
        });


    };

    render()
    {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-center login-btn-color-font"><i
                    className="fas fa-user-plus icon-transform"/>Login</Card.Header>
                <Card.Body>
                    <form onSubmit={this.toSubmit} id="registerForm">
                        <FormGroup role="form">


                            <Form.Group controlId="signUpFormEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" onChange={this.handleChange}
                                              placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="signUpFormPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password"
                                              onChange={this.handleChangePasswordStrength}
                                              placeholder="Password"/>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>

                        </FormGroup>
                    </form>
                </Card.Body>
            </Card>
        );
    }
}