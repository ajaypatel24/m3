import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';

import Select from 'react-select';
const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [a-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");



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

        {/*

            FirstName: "",
            LastName: "",
            Organization: "",
            Role: "",
            Email: "",
            Password: "",
            PasswordVerify: "",
            */}

        this.state = {



            BusinessName: "",
            QuebecAddress: "",
            City: "",
            PostalCode: "",
            CorporateAddress: "",
            IncomeValue: "",
            SCIAN: "",
            EmployeeNumber: "",
            OfferToClient: "",
            Confirm: "",
            SectorActivity: "",

            validated: false,


            BusinessNameError: ""

        };
    }

    /*
        handleLoginRequest = () => {
            let data = {
                BusinessName: this.state.BusinessName,
                QuebecAddress: this.state.QuebecAddress,
                City: this.state.City,
                PostalCode: this.state.PostalCode,
                CorporateAddress: this.state.CorporateAddress,
                IncomeValue: this.state.IncomeValue,
                SCIAN: this.state.SCIAN,
                EmployeeNumber: this.state.EmployeeNumber,
                OfferToClient: this.state.OfferToClient,
                Confirm: this.state.Confirm,





            };



        };
        */


    handleValidation() {

        let valid = true;


        //const CorporateAddressRegex = new RegExp("^[0-9]+ [a-z]+$");
        //const OfferToClientRegex = new RegExp("^[a-zA-Z0-9_]+$")

        if (!AddressRegex.test(this.state.QuebecAddress)) {
            //alert("invalid, Address must be a number followed by a street name");

            valid = false;
        }

        if (!CityRegex.test(this.state.City)) {
            valid = false;
        }

        if (!PostalRegex.test(this.state.PostalCode)) {
            //alert("invalid, must be lnl nln");
            valid = false;
        }

        if (!AddressRegex.test(this.state.CorporateAddress)) {
            valid = false;
        }
        /*
        if (!OfferToClientRegex.test(this.state.OfferToClient)) {
            valid = false;
        }
        */
        alert("this valid: ", result)
        return valid;

    }

    handleSubmit(e) {
        e.preventDefault();


        //this.handleValidation();

        const form = e.currentTarget;

        if(form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState(({validated: true}));


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
            BusinessName, QuebecAddress,
            City, PostalCode, CorporateAddress
        } = this.state;

        let g = BusinessName && QuebecAddress &&
            City && PostalCode && CorporateAddress;


        console.log(g);
        return g
        //Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false);
    };


    render() {
        const { validated } = this.state;
        return (


            < Form noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)} method="POST" action="/"> {/*start of form*/}


                {/*group 2*/}

                <Form.Group controlId="validationCustom01">
                    <Col sm="5">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                            name="BusinessName"
                            required
                            type="text"
                            placeholder="Business Name"
                            onChange={this.handleChange}
                            value={this.state.BusinessName}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group controlId="validationCustom02">
                    <Col sm="5">



                            <Form.Label>Quebec Address</Form.Label>
                            <Form.Control
                                name="QuebecAddress"
                                required
                                type="text"
                                placeholder="Quebec address"
                                onChange={this.handleChange}
                                value={this.state.QuebecAddress}
                                pattern="^[0-9]+ [a-z]+$"

                            />


                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col sm="5">

                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="City"
                                required
                                type="text"
                                placeholder="City"
                                onChange={this.handleChange}
                                value={this.state.City}
                                pattern="^[a-zA-Z]+$"
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col sm="5">

                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                maxLength="7" minLength="6"
                                name="PostalCode"
                                required
                                type="text"
                                placeholder="Postal Code"
                                onChange={this.handleChange}
                                value={this.state.PostalCode}
                                pattern="^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$"
                            />
                            <Form.Control.Feedback type="invalid">Postal Code must contain 6 characters</Form.Control.Feedback>
                    </Col>
                </Form.Group>



                <Form.Group>
                    <Col sm="5">
                            <Form.Check controlId="checkCorp" type="checkbox" label="different corporate address"/>
                            <Form.Control
                                controlId="corpAddress"
                                name="CorporateAddress"
                                required
                                type="text"
                                placeholder="corporate address"
                                onChange={this.handleChange}
                                value={this.state.CorporateAddress}
                                pattern="^[0-9]+ [a-z]+$"
                            />


                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                    </Col>
                </Form.Group>



                <Form.Group>
                    <Col sm="5">
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

                    </Col>
                </Form.Group>

                <Form.Group> { /*SCIAN code */}

                    <Col sm="5">
                        <Form.Label>Sectors of Activity</Form.Label>

                        <Form.Group as={Col} controlId="formGridState">


                                <Form.Control as="select" required name="SectorOfActivity"
                                              onChange={this.handleChange} defaultvalue="">
                                    <option> </option>
                                    <option value="SCIAN 11"> Agriculture, foresterie, peche et chasse </option>
                                    <option value = "SCIAN 21"> Extraction miniere et extracion de petrole et de gaz </option>
                                    <option value = "SCIAN 22"> Services publics </option>
                                    <option value = "SCIAN 23"> Construction </option>
                                    <option value = "SCIAN 31-33"> Fabrication</option>
                                    <option value = "SCIAN 41"> Commerce de gros</option>
                                    <option value = "SCIAN 44-45"> Commerce de détail</option>
                                    <option value = "SCIAN 48-49"> Transport et entreposage</option>
                                    <option value = "SCIAN 51"> Industrie de l\'information et industrie culturelle</option>
                                    <option value = "SCIAN 52"> Finance et assurances</option>
                                    <option value = "SCIAN 53"> Services d\'immobiliers et services de location et de location à bail</option>
                                    <option value = "SCIAN 54"> Services professionnels, scientifiques et techniques</option>
                                    <option value = "SCIAN 55"> Gestion de sociétés et d\'entreprises</option>
                                    <option value = "SCIAN 56"> Services administratifs, services de soutien, services de gestion de déchets et services d\'assainissement</option>
                                    <option value = "SCIAN 62"> Soins de santé et assistance sociale</option>
                                    <option value = "SCIAN 71"> Arts, spectacles et loisirs</option>
                                    <option value = "SCIAN 72"> Hébergement et services de restauration</option>
                                    <option value = "SCIAN 78"> Autres services – sauf les administrations publiques</option>
                                </Form.Control>

                        </Form.Group>
                    </Col>
                </Form.Group>


                <Form.Group>
                    <Col sm="5">
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


                    </Col>
                </Form.Group>

                <Form.Group>


                    <Form.Group as={Col} controlId="formGridState">

                        <Col sm="5">
                            <Form.Label>Number of employees</Form.Label>
                            <Form.Control as="select" name="EmployeeNumber" placeholder="Select Range"
                                          value={this.state.EmployeeNumber}
                                          onChange={this.handleChange}
                                          required
                                          >

                                <option> </option>
                                <option> Self Employed</option>
                                <option> 1 - 10 </option>
                                <option> 11 - 50 </option>
                                <option> 51 - 200 </option>
                                <option> 201 - 500 </option>
                                <option> 501 - 1000 </option>
                                <option> 1,001 - 5,000 </option>
                                <option> 5,001 - 10,000 </option>
                                <option> 10,000+ </option>

                            </Form.Control>
                        </Col>
                    </Form.Group>

                </Form.Group>


                <Form.Group>
                    <Col sm="5">
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

                    </Col>
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
                                    id="individuals"  value={this.check} onChange={this.handleChange}/>
                        <Form.Check type="radio" label="Businesses" name="formHorizontalRadios3"
                                    id="Businesses" value={this.state.Confirm} onChange={this.handleChange}/>
                        <Form.Check type="radio" label="Buying groups" name="formHorizontalRadios3"
                                    id="Buyinggroups" value={this.state.Confirm} onChange={this.handleChange}/>
                        <Form.Check type="radio" label="Resellers or Distributors" name="formHorizontalRadios3"
                                    id="Resellers" value={this.state.Confirm} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Col}>


                    <Col lg="5">
                        <Form.Label>What do you Offer to Clients</Form.Label>
                        <Form.Control as="textarea" required rows="3" name="OfferToClient" type="text"
                                      onChange={this.handleChange}
                                      value={this.state.OfferToClient}
                                      placeholder="a short description is required">

                        </Form.Control>
                    </Col>
                </Form.Group>


                <Form.Group as={Col} controlId="formGridState">

                    <Col sm="5">
                        <Form.Label>Business annual total income</Form.Label>
                        <Form.Control as="select" required name="IncomeValue"
                                      value={this.state.IncomeValue}
                                      onChange={this.handleChange} defaultvalue="">
                            <option> </option>
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
                    <Button variant="primary" type="submit" /*onClick={this.handleSubmit} disabled={!this.formValid()} */  >
                        Submit
                    </Button>
                </Col>




            </Form>



        );

    }
}



