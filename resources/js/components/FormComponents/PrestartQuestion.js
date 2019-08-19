import React from 'react';
import {Button, Col, Form, Card, Row} from 'react-bootstrap';
import { FormattedHTMLMessage } from 'react-intl';


const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");
import Container from '@material-ui/core/Container';



/**Placeholders */
const BusinessName = <FormattedHTMLMessage id="Prestart.BusinessNamePlaceholder"
                                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                     description="Welcome header on app main page"
                                     values={{what: 'react-intl'}}/>

const QuebecAddress = <FormattedHTMLMessage id="Prestart.QuebecAddressPlaceholder"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>

const City = <FormattedHTMLMessage id="Prestart.CityPlaceholder"
                                            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                            description="Welcome header on app main page"
                                            values={{what: 'react-intl'}}/>

const PostalCode = <FormattedHTMLMessage id="Prestart.PostalCodePlaceholder"
                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                   description="Welcome header on app main page"
                                   values={{what: 'react-intl'}}/>

const CorporateAddress = <FormattedHTMLMessage id="Prestart.CorporateAddressPlaceholder"
                                         defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                         description="Welcome header on app main page"
                                         values={{what: 'react-intl'}}/>

const ShortDescription = <FormattedHTMLMessage id="Prestart.ShortDescriptionPlaceholder"
                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                               description="Welcome header on app main page"
                                               values={{what: 'react-intl'}}/>

const PME=<FormattedHTMLMessage id="Prestart.PME"
                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                description="Welcome header on app main page"
                                values={{what: 'react-intl'}}/>
const TPE=<FormattedHTMLMessage id="Prestart.TPE"
                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                description="Welcome header on app main page"
                                values={{what: 'react-intl'}}/>
const EntrepriseDistribution=<FormattedHTMLMessage id="Prestart.EntrepriseDistribution"
                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                description="Welcome header on app main page"
                                values={{what: 'react-intl'}}/>
const EntrepriseService=<FormattedHTMLMessage id="Prestart.EntrepriseService"
                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                description="Welcome header on app main page"
                                values={{what: 'react-intl'}}/>
const Autre=<FormattedHTMLMessage id="Prestart.Autre"
                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                              description="Welcome header on app main page"
                                              values={{what: 'react-intl'}}/>

                                              /* radio 2 */

const SocieteActions=<FormattedHTMLMessage id="Prestart.SocieteActions"
                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                  description="Welcome header on app main page"
                                  values={{what: 'react-intl'}}/>

const EntrepriseIndividuelle=<FormattedHTMLMessage id="Prestart.EntrepriseIndividuelle"
                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                  description="Welcome header on app main page"
                                  values={{what: 'react-intl'}}/>

const SocieteCollectif=<FormattedHTMLMessage id="Prestart.SocieteCollectif"
                                                   defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                   description="Welcome header on app main page"
                                                   values={{what: 'react-intl'}}/>

const Cooperative=<FormattedHTMLMessage id="Prestart.Cooperative"
                                             defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                             description="Welcome header on app main page"
                                             values={{what: 'react-intl'}}/>

const OrganismeSansLucratif=<FormattedHTMLMessage id="Prestart.OrganismeSansLucratif"
                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                        description="Welcome header on app main page"
                                        values={{what: 'react-intl'}}/>

const Regional=<FormattedHTMLMessage id="Prestart.Regional"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                  description="Welcome header on app main page"
                                                  values={{what: 'react-intl'}}/>

const Provincial =<FormattedHTMLMessage id="Prestart.Provincial"
                                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                     description="Welcome header on app main page"
                                     values={{what: 'react-intl'}}/>

const National =<FormattedHTMLMessage id="Prestart.Provincial"
                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                        description="Welcome header on app main page"
                                        values={{what: 'react-intl'}}/>

const International =<FormattedHTMLMessage id="Prestart.International"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/>

const Individuals =<FormattedHTMLMessage id="Prestart.Individuals"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>

const Businesses =<FormattedHTMLMessage id="Prestart.Businesses"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>

const BuyingGroups =<FormattedHTMLMessage id="Prestart.BuyingGroups"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>

const Resellers =<FormattedHTMLMessage id="Prestart.Resellers"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>


/**
 * Prestart Questions to answer about the business before filling
 * out intrants and energy table, maybe make this impossible
 * to access once filled and store results in a table that
 * can be edited
 */
