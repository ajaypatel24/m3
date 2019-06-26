import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import MaterialTable from 'material-table'


export default class DynamicTable extends React.Component {
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
            Provenance: "",
            rows: [],

        };

        this.formChange = this.formChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    formChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };


    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    getTableRows = () => {
        let uid = localStorage.getItem('UID');
        console.log(uid);
        axios.get('/intrants/')
            .then(response => {
                console.log(response.data);
                this.setState({SCIAN: response.data, UID: uid});
            });


        console.log(this.state.SCIAN);
    }



    handleSubmit (e) {

        const data = this.state;

        fetch('/intrants/', {
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
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">

                            <Row>

                            <Col lg="5">
                                < Form
                                    onSubmit={e => this.handleSubmit(e)} method="POST" enctype="multipart/form-data">
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
                                name="QuantiteAn"
                                required
                                type="text"
                                placeholder="Quantite"
                                onChange={this.handleChange}
                                value={this.state.QuantiteAn}
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


                                </Form>

                                <button type="submit" onClick={this.handleSubmit}>submit</button>

                            </Col>


                            <Col lg="7">
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
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
