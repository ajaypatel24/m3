import React from 'react';
<<<<<<< HEAD
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import LoggedIn from "./LoggedIn";
=======
import {Button, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import SideNavigation from './NavComponents/SideNavigation';


>>>>>>> master
import '../../sass/navstyle.css'
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';

const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");


/**
 * Main navbar placed at top of page, conditional rendering
 * has clickable name to log in and out
 *
 */
export default class Navigation extends React.Component {


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
        };


        console.log(sessionStorage.getItem('authenticated'));

        this.handleChange = this.handleChange.bind(this);
        //this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


<<<<<<< HEAD


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


=======
    /**
     * test method to see who is logged in
     * @constructor
     */
>>>>>>> master
    VerifyUser = () => {


        console.table([
            (sessionStorage.getItem('authenticated')),
            (sessionStorage.getItem('UID')),
            (this.state.authenticated)]
        )


    }


<<<<<<< HEAD
=======
    /**
     * handles login request using firebase to check credentials, if firebase
     * approves of the login, then a UID is assigned which allows the user
     * to access their data on the website
     */


>>>>>>> master
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

<<<<<<< HEAD
=======


    /**
     * testing submit on clicking enter
     * @param e
     */
>>>>>>> master
    handleKeyPress(e) {
        let currentComponent = this
        if (e.key === 'Enter') {
            console.log('test');
            currentComponent.handleLoginRequest;
        }

    }


<<<<<<< HEAD
=======
    /**
     * handles logout request with firebase, on logout
     * the session is terminated and use can no longer
     * access their account or any other account as they
     * are redirected to the home page
     */
>>>>>>> master
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


<<<<<<< HEAD
    render() {
=======
        return (

            /** Begin Navbar */
>>>>>>> master

            <Navbar bg="light" variant="light" expand="lg" className="navigation">
                {this.state.authenticated === 'true' ?
                    <SideNavigation/>
                    :
                    null
                }

<<<<<<< HEAD

            <Navbar bg="light" variant="light" /*sticky="top"*/ className="navigation">
=======
>>>>>>> master
                <Navbar.Brand href="#home">
                    <img
                        src={window.location.origin + "/img/cadet_logo.svg"}
                        width="65"
                        height="65"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                </Navbar.Brand>
<<<<<<< HEAD
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/profile">Features</Nav.Link>
                    <Nav.Link href="#/prestart_questions">Pricing</Nav.Link>
                    <Nav.Link onClick="document.getElementById('signup').scrollIntoView();">Sign Up</Nav.Link>
                    <Nav.Link href="#/predata">Contact Us</Nav.Link>
                </Nav>


                {this.state.authenticated != 'true' ?
                    <Form inline>
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
=======
>>>>>>> master

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/profile">Features</Nav.Link>
                        <Nav.Link href="#/prestart_questions">Pricing</Nav.Link>
                        <Nav.Link onClick="document.getElementById('signup').scrollIntoView();">Sign Up</Nav.Link>
                        <Nav.Link href="#/data">Contact Us</Nav.Link>
                    </Nav>
                    {/** End always rendered section */}

<<<<<<< HEAD

                    <Navbar.Collapse className="justify-content-end" inline>
                        <LoggedIn />
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
=======
                    {/** Begin conditional section, condition: authenticated or not
                     if authenticated === false */}



                    {/*
                    {sessionStorage.getItem('authenticated') != 'true' ?
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

                        : /**if authenticated === true */



                        <Navbar.Collapse className="justify-content-end" inline>
                            <Avatar>{this.state.name}</Avatar>
                            <Navbar.Text>
                                <NavDropdown id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/Contact">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#/Team">Team</NavDropdown.Item>
                                    <NavDropdown.Item href="#/action3.2">hihi</NavDropdown.Item>

                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Text>

                        </Navbar.Collapse>

                    }
                </Navbar.Collapse>
>>>>>>> master
            </Navbar>


        );

    }
}



