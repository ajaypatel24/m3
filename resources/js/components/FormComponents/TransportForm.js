import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportForm extends React.Component {
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

        };

        this.formChange = this.formChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentWillMount = () => {
        this.getTableRows();
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
        })
    }


    formChange = idx => e => {
        const {name, value} = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };


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


        this.getTableRows();
        this.clearState();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({rows: response.data});
            });
    }

    changeDelete = () => {
        this.setState({Delete: !this.state.Delete})
        console.log(this.state.Delete);
    }

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
                console.log('Request succeeded with JSON response', data);


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });

        this.getTableRows();
        this.clearState();



    }



    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    render()
    {
        const {validated} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">

                            <Row>

                                <Col lg="1">
                                    <button onClick={this.changeDelete}>Switch</button>
                                </Col>

                                {this.state.Delete ?


                                    <Col lg="3">

                                        <p>{this.state.Delete}</p>
                                        <Form noValidate
                                              validated={validated}
                                              onSubmit={e => this.handleSubmit(e)}
                                              method="POST" action="/"
                                              enctype="multipart/form-data">

                                            <Form.Group>
                                                <Form.Label>Nom Intrant</Form.Label>
                                                <Form.Control
                                                    name="NomIntrant"
                                                    required
                                                    type="text"
                                                    placeholder="Intrant"
                                                    onChange={this.handleChange}
                                                    value={this.state.NomIntrant}

                                                />
                                            </Form.Group>


                                            <Form.Group>
                                                <Row>
                                                    <Col lg="7">
                                                        <Form.Label>Quantite</Form.Label>
                                                        <Form.Control
                                                            name="QuantiteAn"
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            onChange={this.handleChange}
                                                            value={this.state.QuantiteAn}
                                                            pattern="^[a-zA-Z]+$"

                                                        />
                                                    </Col>
                                                    <Col lg="5">

                                                        <Form.Label>Unite</Form.Label>
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

                                                <Form.Check
                                                    required
                                                    name="Yearly"
                                                    inline label="Per Delivery"
                                                    type='radio'
                                                    id={`inline-radio-1`}
                                                    onChange={this.handleChange}
                                                    value={true}
                                                    pattern="^[a-zA-Z]+$"/>
                                                <Form.Check
                                                    name="Yearly"
                                                    inline label="Yearly"
                                                    onChange={this.handleChange}
                                                    type='radio'
                                                    id={`inline-radio-2`}
                                                    value={false}/>


                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>


                                            <Form.Group>
                                                <Form.Label>Provenance</Form.Label>
                                                <Form.Control
                                                    name="Provenance"
                                                    required
                                                    type="text"
                                                    placeholder="Pays/Province"
                                                    onChange={this.handleChange}
                                                    value={this.state.Provenance}

                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Nombre de Transports</Form.Label>
                                                <Form.Control
                                                    name="NbTransport"
                                                    required
                                                    type="text"
                                                    placeholder="# de Transports"
                                                    onChange={this.handleChange}
                                                    value={this.state.NbTransport}

                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Frequence D'Achat</Form.Label>
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


                                            {/*
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name="NomIntrant"
                                        required
                                        type="text"
                                        placeholder="Intrant"
                                        onChange={this.handleChange}
                                        value={this.state.NomIntrant}
                                        pattern="^[a-zA-Z]+$"
                                    />
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="Ressource"
                                required
                                type="text"
                                placeholder="Ressource"
                                onChange={this.handleChange}
                                value={this.state.Ressource}
                                pattern="^[a-zA-Z]+$"
                            />
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="Immobilisation"
                                required
                                type="text"
                                placeholder="Immobilisation"
                                onChange={this.handleChange}
                                value={this.state.Immobilisation}
                                pattern="^[a-zA-Z]+$"
                            />
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    name="DureeVie"
                                    required
                                    type="text"
                                    placeholder="Duree Vie"
                                    onChange={this.handleChange}
                                    value={this.state.DureeVie}
                                    pattern="^[a-zA-Z]+$"
                                />
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    name="Provenance"
                                    required
                                    type="text"
                                    placeholder="Provenance"
                                    onChange={this.handleChange}
                                    value={this.state.Provenance}
                                    pattern="^[a-zA-Z]+$"
                                />

                                */}

                                            <button type="submit" onClick={this.handleSubmit}>submit</button>

                                        </Form>


                                    </Col>

                                    :

                                    <Col lg="3">
                                        <Form noValidate
                                              validated={validated}
                                              onSubmit={e => this.handleSubmit(e)}
                                              method="POST" action="/"
                                              enctype="multipart/form-data">


                                            <Form.Label>Nom Intrant</Form.Label>
                                            <Form.Control
                                                name="NomIntrant"
                                                required
                                                type="text"
                                                placeholder="Intrant"
                                                onChange={this.handleChange}
                                                value={this.state.NomIntrant}

                                            />

                                            <button type="submit" onClick={this.handleDelete}>Delete</button>

                                        </Form>
                                    </Col>


                                }


                                <Col lg="5">


                                    {this.state.rows.map(attribute =>
                                        <div>

                                            <table>

                                                <thead>
                                                <tr>
                                                    <th>Nom Intrant</th>
                                                    <th>Quantite/An</th>
                                                    <th>Frequency</th>
                                                    <th>Transports</th>
                                                    <th>Provenance</th>
                                                    <th></th>
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


                                    {/*
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                <tr>
                                    <th className="text-center"> # </th>
                                    <th className="text-center"> Name </th>
                                    <th className="text-center"> Mobile </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.rows.map((item, idx) => (
                                    <tr id="addr0" key={idx}>
                                        <td>{idx}</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="name"
                                                value={this.state.rows[idx].name}
                                                onChange={this.formChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="mobile"
                                                value={this.state.rows[idx].mobile}
                                                onChange={this.formChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button
                                onClick={this.handleAddRow}
                                className="btn btn-default pull-left"
                            >
                                Add Row
                            </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="pull-right btn btn-default"
                            >
                                Delete Row
                            </button>
                            <button
                                onClick={this.testSubmit}
                                className="pull-right btn btn-default"
                            >
                                test


                            </button>


                                */}


                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
