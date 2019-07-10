import React from 'react';
import {Col, Container, Jumbotron, Row, Button, Card, Form} from 'react-bootstrap';
import SignUpForm from './Authentication/Register';
import SignIn from './Authentication/SignIn';


import '../../sass/test.css'
import Person from "@material-ui/core/SvgIcon/SvgIcon";

const width = '22rem';

let element = document.getElementById("signup");


/**
 * Home page users see before they login, Introduction to the service including an explanation of
 * some key concepts (maybe)
 */



export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            LoginOrSignup: true,
            email: '',
            password: '',

        };


            this.handleSwitch = this.handleSwitch.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleLoginRequest = this.handleLoginRequest.bind(this);
    }



    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLoginRequest(e) {

        e.preventDefault;
        let currentComponent = this


        console.table([
            this.state.email,
            this.state.password
        ]);



        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)


            .then(function (user) {


                let uid = firebase.auth().currentUser.uid;



                console.log("eyyo");
                console.log(uid); //important, exclusive Uid that will be used to identify user
                console.log(user.data);

                console.log('this happens');
                sessionStorage.setItem('authenticated', 'true');
                console.log('this happens2');
                sessionStorage.setItem('UID', uid);
                console.log('this happens3');





                /*
                    setTimeout(function () {
                        window.location.href = '#/profile/';
                        window.location.reload();
                    }.bind(this), 40)

                 */

                console.log('this happens4');

                //currentComponent.setState({authenticated: sessionStorage.getItem('authenticated')});


                console.log('Request succeeded with JSON response', data);

                console.log('Request succeeded with JSON response', user);

                console.log(sessionStorage.getItem('authenticated'));






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


        console.log('from login');

    };


    handleSwitch = () => {
        this.setState({LoginOrSignup: !this.state.LoginOrSignup})
        console.log(this.state.Delete);
    }



    render() {
        return (
            <Container className="mt-4">


                <Row>
                    <Col lg="8">
                        <img
                            src={window.location.origin + "/img/IE_logo.svg"}
                            width="700"
                            height="500"
                            className="d-inline-block align-top"
                            alt="EcoSystemIE Logo"
                        />
                    </Col>
                    <Col lg="4">

                        <Card>
                            <Card.Header className="d-flex justify-content-center login-btn-color-font"><Person />Sign In</Card.Header>
                            <Card.Body>
                                <form method="post">
                                    { this.state.LoginOrSignup ?
                                    <Form.Group>
                                        <Form.Label className="mr-sm-2">Sign In</Form.Label>

                                        <Form.Group>
                                            <Form.Control
                                                required
                                                name="email"
                                                type="text"
                                                placeholder="Username"
                                                className="mr-sm-2"
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
                                                className="mr-sm-2"
                                                onChange={this.handleChange}
                                                value={this.state.password}
                                                onKeyPress={this.handleKeyPress}/>
                                        </Form.Group>
                                        <Button variant="outline-info" type="submit" onClick={this.handleLoginRequest}>Login</Button>
                                    </Form.Group>
                                        :
                                        <SignUpForm />

                                        }
                                </form>

                                <Button onClick={this.handleSwitch}>Switch</Button>
                            </Card.Body>
                        </Card>




                    </Col>



                </Row>




            </Container>
        );
    }
}


