import React from 'react';
import {Button, Form, Nav, Navbar, NavDropdown, Card, Row, Col, FormGroup, Alert} from 'react-bootstrap';
import SideNavigation from './NavComponents/SideNavigation';
import Particles from 'react-particles-js';


import '../../sass/navstyle.css'
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Register from "./Authentication/Register";
import Snackbar from '@material-ui/core/Snackbar'
import Chip from '@material-ui/core/Chip'
import SignIn from "./Authentication/SignIn"
import DoneIcon from '@material-ui/icons/Done';
import {SnackbarContent} from "@material-ui/core";
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import messages from './messages'


const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");


/**
 * Main navbar placed at top of page, conditional rendering
 * has clickable name to log in and out
 *
 */
export default class LoginComponent extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            showLogin: false,
            loggedIn: false,
            email: '',
            password: '',
            authenticated: sessionStorage.getItem('authenticated'),
            redirect: false,
            name: this.getName(),
            isLoading: true,
            LoginOrSignUp: false,
            error: '',
            lang: localStorage.getItem('lang')
        };


        console.log(sessionStorage.getItem('authenticated'));

        this.handleChange = this.handleChange.bind(this);
        //this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleChangePasswordStrength = this.handleChangePasswordStrength.bind(this);

    }


    /**
     * test method to see who is logged in
     * @constructor
     */
    VerifyUser = () => {


        console.table([
            (sessionStorage.getItem('authenticated')),
            (sessionStorage.getItem('UID')),
            (this.state.authenticated)]
        )


    }

    switch = () => {
        if (localStorage.getItem('lang') === 'fr') {
            localStorage.setItem('lang', 'en');
        } else if (localStorage.getItem('lang') === 'en') {
            localStorage.setItem('lang', 'fr');
        } else {
            localStorage.setItem('lang', 'en');
        }

        window.location.reload();
    }




    callbackFunction = (childata) => {
        this.setState ({LoginOrSignUp: childata})
        return childata;
    }

    /**
     * handles login request using firebase to check credentials, if firebase
     * approves of the login, then a UID is assigned which allows the user
     * to access their data on the website
     */


    handleSwitch = () => {
        this.setState({LoginOrSignUp: !this.state.LoginOrSignUp})
    }
    handleLoginRequest = () => {


        let currentComponent = this


        console.table([
            this.state.email,
            this.state.password
        ]);



            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

                .catch(error => { //catches login errors

                    switch(error.code) {
                        case 'auth/wrong-password':
                            this.setState({error: 'Invalid Password'})
                            break;
                        case 'auth/invalid-email':
                            this.setState({error: 'Please enter a valid Email Address'})
                            break;
                        case 'auth/user-not-found':
                            this.setState({error: 'User: ' +this.state.email +' does not exist'})
                            break;

                    }
                    /*
                        console.log(error.code);
                        this.setState({error: error.code})
                        */

                    this.setState({
                        email: '',
                        password: '',
                    })

                })
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
                            currentComponent.setState({authenticated: sessionStorage.getItem('authenticated')});


                            setTimeout(function () {
                                window.location.href = '#/profile/';
                                window.location.reload();
                            }, 20)
                            console.log('Request succeeded with JSON response', data);


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



        console.log("from login");
        console.log(currentComponent.state.authenticated);


    };



    /**
     * testing submit on clicking enter
     * @param e
     */
    handleKeyPress(e) {
        let currentComponent = this
        if (e.key === 'Enter') {
            console.log('test');
            currentComponent.handleLoginRequest;
        }

    }


    /**
     * handles logout request with firebase, on logout
     * the session is terminated and use can no longer
     * access their account or any other account as they
     * are redirected to the home page
     */
    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log(firebase.auth().currentUser);
        });

        console.log(this.state.authenticated);
        window.location.href = '#/';
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('UID');
        sessionStorage.removeItem('name');
        this.setState({authenticated: false});
        window.location.reload();

    }

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


    /** display name of person logged in */
    getName = () => {

        let id = sessionStorage.getItem('UID');
        axios.get('/name/' + id)
            .then(response => {
                console.log(response.data);
                sessionStorage.setItem('name', response.data);
                this.setState({name: response.data});
            });

    }


    /**
     * allows writing to forms
     * @param e
     */
    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    ;


    /**
     * Navbar is located here, conditionally rendered based
     * on if the user is logged in or not
     *
     * @returns {*}
     */
    render() {


        return (

            /** Begin Navbar */


            <div style={{overflowX: 'hidden'}}> {/*disables very unappealing shaking when state changes */}

                {/*
                <Particles
                    params={{
                        particles: {
                            color: {
                                value: "#000000"
                            }
                        }
                    }}
                />
                */}
            <Row>

                <Col lg="1">

                </Col>



                <Col lg="3" sm="4">
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <img
                        style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}
                        src={window.location.origin + "/img/ecosystem.svg"}
                        width="300"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                    </div>

                </Col>


            <Col lg="8" sm="8">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                {!this.state.LoginOrSignUp ?
                    <Card>

                            <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person /><FormattedHTMLMessage id="login.SignIn"
                                                                                                                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                                                                        description="Welcome header on app main page"
                                                                                                                                        values={{what: 'react-intl'}}/></Card.Header>
                            <Card.Img variant="top" src={window.location.origin + "/img/IE_logo.svg"} width="147" height="147"/>
                            <Card.Body>
                                <Card.Text className="d-flex justify-content-center"> <FormattedHTMLMessage id="login.Intro"
                                                                                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                                            description="Welcome header on app main page"
                                                                                                            values={{what: 'react-intl'}}/> </Card.Text>


                                {this.state.error === '' ?
                                   null
                                    :
                                    <Alert variant="danger"
                                           className="d-flex justify-content-center">{this.state.error}</Alert>
                                }
                                {/*
                                        <Chip className="d-flex justify-content-center"
                                              label={this.state.error}
                                              color="secondary"
                                              variant="outlined"
                                              deleteIcon={<DoneIcon/>}
                                        />
                                        */}

                                {/* <Button onClick={this.error}>press</Button> */}
                                <Card.Text className="d-flex justify-content-center"> </Card.Text>
                                <Form>

                                    <Form.Group>

                                        <Form.Group>

                                            <p>{this.error}</p>

                                            <Form.Label className="mr-sm-2"><FormattedHTMLMessage id="login.email"
                                                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                                  description="Welcome header on app main page"
                                                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                required
                                                name="email"
                                                type="text"
                                                placeholder="Username"
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                               />

                                        </Form.Group>


                                        <Form.Label className="mr-sm-2"> <FormattedHTMLMessage id="login.password"
                                                                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                               description="Welcome header on app main page"
                                                                                               values={{what: 'react-intl'}}/> </Form.Label>


                                        <Form.Group>
                                            <Form.Control
                                                required
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                onChange={this.handleChange}
                                                value={this.state.password}
                                               />
                                        </Form.Group>
                                    </Form.Group>


                                    <Form.Group>
                                        <Row>
                                            <Col lg="6">
                                        <Button variant="outline-info" onClick={this.handleLoginRequest}><FormattedHTMLMessage id="login.Login"
                                                                                                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                                                               description="Welcome header on app main page"
                                                                                                                               values={{what: 'react-intl'}}/></Button>
                                            </Col>
                                            <Col lg="4">
                                        <Button variant="outline-info" onClick={this.handleSwitch}><FormattedHTMLMessage id="login.SignUp"
                                                                                                                         defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                                                         description="Welcome header on app main page"
                                                                                                                         values={{what: 'react-intl'}}/></Button>
                                            </Col>
                                        </Row>
                                    </Form.Group>


                                </Form>


                            </Card.Body>

                    </Card>

                :


                    <Col lg="6">
                    <Card>
                        <Register parentCallback={this.callbackFunction}/>
                    </Card>
                    </Col>

                }





                </div>
                    </Col>




            </Row>



            </div>





        );

    }
}



