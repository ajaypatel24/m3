import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';

import Select from 'react-select';


const data = [{
    label: 'Agriculture, foresterie, peche et chasse',
    value: 'SCIAN 11'
},
    {
        label: 'Extraction miniere et extracion de petrole et de gaz',
        value: 'SCIAN 21'
    },
    {
        label: 'Services publics',
        value: 'SCIAN 22'
    },
    {
        label: 'Construction',
        value: 'SCIAN 23'
    },
    {
        label: 'Fabrication',
        value: 'SCIAN 31-33'
    },
    {
        label: 'Commerce de gros',
        value: 'SCIAN 41'
    },
    {
        label: 'Commerce de détail',
        value: 'SCIAN 44-45'
    },
    {
        label: 'Transport et entreposage',
        value: 'SCIAN 48-49'
    },
    {
        label: 'Industrie de l\'information et industrie culturelle',
        value: 'SCIAN 51'
    },
    {
        label: 'Finance et assurances',
        value: 'SCIAN 52'
    },
    {
        label: 'Services d\'immobiliers et services de location et de location à bail',
        value: 'SCIAN 53'
    },
    {
        label: 'Services professionnels, scientifiques et techniques',
        value: 'SCIAN 54'
    },
    {
        label: 'Gestion de sociétés et d\'entreprises',
        value: 'SCIAN 55'
    },
    {
        label: 'Services administratifs, services de soutien, services de gestion de déchets et services d\'assainissement',
        value: 'SCIAN 56'
    },
    {
        label: 'Soins de santé et assistance sociale',
        value: 'SCIAN 62'
    },
    {
        label: 'Arts, spectacles et loisirs',
        value: 'SCIAN 71'
    },
    {
        label: 'Hébergement et services de restauration',
        value: 'SCIAN 72'
    },
    {
        label: 'Autres services – sauf les administrations publiques',
        value: 'SCIAN 81'
    },];


