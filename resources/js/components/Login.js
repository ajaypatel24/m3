import React from 'react';
import {FormControl, InputGroup, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {login} from "./UserFunctions";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailAndPasswordShow: 'd-none',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    }

    handleError = () => {
        this.setState({
            emailAndPasswordShow: 'd-flex justify-content-center'
        });
    };

    revertError = () => {
        this.setState({
            emailAndPasswordShow: 'd-none'
        })
    };

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

        }).catch((error) => {
            console.log(error);
        });

    }


    handleLoginRequest = () => {
        console.log("hello");
        /*



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
                        window.location.href = '#/profile/';
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






        */

    };




    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name);
        console.log(e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log("success");
        login(user).then(res => {
            if (res) {
                this.props.history.push('/profile')

            }
        })


    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <ModalHeader/>
                <ModalBody handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange}/>
                <ModalFooter handleLoginRequest={this.props.handleLoginRequest}
                             emailAndPasswordShow={this.state.emailAndPasswordShow}
                             handleClose={this.props.handleClose}/>
            </Modal>
        );
    }
}

class ModalHeader extends React.Component {
    render() {
        return (
            <Modal.Header className="d-flex justify-content-center">
                <h3>Login</h3>
            </Modal.Header>
        );
    }
}


class ModalBody extends React.Component {
    render() {
        return (
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <i className="fas fa-user"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.email}
                        onChange={this.props.handleChange}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon2">
                            <i className="fas fa-key"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <span className="d-flex justify-content-between mx-1">
                        <span>
                            <input type="checkbox"/>
                            <span className="ml-2">Remember me</span> <br/>
                        </span>
                        <Link to='/forgot_password'> Forgot your password? </Link>
                    </span>
                <span className={"red-text ".concat(this.props.emailAndPasswordShow)}>Your email and password don't match</span>

            </Modal.Body>

        );
    }
}

class ModalFooter extends React.Component {
    render() {
        return (
            <Modal.Footer className="d-flex justify-content-between">
                <Button variant='danger' onClick={() => {
                    this.props.handleClose();
                }}>Close</Button>
                <Button  onClick={() => {
                    this.handleLoginRequest()
                }}
                >Login</Button>
            </Modal.Footer>
        )
}

}