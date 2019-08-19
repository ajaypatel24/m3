import React from 'react';
import {Col, Form, Row, Button, Card, Alert} from "react-bootstrap";
import { FormattedHTMLMessage } from "react-intl";

/**
 * Intrants, allow user to enter and intrant and press
 * add which gets dynamically added to the page
 * by querying database
 */
export default class IntrantForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
            Yearly: "",
            Delete: true,
            UID: sessionStorage.getItem('UID'),
            rows: [],
            error: '',
            validated: false,

            Cat1: '',
            Cat2: '',
            Cat3: '',
            Categorie1: [],
            Categorie2: [],
            Categorie3: [],


        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getCategories = this.getCategories.bind(this);

    }

    componentWillMount = () => {
        this.getTableRows();
        this.getCategories();
    }


    /*
    fixQuantity = () => {
        console.table([this.state.Yearly, this.state.Frequency]);


        }
    }

*/

    clearState = () => {
        this.setState({
            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
            validated: false,
            Cat1: '',
            Cat2: '',
            Cat3: '',
        })
    }


    /**
     * Method used to delete intrants directly from the database, does this in real time
     * so the user sees the intrant being deleted after they press the button
     *
     * Uses the /delIntrants/{intrant}/{id} route which calls a post method to delete
     */

    getCategories = () => {
        axios.get('/Category1/')
            .then(response => {
                console.log(response.data);
                this.setState({Categorie1: response.data});
            });
    }


    handleDelete(e) {
        e.preventDefault();
        let uid = this.state.UID;
        let intrant = this.state.NomIntrant;
        fetch('/delIntrants/' + intrant + '/' + uid, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {
                console.log(response.data)


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });


        this.getTableRows(); //get new table rows after deletion
        this.clearState(); //refresh state
    }

    /**
     * allows writing to forms
     */

    handleChange(e) {



        this.setState({
            [e.target.name]: e.target.value,
            error: '',
        });

        if (e.target.name === "Cat1") {
            axios.get('/Category2/' + e.target.value)
                .then(response => {
                    this.setState({Categorie2: response.data});
                });
        }

        else if (e.target.name === "Cat2") {
            axios.get('/Category3/' + e.target.value)
                .then(response => {
                    this.setState({Categorie3: response.data});
                });
        }


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    /**
     * gets all table rows from backend controller method to be
     * displayed to the user
     */
    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({rows: response.data});
            });
    }

    /**
     * switches page to and from delete mode. The regular form has 5 options
     * to be entered and submitted while the delete version has 1 form which is the
     * name of the intrant to delete
     */
    changeDelete = () => {
        this.setState({Delete: !this.state.Delete})
        console.log(this.state.Delete);
    }

    /**
     * Submits intrant data to database with post method which packs up state to send
     */
    handleSubmit(e) {
        e.preventDefault();


        //VERY IMPORTANT
        const data = this.state;

        //checks all auth


        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }


        let id = sessionStorage.getItem('UID');

        let g = this;
        console.table([data]);
        fetch('/intrants/' + id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {
                console.log(response.data)
                console.log(response.status);
                console.log('Request succeeded with JSON response', data);

                if (response.status === 500) {
                    g.setState({error: 'Ensure all data fits the criteria'})

                }
                else if (response.status === 200) {
                    g.setState({error: 'Data submitted successfully'})
                    g.clearState();

                    //window.location.reload();
                }

            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });

        this.setState(({validated: true}));





    }


