import {Button, Card, Form, FormGroup} from "react-bootstrap";
import React from 'react';

/**
 * Registartion form using firebase to create an account in the m3
 * system, upon registration, the user should be stored in both the
 * firebase authentication system as well as the 'register' table
 * in the database
 */
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
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePasswordStrength = this.handleChangePasswordStrength.bind(this);

        this.handleLoginRequest = this.handleLoginRequest.bind(this);

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

    handleLoginRequest = () => {


        let currentComponent = this


        console.table([
            this.state.email,
            this.state.password
        ]);


        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (user) {


                let uid = firebase.auth().currentUser.uid;

                console.log(uid); //important, exclusive Uid that will be used to identify user


                /*
                fetch('/login', {
                    method: 'POST',
                    body: JSON.stringify(uid),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                        "Content-type": "application/json"
                    }
                })
                    .then(function (data) {
                    */


                sessionStorage.setItem('authenticated', 'true');
                sessionStorage.setItem('UID', uid);
                currentComponent.getName();
                currentComponent.setState({authenticated: sessionStorage.getItem('authenticated')});



                 setTimeout(function () {
                            window.location.href = '#/profile/';
                            window.location.reload();
                        }, 20)
                 console.log('Request succeeded with JSON response', data);


                /*
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
            */

            }).catch(function (error) {
            // Handle Errors here.
            if (error.code === 400) {
                console.log("either email or password is incorrect");
            }
            //console.log("dr yeet");
            //var errorCode = error.code;
            ///var errorMessage = error.message;
            //return;
            // ...
        });


        console.log("from login");
        console.log(currentComponent.state.authenticated);


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
            <Card>
                <Card.Header className="d-flex justify-content-center login-btn-color-font"><i
                    className="fas fa-user-plus icon-transform"/>Sign Up</Card.Header>
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
                             <Form.Group>
                                 <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="text"
                                placeholder="Username"
                                className="mr-sm-2"
                                onChange={this.handleChange}
                                value={this.state.email}
                                />
                             </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="mr-sm-2"
                                onChange={this.handleChange}
                                value={this.state.password}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleLoginRequest}>
                                Login
                            </Button>

                        </FormGroup>
                    </form>
                </Card.Body>
            </Card>
        );
    }
}