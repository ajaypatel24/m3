import React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends React.Component
{
    render()
    {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header className="d-flex justify-content-center">
                    <h3>Login</h3>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <i className="fas fa-user"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
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
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant='danger' onClick={() => {
                        this.props.handleClose()
                    }}>Close</Button>
                    <Button variant='success' onClick={() => {
                        this.props.handleClose()
                    }}>Login</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}