export default class PrestartQuestion extends React.Component {


    constructor(props) {
        super(props); //required

        this.handleChange = this.handleChange.bind(this); //handle change function
        this.handleSubmit = this.handleSubmit.bind(this); //handle submit function
        this.changeSubmission = this.changeSubmission.bind(this);

        this.state = {
            BusinessName: "",
            QuebecAddress: "",
            City: "",
            PostalCode: "",
            CorporateAddress: "",
            IncomeValue: "",
            EmployeeNumber: "",
            ExistCommittee: "",
            OfferToClient: "",
            SectorActivity: "",
            BusinessClientBase: "",
            BusinessLevel: "",
            BusinessClass: "",
            BusinessType: "",
            DiffCorpAddress: "",
            DiffCorp: '',
            UID: sessionStorage.getItem('UID'),
            validated: false,
            formComplete: false,

        };
    }


    /**
     * submit form to database using / route, subject to change
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();

        let q = this;


        const data = this.state; //VERY IMPORTANT

        //checks all auth
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            fetch('/prestart', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (data) {
                    console.log('Request succeeded with JSON response', data);
                    q.setState({formComplete: true})
                })
                .catch(function (error) {
                    console.log('Request failed', error);

                });

        }
        this.setState(({validated: true}));





    };

    /**
     * Allows writing to forms
     * @param e
     */
    handleChange(e) {

        /*
        if (!e.target.checked) {
            this.setState({
                [e.target.name]: "",
        });

         */

        if (e.target.name === "DiffCorp") {

            this.setState({DiffCorp: e.target.checked})
        }

        else {


            this.setState({
                [e.target.name]: e.target.value
            });
        }





    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }



    handleCheck() {
        if (this.state.DiffCorpAddress != "") {

            return true;
        }
        return false;
    }

    changeSubmission = () => {
        this.setState({formComplete: false});

    }


