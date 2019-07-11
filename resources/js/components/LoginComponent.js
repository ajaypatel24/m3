import React from 'react';
import {Button, Form, Nav, Navbar, NavDropdown, Card, Row, Col} from 'react-bootstrap';
import SideNavigation from './NavComponents/SideNavigation';


import '../../sass/navstyle.css'
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Person from "@material-ui/core/SvgIcon/SvgIcon";
import Register from "./Authentication/Register";



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
            LoginOrSignUp: true,
        };


        console.log(sessionStorage.getItem('authenticated'));

        this.handleChange = this.handleChange.bind(this);
        //this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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


            <Row>

                <Col lg="8" sm="4">
                    <img
                        src={window.location.origin + "/img/IE_logo.svg"}
                        width="600"
                        height="400"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />

                </Col>

            <Col lg="4" sm="8">
                {this.state.LoginOrSignUp ?
                <Card>
                    <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />Sign Up</Card.Header>
                    <Card.Img variant="top" src={window.location.origin + "/img/IE_logo.svg"} />
                    <Card.Body>
                        <Form>
                            <br/>
                            <br/>

                            <Form.Group>
                                <Form.Label className="mr-sm-2">Sign In</Form.Label>
                                <Form.Group>


                                <Form.Control
                                required
                                name="email"
                                type="text"
                                placeholder="Username"
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
                                onChange={this.handleChange}
                                value={this.state.password}
                                onKeyPress={this.handleKeyPress}/>
                                </Form.Group>
                            </Form.Group>

                            <Form.Group>
                                <Button variant="outline-info" onClick={this.handleLoginRequest}>Login</Button>
                            </Form.Group>


                        </Form>


                    </Card.Body>
                </Card>

                :


                <Register/>
                }

                <Form>
                    <Form.Group>
                    {this.state.LoginOrSignUp ?
                        <container>
                            <Button variant="outline-info" onClick={this.handleLoginRequest}>Login</Button>
                            <Button variant="outline-primary" onClick={this.handleSwitch}>Sign Up</Button>
                        </container>

                        :

                        <container>
                            <Button variant="outline-info" onClick={this.handleLoginRequest}>Login</Button>
                            <Button variant="outline-primary" onClick={this.handleSwitch}>Sign Up</Button>
                        </container>

                    }
                    </Form.Group>

                </Form>
                    </Col>


            </Row>





        );

    }
}



