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
            loggedIn: false,
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
          showLogin:false
      });
    };

    loginSuccess = () => {
        this.setState({
            loggedIn: true
        });
    };

    handleSubmit(e) {

        const data = this.state;
        e.preventDefault();

        console.log(data);
        const newUser = {
            "email": this.state.email,
            "password": this.state.password
        }

        login(newUser).then(response => {
            if (response.status === 200) {
                console.log(localStorage.getItem('usertoken'));
            }
            else {
                console.log(response.status);
                console.log("bad login");
            }

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



                <Form.Group>
                    <Form.Control
                        name="email"
                        required
                        type="text"
                        placeholder="Login"
                        onChange={this.handleChange}
                        value={this.state.email}/>
                    <Form.Control
                        name="password"
                        required
                        type="text"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}/>
                        <Button type="submit" onClick={this.handleSubmit}/>



                </Form.Group>
                <Form className="mr-3" inline>
                    <Button className="login-btn-color" onClick={()=>{this.handleOpenLogin()}}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                    <Login handleClose={this.handleCloseLogin} show={this.state.showLogin}/>
                </Form>
            </Navbar>


        );


        if(localStorage.getItem('usertoken') != null) {
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

                    <a href="#">test</a>
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