render()
{
    const {validated} = this.state;
    return (
        <div>

            <Row>
                <Col>
                    <h1> Intrants </h1>

                    <h6> Remplire les données nécessaires </h6>
                </Col>
            </Row>

            <Card>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md-12 column">

                        <Row>


                            {/**
                             * this.state.Delete checks if the form is in delete mode or not, it renders the
                             * component accordingly and can easily be switched using the switch button above
                             */}




                                <Col>

                                    <p>{this.state.Delete}</p>
                                    <Form noValidate
                                          validated={validated}
                                          onSubmit={e => this.handleSubmit(e)}
                                          method="POST" action="/"
                                          enctype="multipart/form-data">

                                        <Form.Group>
                                            <Row>
                                                <Col lg="4">
                                            <Form.Label><FormattedHTMLMessage id="IntrantForm.NomIntrant"
                                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                              description="Welcome header on app main page"
                                                                              values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="NomIntrant"
                                                required
                                                type="text"
                                                placeholder="Intrant"
                                                onChange={this.handleChange}
                                                value={this.state.NomIntrant}

                                            />
                                                </Col>


                                                <Col lg="4">



                                                    <Form.Label><FormattedHTMLMessage id="IntrantForm.Quantity"
                                                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                      description="Welcome header on app main page"
                                                                                      values={{what: 'react-intl'}}/></Form.Label>
                                                    <Form.Control
                                                        name="QuantiteAn"
                                                        required
                                                        type="text"
                                                        placeholder=""
                                                        onChange={this.handleChange}
                                                        value={this.state.QuantiteAn}
                                                        pattern="^[0-9]+$"

                                                    />
                                                    <Form.Check
                                                        required
                                                        name="Yearly"
                                                        inline label=<FormattedHTMLMessage id="IntrantForm.PerDelivery"
                                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                        description="Welcome header on app main page"
                                                        values={{what: 'react-intl'}}/>
                                                    type='radio'
                                                    id={`inline-radio-1`}
                                                    onChange={this.handleChange}
                                                    value={true}
                                                    pattern="^[a-zA-Z]+$" />


                                                    <Form.Check
                                                        name="Yearly"
                                                        inline label=<FormattedHTMLMessage id="IntrantForm.Yearly"
                                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                        description="Welcome header on app main page"
                                                        values={{what: 'react-intl'}}/>
                                                    onChange={this.handleChange}
                                                    type='radio'
                                                    id={`inline-radio-2`}
                                                    value={false}/>

                                                </Col>



                                                <Col lg="4">

                                                    {/* simple dropdown menu */}
                                                    <Form.Label><FormattedHTMLMessage id="IntrantForm.Unite"
                                                                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                      description="Welcome header on app main page"
                                                                                      values={{what: 'react-intl'}}/></Form.Label>
                                                    <Form.Control as='select'
                                                                  name="Unite"
                                                                  required
                                                                  type="text"
                                                                  placeholder="Quantite"
                                                                  onChange={this.handleChange}
                                                                  value={this.state.Unite}
                                                    >

                                                        <option></option>
                                                        <option value="GJ">GJ</option>
                                                        <option value="kWh">kWh</option>
                                                        <option value="MWh">MWh</option>
                                                        <option value="kg">Kg</option>
                                                        <option value="t">Ton</option>
                                                        <option value="L">L</option>
                                                        <option value="m3">m3</option>
                                                        <option value="lbs">lbs</option>
                                                        <option value="tm">Ton (metric)</option>
                                                        <option value="gal">Gal</option>
                                                        <option value="bac240L">Dumpster (240L)</option>
                                                        <option value="bac360L">Dumpster (360L)</option>
                                                        <option value="VC">Cubic Yards</option>
                                                        <option value="teqCO2">GHG (Ton)</option>
                                                        <option value="kgeqCO2">GHG (Kg)</option>
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                        {/*

                                        <Form.Group>


                                            <Form.Check
                                                required
                                                name="Yearly"
                                                inline label=<FormattedHTMLMessage id="IntrantForm.PerDelivery"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/>
                                                type='radio'
                                                id={`inline-radio-1`}
                                                onChange={this.handleChange}
                                                value={true}
                                                pattern="^[a-zA-Z]+$"/>
                                            <Form.Check
                                                name="Yearly"
                                                inline label=<FormattedHTMLMessage id="IntrantForm.Yearly"
                                                defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                description="Welcome header on app main page"
                                                values={{what: 'react-intl'}}/>
                                                onChange={this.handleChange}
                                                type='radio'
                                                id={`inline-radio-2`}
                                                value={false}/>

                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                        */}





                                        <Form.Group>
                                            <Row>
                                                <Col>
                                            <Form.Label><FormattedHTMLMessage id="IntrantForm.Provenance"
                                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                              description="Welcome header on app main page"
                                                                              values={{what: 'react-intl'}}/></Form.Label>
                                            <Form.Control
                                                name="Provenance"
                                                required
                                                type="text"
                                                placeholder="Pays/Province"
                                                onChange={this.handleChange}
                                                value={this.state.Provenance}

                                            />
                                                </Col>

                                                <Col>

                                            <Form.Label>{/* <FormattedHTMLMessage id="IntrantForm.NbTransport"
                                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                              description="Welcome header on app main page"
                                                                              values={{what: 'react-intl'}}/> */} Transports</Form.Label>
                                            <Form.Control
                                                name="NbTransport"
                                                required
                                                type="text"
                                                placeholder="# of Transports"
                                                onChange={this.handleChange}
                                                value={this.state.NbTransport}
                                                pattern="^[0-9]+$"

                                            />
                                                </Col>
                                            </Row>
                                        </Form.Group>




                                        <Form.Group>
                                            <Row>
                                                <Col lg="4">
                                                    <Form.Label><FormattedHTMLMessage id="IntrantForm.Categorie1"
                                                                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                               description="Welcome header on app main page"
                                                                                               values={{what: 'react-intl'}}/></Form.Label>

                                                    {/* dropdown menu */}
                                                    <Form.Control as="select" name="Cat1" placeholder="Select Range"
                                                                  required
                                                                  value={this.state.Cat1}
                                                                  onChange={this.handleChange}


                                                    >

                                                        <option></option>
                                                        {this.state.Categorie1.map(Cat => (
                                                            <option>
                                                                {Cat}
                                                            </option>
                                                        ))}


                                                    </Form.Control>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Label><FormattedHTMLMessage id="IntrantForm.Categorie2"
                                                                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                               description="Welcome header on app main page"
                                                                                               values={{what: 'react-intl'}}/></Form.Label>

                                                    {/* dropdown menu */}
                                                    <Form.Control as="select" name="Cat2" placeholder="Select Range"
                                                                  required
                                                                  value={this.state.Cat2}
                                                                  onChange={this.handleChange}


                                                    >

                                                        <option></option>
                                                        {this.state.Categorie2.map(Cat => (
                                                            <option>
                                                                {Cat}
                                                            </option>
                                                        ))}


                                                    </Form.Control>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Label><FormattedHTMLMessage id="IntrantForm.Categorie3"
                                                                                               defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                                               description="Welcome header on app main page"
                                                                                               values={{what: 'react-intl'}}/></Form.Label>

                                                    {/* dropdown menu */}
                                                    <Form.Control as="select" name="Cat3" placeholder="Select Range"
                                                                  required
                                                                  value={this.state.Cat3}
                                                                  onChange={this.handleChange}

                                                    >

                                                        <option></option>
                                                        {this.state.Categorie3.map(Cat => (
                                                            <option>
                                                                {Cat}
                                                            </option>
                                                        ))}


                                                    </Form.Control>
                                                </Col>


                                            </Row>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label><FormattedHTMLMessage id="IntrantForm.Frequency"
                                                                              defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                              description="Welcome header on app main page"
                                                                              values={{what: 'react-intl'}}/></Form.Label>

                                            {/* dropdown menu */}
                                            <Form.Control as="select" name="Frequency" placeholder="Select Range"
                                                          required
                                                          value={this.state.Frequency}
                                                          onChange={this.handleChange}
                                                          disabled={this.state.Yearly ==='false'}
                                                          enabled={this.state.Yearly ==='true'}

                                            >

                                                <option></option>
                                                <option value="1xY"> Once per year</option>
                                                <option value="2xY"> Twice per year</option>
                                                <option value="3xY"> Three times per year</option>
                                                <option value="4xY"> Four times per year</option>
                                                <option value="2xM"> Every two Months</option>
                                                <option value="6W"> Every six weeks</option>
                                                <option value="1xM"> Every month</option>
                                                <option value="3W"> Every three weeks</option>
                                                <option value="2W"> Every two weeks</option>
                                                <option value="1W"> Every week</option>
                                                <option value="3BD"> Every Three business days</option>
                                                <option value="2BD"> Every Two business days</option>
                                                <option value="1BD"> Each business day</option>

                                            </Form.Control>
                                        </Form.Group>



                                    </Form>



                                </Col>

                        </Row>

                            {/**
                             * if in delete mode, render the form below
                             */
                            }


                            {/** end form rendering */}


                            {/** end form rendering
                             * Below a table is generated which displays all the intrants as they are
                             * created, it uses the HOF map which is used throughout this project
                             * to print objects using a keyword and dot notation
                             *
                             * ex: attribute.{elementName}
                             *
                             * */}

                            {/*
                            <Col lg="7">


                                {this.state.rows.map(attribute =>
                                    <div>

                                        <table>

                                            <thead>
                                            <tr>
                                                <th> <FormattedHTMLMessage id="IntrantForm.NomIntrant"
                                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                          description="Welcome header on app main page"
                                                                          values={{what: 'react-intl'}}/> </th>
                                                <th> <FormattedHTMLMessage id="IntrantForm.Quantity"
                                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                          description="Welcome header on app main page"
                                                                          values={{what: 'react-intl'}}/> </th>
                                                <th> <FormattedHTMLMessage id="IntrantForm.Frequency"
                                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                          description="Welcome header on app main page"
                                                                          values={{what: 'react-intl'}}/> </th>
                                                <th> <FormattedHTMLMessage id="IntrantForm.NbTransport"
                                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                          description="Welcome header on app main page"
                                                                          values={{what: 'react-intl'}}/> </th>
                                                <th> <FormattedHTMLMessage id="IntrantForm.Provenance"
                                                                          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                                                          description="Welcome header on app main page"
                                                                          values={{what: 'react-intl'}}/> </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{attribute.nom_intrant}</td>
                                                <td>{attribute.quantite_an} {attribute.unite}</td>
                                                <td>{attribute.frequence}</td>
                                                <td>{attribute.NbTransport}</td>
                                                <td>{attribute.provenance}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}




                            </Col>

                            */}

                    </div>
                </div>
            </div>
            </Card>
            <br/>

            <Row>
                <Col>
            <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                </Col>
                <Col>
                    {
                        {
                            'Ensure all data fits the criteria':
                                <Alert variant="danger"
                                       className="d-flex justify-content-center">{this.state.error}</Alert>,
                            'Data submitted successfully':
                                <Alert variant="success"
                                       className="d-flex justify-content-center">{this.state.error}</Alert>,
                            '':
                                null,
                        }[this.state.error]
                    }
                </Col>
            </Row>

        </div>
    );

}

}
