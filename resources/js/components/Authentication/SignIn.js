import {Button, Card, Form, FormGroup} from "react-bootstrap";
import React from 'react';
import Person from '@material-ui/icons/Person';
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

    /*
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



                fetch('/login', {
                    method: 'POST',
                    body: JSON.stringify(uid),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                        "Content-type": "application/json"
                    }
                })
                    .then(function (data) {


                        sessionStorage.setItem('authenticated', 'true');
                        sessionStorage.setItem('UID', uid);
                        currentComponent.getName();
                        //currentComponent.setState({authenticated: sessionStorage.getItem('authenticated')});


                        setTimeout(function () {
                            window.location.href = '#/profile/';
                        }, 20)
                        console.log('Request succeeded with JSON response', data);

                        console.log('Request succeeded with JSON response', user);

                        console.log(sessionStorage.getItem('authenticated'));
                    })








            .catch(function (error) {
                console.log('Request failed', error);
            });


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


            console.log('from login');

    };

*/


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
                <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />Sign In</Card.Header>
                <Card.Body>
                    <Form  >


                        <Form.Group>
                        <Form.Label className="mr-sm-2">Sign In</Form.Label>

                        <Form.Group>
                        <Form.Control
                            required
                            name="email"
                            type="text"
                            placeholder="Username"
                            className="mr-sm-2"
                            onChange={this.handleChange}
                            value={this.state.email}
                            onKeyPress={this.handleKeyPress}/>
                        </Form.Group>
                        <Form.Group>

                        <Form.Control
                            required
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="mr-sm-2"
                            onChange={this.handleChange}
                            value={this.state.password}
                            onKeyPress={this.handleKeyPress}/>
                        </Form.Group>

                        </Form.Group>


                        <Button variant="outline-info" type="submit" onClick={this.handleChange}>Login</Button>

                    </Form>
                </Card.Body>
            </Card>
        );
    }
}