    /**
     * a set of many forms defined using Form.Group as well as radio buttons
     * when finished click on submit to submit the data
     */
    render() {


        const {validated} = this.state;
        return (




            <Container maxWidth="lg">
                <h1>Prestart Questions</h1>
                <p><FormattedHTMLMessage id="Prestart.PrestartDescription"
                                         defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                         description="Welcome header on app main page"
                                         values={{what: 'react-intl'}}/></p>
                {!this.state.formComplete ?


                    <div>
                    <Card>
                        <br/>
                    <Form noValidate
                           validated={validated}
                           onSubmit={e => this.handleSubmit(e)} method="POST" action="/"
                           enctype="multipart/form-data"> {/*start of form*/}


                        {/*group 2*/}

                        <Form.Group controlId="validationCustom01">
                            <Row>
                            <Col lg="4">
                                <Form.Label><FormattedHTMLMessage id="Prestart.BusinessName"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control
                                    name="BusinessName"
                                    required
                                    type="text"
                                    placeholder="Business Name"
                                    onChange={this.handleChange}
                                    value={this.state.BusinessName}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Col>

                            <Col lg="4">


                                <Form.Label><FormattedHTMLMessage id="Prestart.QuebecAddress"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control
                                    name="QuebecAddress"
                                    required
                                    type="text"
                                    placeholder="Quebec Address"
                                    onChange={this.handleChange}
                                    value={this.state.QuebecAddress}
                                    pattern="^[0-9]+ [A-z]+$"

                                />


                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                            </Col>

                            <Col lg="4">

                                <Form.Label><FormattedHTMLMessage id="Prestart.City"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
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
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Col sm="5">

                                <Form.Label><FormattedHTMLMessage id="Prestart.PostalCode"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
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
                                <Form.Control.Feedback type="invalid">Postal Code must contain 6
                                    characters</Form.Control.Feedback>
                            </Col>
                        </Form.Group>


                        <Form.Group>
                            <Col sm="5">
                                <Form.Check name="DiffCorp" controlId="CheckCorp" type="checkbox" label="different corporate address"
                                            onChange={this.handleChange} value="DiffCorpAddress"/>
                                {
                                    this.state.DiffCorp === true ?

                                    <Form.Control

                                    controlId="corpAddress"
                                    name="CorporateAddress"
                                    required
                                    type="text"
                                    placeholder="Corporate Address"
                                    onChange={this.handleChange}
                                    value={this.state.CorporateAddress}
                                    pattern="^[0-9]+ [a-z]+$"
                                    />

                                :
                                null
                                }


                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                            </Col>
                        </Form.Group>


                        <Form.Group>
                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.TypeBusiness"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>


                                <Form.Check
                                    required
                                    type="radio"
                                    class="text-dark"

                                    label={PME}

                                    name="BusinessType"
                                    id="formHorizontalRadios1"
                                    value="PME"
                                    onChange={this.handleChange}
                                />
                                <Form.Check type="radio"
                                            label={TPE}
                                            name="BusinessType"
                                            id="formHorizontalRadios2"
                                            value="TPE"
                                            onChange={this.handleChange}
                                />
                                <Form.Check type="radio"
                                            label={EntrepriseDistribution}
                                            name="BusinessType"
                                            id="formHorizontalRadios3"
                                            value="EntrePriseDistribution"
                                            onChange={this.handleChange}
                                />
                                <Form.Check type="radio"
                                            label={EntrepriseService}
                                            name="BusinessType"
                                            id="formHorizontalRadios4"
                                            value="EntrepriseServices"
                                            onChange={this.handleChange}
                                />
                                <Form.Check type="radio"
                                            label={Autre}
                                            name="BusinessType"
                                            id="formHorizontalRadios5"
                                            value="Autre"
                                            onChange={this.handleChange}
                                />

                            </Col>
                        </Form.Group>

                        <Form.Group> { /*SCIAN code */}

                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.Sector"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>

                                <Form.Group as={Col} controlId="formGridState">


                                    <Form.Control as="select" name="SectorActivity"
                                                  onChange={this.handleChange} required>
                                        <option></option>
                                        <option value="SCIAN 11"> Agriculture, foresterie, peche et chasse</option>
                                        <option value="SCIAN 21"> Extraction miniere et extracion de petrole et de gaz
                                        </option>
                                        <option value="SCIAN 22"> Services publics</option>
                                        <option value="SCIAN 23"> Construction</option>
                                        <option value="SCIAN 31-33"> Fabrication</option>
                                        <option value="SCIAN 41"> Commerce de gros</option>
                                        <option value="SCIAN 44-45"> Commerce de détail</option>
                                        <option value="SCIAN 48-49"> Transport et entreposage</option>
                                        <option value="SCIAN 51"> Industrie de l\'information et industrie culturelle
                                        </option>
                                        <option value="SCIAN 52"> Finance et assurances</option>
                                        <option value="SCIAN 53"> Services d\'immobiliers et services de location et de
                                            location
                                            à bail
                                        </option>
                                        <option value="SCIAN 54"> Services professionnels, scientifiques et techniques
                                        </option>
                                        <option value="SCIAN 55"> Gestion de sociétés et d\'entreprises</option>
                                        <option value="SCIAN 56"> Services administratifs, services de soutien, services
                                            de
                                            gestion de déchets et services d\'assainissement
                                        </option>
                                        <option value="SCIAN 62"> Soins de santé et assistance sociale</option>
                                        <option value="SCIAN 71"> Arts, spectacles et loisirs</option>
                                        <option value="SCIAN 72"> Hébergement et services de restauration</option>
                                        <option value="SCIAN 78"> Autres services – sauf les administrations publiques
                                        </option>
                                    </Form.Control>

                                </Form.Group>
                            </Col>
                        </Form.Group>

                        <Form.Group>

                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.BusinessClass"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Check
                                    required
                                    type="radio"
                                    label={SocieteActions}
                                    name="BusinessClass"
                                    id="formHorizontalRadios7"
                                    value="SocieteActions"
                                    onChange={this.handleChange}
                                />

                                <Form.Check type="radio"
                                            label={EntrepriseIndividuelle}
                                            name="BusinessClass"
                                            id="formHorizontalRadios7"
                                            value="EntrepriseIndividuelle"
                                            onChange={this.handleChange}
                                />

                                <Form.Check type="radio"
                                            label={SocieteCollectif}
                                            name="BusinessClass"
                                            id="formHorizontalRadios7"
                                            value="SocieteCollectif"
                                            onChange={this.handleChange}
                                />

                                <Form.Check type="radio"
                                            label={Cooperative}
                                            name="BusinessClass"
                                            id="formHorizontalRadios7"
                                            value="Cooperative"
                                            onChange={this.handleChange}
                                />


                                <Form.Check type="radio"
                                            label={OrganismeSansLucratif}
                                            name="BusinessClass"
                                            id="formHorizontalRadios7"
                                            value="OrganismeSansLucratif"
                                            onChange={this.handleChange}
                                />

                                <Form.Check
                                    type="radio"
                                    label={Autre}
                                    name="BusinessClass"
                                    id="formHorizontalRadios7"
                                    value="Autre"
                                    onChange={this.handleChange}
                                />


                            </Col>


                        </Form.Group>


                        <Form.Group>


                            <Form.Group as={Col} controlId="formGridState">

                                <Col sm="5">
                                    <Form.Label><FormattedHTMLMessage id="Prestart.Employees"
                                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                      description="Welcome header on app main page"
                                                                      values={{what: 'react-intl'}}/></Form.Label>
                                    <Form.Control as="select" name="EmployeeNumber"
                                                  value={this.state.EmployeeNumber}
                                                  onChange={this.handleChange}
                                                  required
                                    >

                                        <option></option>
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
                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.Sustainable"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                </Form.Label>
                                <Form.Check
                                    required
                                    type="radio"
                                    label=<FormattedHTMLMessage id="Prestart.Yes"
                                    defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                    description="Welcome header on app main page"
                                    values={{what: 'react-intl'}}/>
                                    name="ExistCommittee"
                                    id="formHorizontalRadios1"
                                    value="Yes"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label=<FormattedHTMLMessage id="Prestart.No"
                                    defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                    description="Welcome header on app main page"
                                    values={{what: 'react-intl'}}/>
                                    name="ExistCommittee"
                                    id="formHorizontalRadios2"
                                    value="No"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.Level"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                </Form.Label>
                                <Form.Check
                                    required
                                    type="radio"
                                    label={Regional}
                                    name="BusinessLevel"
                                    id="formHorizontalRadios1"
                                    value="Regional"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label={Provincial}
                                    name="BusinessLevel"
                                    id="formHorizontalRadios2"
                                    value="Provincial"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label={National}
                                    name="BusinessLevel"
                                    id="formHorizontalRadios3"
                                    value="National"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label={International}
                                    name="BusinessLevel"
                                    id="formHorizontalRadios4"
                                    value="International"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.ClientBase"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/>
                                </Form.Label>

                                <Form.Check
                                    required
                                    type="radio"
                                    label={Individuals}
                                    name="BusinessClientBase"
                                    id="individuals"
                                    value="Individuals"
                                    onChange={this.handleChange}/>

                                <Form.Check

                                    type="radio"
                                    label={Businesses}
                                    name="BusinessClientBase"
                                    id="Businesses"
                                    value="Businesses"
                                    onChange={this.handleChange}/>
                                <Form.Check
                                    type="radio"
                                    label={BuyingGroups}
                                    name="BusinessClientBase"
                                    id="BuyingGroups"
                                    value="BuyingGroups"
                                    onChange={this.handleChange}/>
                                <Form.Check
                                    type="radio"
                                    label={Resellers}
                                    name="BusinessClientBase"
                                    id="Resellers"
                                    value="ResellersDistributors"
                                    onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Col}>


                            <Col lg="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.Offer"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control as="textarea" required rows="3" name="OfferToClient" type="text"
                                              onChange={this.handleChange}
                                              value={this.state.OfferToClient}
                                              placeholder="Short Description">

                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridState">

                            <Col sm="5">
                                <Form.Label><FormattedHTMLMessage id="Prestart.Income"
                                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                  description="Welcome header on app main page"
                                                                  values={{what: 'react-intl'}}/></Form.Label>
                                <Form.Control as="select" required name="IncomeValue"
                                              value={this.state.IncomeValue}
                                              onChange={this.handleChange} defaultvalue="">
                                    <option></option>
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

                    </Form>
                    </Card>


                        <br/>
                            <Button onClick={this.handleSubmit} variant="primary"
                                    type="submit" /*onClick={this.handleSubmit} disabled={!this.formValid()} */  >
                                <FormattedHTMLMessage id="Prestart.Submit"
                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                      description="Welcome header on app main page"
                                                      values={{what: 'react-intl'}}/>
                            </Button>

                    </div>




                    :

                    <div>
                    <p>Ayy P</p>
                    <Button variant="primary" onClick={this.changeSubmission}>
                        Edit Data
                    </Button>
                    </div>
            }

            </Container>



        );

    }
}



