import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default class Nav extends React.Component {
    render() {
        return (
            <Form> {/*start of form*/}

                <Form.Row>
                    <Form.Group as={Col} controlId="FirstName"> {/* group 1, basic information */ }
                        { /* <Form.Label>First Name</Form.Label> */ }
                        <Form.Control type="firstname" placeholder="First Name"/>

                        {/*<Form.Label>Last Name</Form.Label> */ }
                        <Form.Control type="lastname" placeholder="Last Name"/>

                        <Form.Control type="orgname" placeholder="Organization Name"/>

                        <Form.Control type="function" placeholder="Your Role"/>

                    </Form.Group>



                    <Form.Group as={Col} controlId="Function">
                        <Form.Label>Function</Form.Label>

                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>



                {/*group 2*/}
                <Form.Group controlId="BusinessName">
                    <Form.Control type="business" placeholder="business name"/>
                    <Form.Group controlId="BusinessAddress">

                    <Form.Control type="address" placeholder="Quebec address"/>
                    <Form.Control type="city" placeholder="city"/>
                    <Form.Control type="PostalCode" placeholder="Postal Code"/>


                    <Form.Check type="checkbox" label="different corporate address"/>
                    <Form.Control type="address2" placeholder="corporate address"/>

                    </Form.Group>
                </Form.Group>


                <Form.Group>
                    <Form.Check type= "radio" label={'PME Manufacturiere'} />
                    <Form.Check type="radio" label={'TPE Manufacturiere'} />
                    <Form.Check type="radio" label={'TPE Manufacturiere'} />
                </Form.Group>









            </Form> /*End of form*/
        );
    }
}
