import React from 'react';
import {Button, Form, Nav, Navbar, NavDropdown, Card, Row, Col, FormGroup} from 'react-bootstrap';
import SideNavigation from './NavComponents/SideNavigation';
import Particles from 'react-particles-js';


import '../../sass/navstyle.css'
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Register from "./Authentication/Register";
import SignIn from "./Authentication/SignIn"



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
                    <img
                        style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}
                        src={window.location.origin + "/img/ecosystem.svg"}
                        width="300"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />

                </Col>


            <Col lg="8" sm="8">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                {!this.state.LoginOrSignUp ?
                    <Card>

                            <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />Sign In</Card.Header>
                            <Card.Img variant="top" src={window.location.origin + "/img/IE_logo.svg"} width="147" height="147"/>
                            <Card.Body>
                                <Card.Text className="d-flex justify-content-center"> Welcome back, please sign in </Card.Text>
                                <Card.Text className="d-flex justify-content-center"> </Card.Text>
                                <Form>
                                    <br/>
                                    <br/>

                                    <Form.Group>

                                        <Form.Group>


                                            <Form.Label className="mr-sm-2">Email</Form.Label>
                                            <Form.Control
                                                required
                                                name="email"
                                                type="text"
                                                placeholder="Username"
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                               />

                                        </Form.Group>

                                        <Form.Label className="mr-sm-2">Password</Form.Label>
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
                                        <Button variant="outline-info" onClick={this.handleLoginRequest}>Login</Button>
                                            </Col>
                                            <Col lg="4">
                                        <Button variant="outline-info" onClick={this.handleSwitch}>Sign Up</Button>
                                            </Col>
                                        </Row>
                                    </Form.Group>


                                </Form>


                            </Card.Body>

                    </Card>

                :

                    <Card>
                        <Register parentCallback={this.callbackFunction}/>
                    </Card>
                }





                </div>
                    </Col>




            </Row>



            </div>





        );

    }
}



