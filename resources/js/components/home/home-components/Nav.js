import React from 'react';
import {Navbar, Form, Button, NavDropdown } from "react-bootstrap";
import {HashRouter, Link, Redirect} from "react-router-dom"

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
            password: '',
            authenticated: localStorage.getItem('authenticated'),
            redirect: false,
        };


        console.log(localStorage.getItem('authenticated'));

        this.handleChange = this.handleChange.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleSignUpRequest = this.handleSignUpRequest.bind(this);
    }


/*
    componentWillMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
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


    authListener = () => {

    }


    VerifyUser = () => { //retrieves unique UID

        //firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(user) {

         /*
        }).catch(function(error) {
            console.log("no one logged in");
        });

        let uid = firebase.auth().currentUser.uid;
        let user = firebase.auth().currentUser.email;
        this.setState({authenticated: true});
        console.log(uid);
        console.log(user);
        */
        console.table([
            (localStorage.getItem('authenticated')),
            (localStorage.getItem('UID')),
            (this.state.authenticated)]
        )


    }


    handleLoginRequest = () => {


        let currentComponent = this

        document.getElementById("registerform").reset();
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
                        currentComponent.setState({authenticated: true});

                        setTimeout(function() {window.location.href = '#/profile/';}, 20)
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

    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log(firebase.auth().currentUser);
        }) ;

        console.log(this.state.authenticated);
        window.location.href = '#/';
        localStorage.setItem('authenticated', 'false');
        localStorage.removeItem('UID');
        this.setState({authenticated: false});

    }

    componentWillUnmount = () => {
        window.onbeforeunload = function () {
            localStorage.removeItem('UID');
            localStorage.removeItem('authenticated');
        };


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
          showLogin:false
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


    render()
    {

        if(this.state.redirect === true) {
            return <Redirect to='/prestart_questions/'/>
        }


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

                <Link to="/prestart_questions/" replace>Prestart Question</Link>
                <Link to="/profile" replace>Main Page</Link>
                <Link to="/l" replace>Contact Us</Link>




                <button onClick={this.VerifyUser}>Verify</button>


                    {this.state.authenticated === 'true' ?


                        <div>
                        <span>Welcome back</span>
                            <button onClick={this.handleLogout}>Logout</button>



                        </div>


                        :
                        /* start not logged in section */

                        <div>
                        <form id="registerform">
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
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}/>


                        </form>

                            <Button type="submit" onClick={this.handleLoginRequest} >login</Button>
                            <Button className="pt-button pt-intent-primary">Login with Google</Button>
                        </div>
                    }





                <Form className="mr-3" inline>
                    <Button className="login-btn-color" onClick={()=>{this.handleOpenLogin()}}><i className="fas fa-sign-in-alt"/><span className="ml-1">Log In</span></Button>
                    <Login handleClose={this.handleCloseLogin} show={this.state.showLogin}/>
                </Form>

            </Navbar>


        );


    }
}
