import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown, Row, Col} from 'react-bootstrap';

import '../../sass/navstyle.css'
import axios from "axios";


const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");


export default class Navigation extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            showLogin: false,
            loggedIn: false,
            email: '',
            password: '',
            authenticated: localStorage.getItem('authenticated'),
            redirect: false,
            name: localStorage.getItem('name'),
            isLoading: true,
        };


        console.log(localStorage.getItem('authenticated'));

        this.handleChange = this.handleChange.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleSignUpRequest = this.handleSignUpRequest.bind(this);
    }




    /*
        componentWillMount = () => {
            firebase.auth().onAuthStateChanged((user) =>
                if (user) {
                    this.setState({
                        authenticated: true
                    })
                } else {
                    this.setState({
                        authenticated: false
                    })
                }

            })
        }


*/


    VerifyUser = () => {


        console.table([
            (localStorage.getItem('authenticated')),
            (localStorage.getItem('UID')),
            (this.state.authenticated)]
        )


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

                        localStorage.setItem('authenticated', 'true');
                        localStorage.setItem('UID', uid);
                        currentComponent.getName();
                        currentComponent.setState({authenticated: localStorage.getItem('authenticated')});

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

    handleKeyPress(e) {
        let currentComponent = this
        if (e.key === 'Enter') {
            console.log('test');
            currentComponent.handleLoginRequest;
        }

    }


    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log(firebase.auth().currentUser);
        });

        console.log(this.state.authenticated);
        window.location.href = '#/';
        localStorage.setItem('authenticated', 'false');
        localStorage.removeItem('UID');
        localStorage.removeItem('name');
        this.setState({authenticated: false});

    }

    componentWillUnmount = () => {
        window.onbeforeunload = function () {
            localStorage.removeItem('UID');
            localStorage.removeItem('authenticated');
        };


    }

    getName = () => {

        let id = localStorage.getItem('UID');
        axios.get('/name/' + id)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('name', response.data);
                this.setState({name: response.data});
            });

    }


    handleSignUpRequest = () => {

        console.log("here");

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                let uid = firebase.auth().currentUser.uid;
                console.log(uid);
                console.log(firebase.auth().currentUser.email);
                fetch('/register', {
                    method: 'POST',
                    body: JSON.stringify(uid),
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
            }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            // ...
        });


        document.getElementById("registerform").reset();


    };

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };


    handleOpenLogin = () => {
        this.setState({
            showLogin: true
        });
    };

    handleCloseLogin = () => {
        this.setState({
            showLogin: false
        });
    };

    loginSuccess = () => {
        this.setState({
            loggedIn: true
        });
    };

    logout() {
        this.setState({authenticated: false})
    }


    render() {

        return (

            <Navbar bg="light" variant="light" expand="lg"/*sticky="top"*/ className="navigation">
                <Navbar.Brand href="#home">
                    <img
                        src={window.location.origin + "/img/cadet_logo.svg"}
                        width="65"
                        height="65"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/profile">Features</Nav.Link>
                        <Nav.Link href="#/prestart_questions">Pricing</Nav.Link>
                        <Nav.Link onClick="document.getElementById('signup').scrollIntoView();">Sign Up</Nav.Link>
                        <Nav.Link href="#/predata">Contact Us</Nav.Link>
                    </Nav>

                    {this.state.authenticated != 'true' ?
                        <Form inline>
                            <br/>
                            <br/>

                            <Form.Label className="mr-sm-2">Sign In</Form.Label>

                            <Form.Control
                                required
                                name="email"
                                type="text"
                                placeholder="Username"
                                className="mr-sm-2"
                                onChange={this.handleChange}
                                value={this.state.email}
                                onKeyPress={this.handleKeyPress}/>

                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="mr-sm-2"
                                onChange={this.handleChange}
                                value={this.state.password}
                                onKeyPress={this.handleKeyPress}/>

                            <Button variant="outline-info" onClick={this.handleLoginRequest}>Login</Button>

                        </Form>

                        :

                        <Navbar.Collapse className="justify-content-end" inline>
                            <Navbar.Text>
                                <NavDropdown title={this.state.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/Contact">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Logou</NavDropdown.Item>
                                    <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Text>
                        </Navbar.Collapse>

                    }
                </Navbar.Collapse>
            </Navbar>


        );

    }
}