export default class Question extends React.Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        {/*handles submit */
        }
        this.state = {
            FirstName: "",
            LastName: "",
            Organization: "",
            Role: "",
            Email: "",
            Password: "",
            PasswordVerify: "",
            BusinessName: "",
            QuebecAddress: "",
            City: "",
            PostalCode: "",
            CorporateAddress: "",
            IncomeValue: "",
            SCIAN: "",
            EmployeeNumber: "",
            OfferToClient: "",


        };
    }

    handleSubmit(e) {
        e.preventDefault();


        const data = this.state;
        let h = Password === PasswordVerify;
        if (!h) {
            alert("Passwords do not match")
        }
        this.state.name;
        console.log(data);

    };

    handleChange(e) {
        { /* = e => */
        }


        this.setState({
            [e.target.name]: e.target.value
        });

        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    showHideDiv(corpAddress) {
        var box = document.getElementById("corpAddress");
        box.style.display = checkCorp.checked ? "block" : "none";

    }


    formValid() {
        const {
            FirstName, LastName, Organization, Role,
            Email, Password, BusinessName, QuebecAddress,
            City, PostalCode, CorporateAddress
        } = this.state;

        let g = FirstName && LastName && Organization && Role &&
            Email && Password && BusinessName && QuebecAddress &&
            City && PostalCode && CorporateAddress;
        let h = Password === PasswordVerify;
        if (!h) {
            alert("Passwords do not match")
        }
        console.log(g);
        return g && h
        //Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false);
    };


    render() {
        return (


            <form method="POST" action="/" onSubmit={this.handleSubmit}> {/*start of form*/}




                <Col sm="5">
                    <Form.Group controlId="Name"> {/* group 1, basic information */}
                        <Form.Row>
                            <Col lg="4">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control minlength="3" maxlength="15" name="FirstName" type="firstname"
                                              placeholder="First Name" onChange={this.handleChange}
                                              value={this.state.firstname}/>
                            </Col>
                            <Col lg="4">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control minlength="3" maxlength="15" name="LastName" type="lastname"
                                              placeholder="Last Name" onChange={this.handleChange}
                                              value={this.state.lastname}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Col>


                <Col sm="6">
                    <Form.Group>
                        <Form.Row>


                            <Col lg="4">
                                <Form.Label>Organization</Form.Label>
                                <Form.Control minlength="2" maxlength="15" name="Organization" type="orgname"
                                              placeholder="Organization Name" onChange={this.handleChange}
                                              value={this.state.Organization}/>

                                <Form.Label>Role</Form.Label>
                                <Form.Control maxlength="15" name="Role" type="function" placeholder="Your Role"
                                              onChange={this.handleChange} value={this.state.Role}/>
                            </Col>

                        </Form.Row>
                    </Form.Group>
                </Col>


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

                    <Form.Control name="Password" type="password" placeholder="Password" onChange={this.handleChange}
                                  value={this.state.Password}/>
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control name="PasswordVerify" type="password" placeholder="Verify Password"
                                  onChange={this.handleChange} value={this.state.PasswordVerify}/>

                </Form.Group>


                {/*group 2*/}

                <Form.Group controlId="BusinessInformation">
                    <Col sm="5">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control name="BusinessName" type="business" placeholder="Business Name"
                                      onChange={this.handleChange} value={this.state.BusinessName}/>
                        <Form.Group controlId="BusinessAddress">
                            <Form.Label>Quebec Address</Form.Label>
                            <Form.Control name="QuebecAddress" type="address" placeholder="Quebec address"
                                          onChange={this.handleChange} value={this.state.QuebecAddress}/>
                            <Form.Label>City</Form.Label>
                            <Form.Control name="City" type="city" placeholder="City" onChange={this.handleChange}
                                          value={this.state.City}/>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control name="PostalCode" type="PostalCode" placeholder="Postal Code"
                                          onChange={this.handleChange} value={this.state.PostalCode}/>


                            <Form.Check controlId="checkCorp" type="checkbox" label="different corporate address"/>
                            <Form.Control controlId="corpAddress" name="CorporateAddress" type="address2"
                                          placeholder="corporate address" onChange={this.handleChange}
                                          value={this.state.CorporateAddress}/>

                        </Form.Group>
                    </Col>
                    </Form.Group>


                <Form.Group>
                            <Form.Label>Type of Business</Form.Label>


                            <Form.Check type="radio"
                                        label={'PME Manufacturiere'}
                                        name="formHorizontalRadios4"
                                        id="formHorizontalRadios1"/>
                            <Form.Check type="radio"
                                        label={'TPE Manufacturiere'}
                                        name="formHorizontalRadios4"
                                        id="formHorizontalRadios2"/>
                            <Form.Check type="radio"
                                        label={'Entreprise en Distribution'}
                                        name="formHorizontalRadios4"
                                        id="formHorizontalRadios3"/>
                            <Form.Check type="radio"
                                        label={'Entreprise de Services'}
                                        name="formHorizontalRadios4"
                                        id="formHorizontalRadios4"/>
                            <Form.Check type="radio"
                                        label={'autre'}
                                        name="formHorizontalRadios4"
                                        id="formHorizontalRadios5"/>


                </Form.Group>

                <Form.Group> { /*SCIAN code */}

                            <Form.Label>Sectors of Activity</Form.Label>

                            <Select options={data} onChange={this.handleChange} value={this.state.SCIAN}/>
                </Form.Group>


                <Form.Group>
                            <Form.Label>How is the business classed</Form.Label>
                            <Form.Check type="radio" label={'Société par actions'} name="formHorizontalRadios0"
                                        id="formHorizontalRadios1"/>
                            <Form.Check type="radio" label={'Entreprise individuelle'} name="formHorizontalRadios0"
                                        id="formHorizontalRadios1"/>
                            <Form.Check type="radio" label={'Société en nom collectif'} name="formHorizontalRadios0"
                                        id="formHorizontalRadios1"/>
                            <Form.Check type="radio" label={'Coopérative'}/>

                            <Form.Check type="radio" label={'Organisme sans but lucratif'}/>
                            <Form.Check type="radio" label={'autre'}/>


                            <Form.Check type="radio" label={'Organisme sans but lucratif'} name="formHorizontalRadios0"
                                        id="formHorizontalRadios1"/>
                            <Form.Check type="radio" label={'autre'} name="formHorizontalRadios"
                                        id="formHorizontalRadios1"/>


                </Form.Group>

                <Form.Group>


                            <Form.Group as={Col} controlId="formGridState">

                                <Col sm="5">
                                    <Form.Label>Number of employees</Form.Label>
                                    <Form.Control as="select" name="EmployeeNumber" placeholder="Select Range"
                                                  value={this.state.EmployeeNumber}
                                                  onChange={this.handleChange}>

                                        <option> Self Employed</option>
                                        <option> 1 - 10</option>
                                        <option> 11 - 50</option>
                                        <option> 51 - 200</option>
                                        <option> 201 - 500</option>
                                        <option> 501 - 1000</option>
                                        <option> 1,001 - 5,000</option>
                                        <option> 5,001 - 10,000</option>
                                        <option> 10,000+</option>

                                    </Form.Control>
                                </Col>
                            </Form.Group>

                </Form.Group>


                <Form.Group>
                            <Form.Label>Does your business have committee working towards sustainable development
                            </Form.Label>

                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"

                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />


                </Form.Group>

                        <Form.Group>
                            <Col sm="5">
                                <Form.Label>Does your business have committee working towards sustainable development
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col sm="5">
                                <Form.Label>On what level does your business operate
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Regional"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Provincial"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="National"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="International"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios4"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col sm="5">
                                <Form.Label>What is your general client base
                                </Form.Label>
                                <Form.Check type="radio" label="Individuals" name="formHorizontalRadios3"
                                            id="formHorizontalRadios1"/>
                                <Form.Check type="radio" label="Businesses" name="formHorizontalRadios3"
                                            id="formHorizontalRadios2"/>
                                <Form.Check type="radio" label="Buying groups" name="formHorizontalRadios3"
                                            id="formHorizontalRadios3"/>
                                <Form.Check type="radio" label="Resellers or Distributors" name="formHorizontalRadios3"
                                            id="formHorizontalRadios4"/>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Col}>

                            <Col sm="5">
                                <Form.Label>What do you Offer to Clients</Form.Label>
                                <Form.Control as="textarea" rows="3" name="OfferToClient" type="text"
                                              onChange={this.handleChange}
                                              value={this.state.OfferToClient}
                                              placeholder="a short description is required">

                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridState">

                            <Col sm="5">
                                <Form.Label>Business annual total income</Form.Label>
                                <Form.Control as="select" name="IncomeValue"
                                              value={this.state.IncomeValue}
                                              onChange={this.handleChange}>
                                    <option>Select Range</option>
                                    <option> {"<"} 99,999$"</option>
                                    <option> 100,000$ - 449,999$</option>
                                    <option> 500,000$ - 999,999$</option>
                                    <option> 1,000,000$ - 4,999,999$</option>
                                    <option> 5,000,000$ - 9,999,999$</option>
                                    <option> 10,000,000$ - 24,999,999$</option>
                                    <option> 25,000,000$ - 49,999,999$</option>
                                    <option> 50,000,000$ - 99,999,999$</option>
                                    <option> 100,000,000$ - 249,999,999$</option>
                                    <option> {">"} 250,000,000$</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Col sm="5">
                            <Button variant="primary" type="submit" /* disabled={!this.formValid()} */ >
                                Submit
                            </Button>
                        </Col>


            </form>



    );

    }
    }



