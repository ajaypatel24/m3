import React from 'react';
import {Navbar, Form, Button} from "react-bootstrap";
import Login from "../nav-forms/Login";

export default class Nav extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
            showLogin: false,
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


    render()
    {
        return (
            <Navbar className="d-flex justify-content-between" bg="light" expand="lg">
                <Navbar.Brand className="ml-3" href="#home">
                    <img
                        src={window.location.origin + "/img/cadet_logo.svg"}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Cadet Logo"
                    />
                </Navbar.Brand>
                <Form className="mr-3" inline>
                    <Button className="login-btn-color" onClick={()=>{this.handleOpenLogin()}}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                    <Login handleClose={this.handleCloseLogin} show={this.state.showLogin}/>
                    <span className="ml-2"/>
                    <Button className="signup-btn-color"><i className="fas fa-user-plus"/><span className="ml-1">Sign Up</span></Button>
                </Form>
            </Navbar>
        );
    }
}
