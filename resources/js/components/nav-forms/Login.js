import React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailAndPasswordShow: 'd-none'
        }
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

    handleLoginRequest = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
        };

        fetch('/', {
            method: 'POST',
            body: JSON.stringify(data),
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
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render()
    {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <ModalHeader />
                <ModalBody handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange}/>
                <ModalFooter handleLoginRequest={this.handleLoginRequest} emailAndPasswordShow={this.state.emailAndPasswordShow} handleClose={this.props.handleClose}/>
            </Modal>
        );
    }
}

class ModalHeader extends React.Component{
    render(){
        return(
            <Modal.Header className="d-flex justify-content-center">
                <h3>Login</h3>
            </Modal.Header>
        );
    }
}


class ModalBody extends React.Component{
    render(){
        return(
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <i className="fas fa-user"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.email}
                        onChange={this.props.handleEmailChange}
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
                        onChange={this.props.handlePasswordChange}
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

class ModalFooter extends React.Component{
    render(){
        return(
            <Modal.Footer className="d-flex justify-content-between">
                <Button variant='danger' onClick={() => {
                    this.props.handleClose();
                }}>Close</Button>
                <Button variant='success' onClick={() => {
                    this.props.handleLoginRequest();
                }}>Login</Button>
            </Modal.Footer>
        );
    }
}

