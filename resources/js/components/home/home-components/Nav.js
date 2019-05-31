import React from 'react';
import {Navbar, Form, Button} from "react-bootstrap";
import Login from "../auth/Login";

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

    render()
    {
        if(!this.state.loggedIn) {
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
                        <Button className="login-btn-color" onClick={() => {
                            this.handleOpenLogin()
                        }}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                        <Login handleClose={this.handleCloseLogin} show={this.state.showLogin} loginSuccess={this.loginSuccess}/>
                    </Form>
                </Navbar>
            );
        }else{
            return(
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
                    <span className="mr-3">Welcome </span> // not done
                </Navbar>
            );
        }
    }
}
