import React from 'react';
import {Navbar, Form, Button, NavDropdown } from "react-bootstrap";

//import Login from "../forms/Login";
import {Route} from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'


import Login from "../auth/Login";
import {login} from "../auth/UserFunctions";


export default class Nav extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
            showLogin: false,
            loggedIn: false
        };
    }

    handleOpenLogin = () => {
        this.setState({
            showLogin: true
        });
    };

    handleCloseLogin = () => {
      this.setState({
          showLogin:false
      });
    };

    loginSuccess = () => {
        this.setState({
            loggedIn: true
        });
    };

    toSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }



        login(newUser).then(res => {
            window.location.href = '/profile/';
            console.log("registration");
        })


    }

    render()
    {

        return (

            <Navbar className="d-flex justify-content-between" bg="light" variant="light" expand="lg">
                <Navbar.Brand className="ml-3" href="/">
                    <img
                        src={window.location.origin + "/img/cadet_logo.svg"}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                </Navbar.Brand>



                <a href="#">External Links</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>



                <Form className="mr-3" inline>
                    <Button className="login-btn-color" onClick={()=>{this.handleOpenLogin()}}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                    <Login handleClose={this.handleCloseLogin} show={this.state.showLogin}/>
                </Form>
            </Navbar>


        );

        if(!this.state.loggedIn) {
            return (
                <Navbar className="d-flex justify-content-between" bg="light" expand="lg">
                    <Navbar.Brand className="ml-3" href="/">
                        <img
                            src={window.location.origin + "/img/cadet_logo.svg"}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Cadet Logo"
                        />
                    </Navbar.Brand>
                    <Form className="mr-3" inline>
                        <Button className="login-btn-color" onClick={() => {
                            this.handleOpenLogin()
                        }}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                        <Login handleClose={this.handleCloseLogin} show={this.state.showLogin} loginSuccess={this.handleSubmit}/>
                    </Form>
                </Navbar>
            );
        }else{
            return(
                <Navbar className="d-flex justify-content-between" bg="light" expand="lg">
                    <Navbar.Brand className="ml-3" href="/">
                        <img
                            src={window.location.origin + "/img/cadet_logo.svg"}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Cadet Logo"
                        />
                    </Navbar.Brand>
                    <span className="mr-3">Welcome </span> // not done
                </Navbar>
            );
        }

    }
}
