import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Multiselect from 'multiselect-dropdown-react';

const data = [{
    name: 'Agriculture, foresterie, peche et chasse',
    value: 'SCIAN 11'
},
    {
        name: 'Extraction miniere et extracion de petrole et de gaz',
        value: 'SCIAN 21'
    },
    {
        name: 'Services publics',
        value: 'SCIAN 22'
    },
    {
        name: 'Construction',
        value: 'SCIAN 23'
    },
    {
        name: 'Fabrication',
        value: 'SCIAN 31-33'
    },
    {
        name: 'Commerce de gros',
        value: 'SCIAN 41'
    },
    {
        name: 'Commerce de détail',
        value: 'SCIAN 44-45'
    },
    {
        name: 'Transport et entreposage',
        value: 'SCIAN 48-49'
    },
    {
        name: 'Industrie de l\'information et industrie culturelle',
        value: 'SCIAN 51'
    },
    {
        name: 'Finance et assurances',
        value: 'SCIAN 52'
    },
    {
        name: 'Services d\'immobiliers et services de location et de location à bail',
        value: 'SCIAN 53'
    },
    {
        name: 'Services professionnels, scientifiques et techniques',
        value: 'SCIAN 54'
    },
    {
        name: 'Gestion de sociétés et d\'entreprises',
        value: 'SCIAN 55'
    },
    {
        name: 'Services administratifs, services de soutien, services de gestion de déchets et services d\'assainissement',
        value: 'SCIAN 56'
    },
    {
        name: 'Soins de santé et assistance sociale',
        value: 'SCIAN 62'
    },
    {
        name: 'Arts, spectacles et loisirs',
        value: 'SCIAN 71'
    },
    {   name: 'Hébergement et services de restauration',
        value: 'SCIAN 72'
    },
    {
        name: 'Autres services – sauf les administrations publiques',
        value: 'SCIAN 81'
    },];

export default class Nav extends React.Component {
    result(params) {
        console.log(params);
    }
    render() {
        return (
            <Form onSubmit={console.log("hi")}> {/*start of form*/}

                <Form.Row>
                    <Col sm="5">
                    <Form.Group as={Col} controlId="FirstName"> {/* group 1, basic information */ }
                        { /* <Form.Label>First Name</Form.Label> */ }
                        <Form.Control type="firstname" placeholder="First Name"/>

                        {/*<Form.Label>Last Name</Form.Label> */ }
                        <Form.Control type="lastname" placeholder="Last Name"/>

                        <Form.Control type="orgname" placeholder="Organization Name"/>

                        <Form.Control type="function" placeholder="Your Role"/>

                    </Form.Group>
                    </Col>



                </Form.Row>

                <Col sm="5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </Col>

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
                    <Form.Label>Type of Business</Form.Label>
                    <Form.Check type= "radio" label={'PME Manufacturiere'} />
                    <Form.Check type="radio" label={'TPE Manufacturiere'} />
                    <Form.Check type="radio" label={'Entreprise en Distribution'} />
                    <Form.Check type="radio" label={'Entreprise de Services'} />
                    <Form.Check type="radio" label={'autre'} />

                </Form.Group>

                <Form.Group> { /*SCIAN code */}

                    <Form.Label>Sectors of Activity</Form.Label>
                    <Form.Text className="text-muted">
                        Select 1 or multiple
                    </Form.Text>
                    <Multiselect options={data} onSelectOptions={this.result}/>




                </Form.Group>

                <Form.Group>
                <Form.Label>How is the business classed</Form.Label>
                <Form.Check type= "radio" label={'Société par actions'} />
                <Form.Check type="radio" label={'Entreprise individuelle'} />
                <Form.Check type="radio" label={'Société en nom collectif'} />
                <Form.Check type="radio" label={'Coopérative'} />
                <Form.Check type="radio" label={'Organisme sans but lucratif'} />
                <Form.Check type="radio" label={'autre'} />


                </Form.Group>

                <Form.Group>

                <Form.Label>Number of employees at (var company name)</Form.Label>


                </Form.Group>



                <Form.Group>
                    <Form.Label>Does your business have committee working towards sustainable development
                    </Form.Label>
                    <Form.Check type="radio" label={'Yes'}  />
                    <Form.Check type="radio" label={'No'} />
                </Form.Group>






            </Form> /*End of form*/
        );
    }
}
