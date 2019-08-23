import React from 'react';
import {Button, Form, Nav, Navbar, NavDropdown, DropdownButton, Dropdown, ButtonToolbar, SplitButton} from 'react-bootstrap';


import {IntlProvider, FormattedHTMLMessage} from "react-intl";

import test from './NavComponents/RealSideNav'

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
                        console.log('Request succeeded with JSON response');


                    })
                    .catch(function (error) {
                        console.log('Request failed', error);
                    });


            }).catch(function (error) {
            // Handle Errors here.
            if (error.code === 400) {
                console.log("400")
            }

        });




    };


    /**
     * testing submit on clicking enter
     * @param e
     */
    handleKeyPress(e) {
        let currentComponent = this
        if (e.key === 'Enter') {

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

        });


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
                        <Nav.Link href="#/null">{Nav1}</Nav.Link>
                        <Nav.Link href="#/null1">Forms</Nav.Link>
                        <Nav.Link href="#/null2">{Nav3}</Nav.Link>
                        <Nav.Link href="#/null3">Data</Nav.Link>
                        <Nav.Link href="#/null4">{Nav5}</Nav.Link>
                    </Nav>









                </Navbar.Collapse>

                {/**
                 Non Utilisé
                 */}
                {/*

                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Navbar.Text>
                        <NavDropdown id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/Contact">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#/Team">{Team}</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={this.handleLogout}>{Logout}</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>



                </Navbar.Collapse>

                */}

                <ButtonToolbar>

                        <DropdownButton
                            drop='left'
                            variant="secondary-outline"
                            title=''
                            id={`dropdown-button-drop-left`}
                            key='left'
                        >
                            <Dropdown.Item href="#/Contact">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/Team">Équipe</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={this.handleLogout}>{Logout}</Dropdown.Item>
                        </DropdownButton>
                    <Avatar>{this.state.initial}</Avatar>
                </ButtonToolbar>
            </Navbar>


        );

    }
}



