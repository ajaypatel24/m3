import React from 'react';
import {Button, Form, Nav, Navbar, NavDropdown, InputGroup} from 'react-bootstrap';
import SideNavigation from './NavComponents/SideNavigation';
import SideNav from './NavComponents/Sidenav';
import {IntlProvider, FormattedHTMLMessage} from "react-intl";

import test from './NavComponents/test'

import '../../sass/navstyle.css'
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';

const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");


const Nav1 = <FormattedHTMLMessage id="Navigation.Nav1"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>
const Nav2 = <FormattedHTMLMessage id="Navigation.Nav2"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>
const Nav3 = <FormattedHTMLMessage id="Navigation.Nav3"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>
const Nav4 = <FormattedHTMLMessage id="Navigation.Nav4"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>
const Nav5 = <FormattedHTMLMessage id="Navigation.Nav5"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>

const Team = <FormattedHTMLMessage id="Navigation.Team"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>

const Logout = <FormattedHTMLMessage id="Navigation.Logout"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>
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
            initial: this.getInitial(),
            isLoading: true,
            ToggleNav: this.props.select,
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

    sendData = () => {
        console.log(this.props.handleDrawerToggle);
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

    getInitial = () => {
        let id = sessionStorage.getItem('UID');
        axios.get('/initial/' + id)
            .then(response => {
                this.setState({initial: response.data})
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

            <Navbar bg="light" variant="light" expand="lg" className="navigation">
                {/*
                {this.state.authenticated === 'true' ?
                    <SideNavigation/>
                    :
                    null
                }
                */}

                <Navbar.Brand href="#home">
                    {/* <Button onClick={this.sendData}>test</Button> */}
                    <img
                        src={window.location.origin + "/img/cadet_logo.svg"}
                        width="27"
                        height="27"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#/">{Nav1}</Nav.Link>
                        <Nav.Link href="#/profile">{Nav2}</Nav.Link>
                        <Nav.Link href="#/prestart_questions">{Nav3}</Nav.Link>
                        <Nav.Link onClick="document.getElementById('signup').scrollIntoView();">{Nav4}</Nav.Link>
                        <Nav.Link href="#/aboutus">{Nav5}</Nav.Link>
                    </Nav>
                    {/** End always rendered section */}

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
                            <Avatar>{this.state.initial}</Avatar>
                            <Navbar.Text>
                                <NavDropdown id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/Contact">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#/Team">{Team}</NavDropdown.Item>
                                    <NavDropdown.Item href="#/action3.2">h</NavDropdown.Item>

                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={this.handleLogout}>{Logout}</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Text>

                        </Navbar.Collapse>

                    }
                </Navbar.Collapse>
            </Navbar>


        );

    }
}



