import React from "react";
import { render } from "react-dom";
import {Form} from "react-bootstrap"

export class DynamicTable extends React.Component {
    constructor(props) {
        super(props);
        this.testSubmit = this.testSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    state = {
        rows: [{}],
        AnneeInventaire: "",
        Activite: "",
        Commentaire: "",
        Complete: "",
        Holder: ""
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        console.log(rows[idx]);
        console.log(idx);
        rows[idx] = {
            [e.target.name]: e.target.value,
        };
        this.setState({
            rows
        });
    };

    testdata = () => {
        var obj = [];
        $("table tr").each(function(index) {
            obj[index] = [];
            $(this).find("td").each(function(index2){
                obj[index][index2] = [$(this).text()];

            });
        });
        var json = JSON.stringify(obj);
        console.log(json);
    }
    handleAddRow = () => {
        const item = {
            AnneeInventaire: "",
            Activite: "",
            Commentaire: "",
            Complete: "",
            Holder: ""
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
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }

    testSubmit(e) {
        e.preventDefault();
        const data = [...this.state.rows];
        data.join();


        console.log(data);


    }
    handleSubmit(e) {
        e.preventDefault();

        const data = this.state.join; //VERY IMPORTANT


        //checks all auth




            fetch('/intrants', {
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
                    console.log("why");
                });



        console.log(data);


    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                <tr>
                                    <th colSpan="5"> Hors Energie </th>
                                </tr>
                                <tr>
                                    <th colSpan="3"> Compatibilisation des procedes </th>

                                </tr>
                                <tr>
                                    <th> Combustibles fossiles, sources fixes </th>
                                    <th> Consommation </th>
                                    <th> Unite </th>
                                    <th> Facteur sur Site </th>
                                    <th> Total GES </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.rows.map((item, idx) => (
                                    <tr id="addr0" key={idx}>
                                        <td><Form.Control
                                            type="text"
                                            name="AnneeInventaire"
                                            value={this.state.rows[idx].AnneeInventaire}
                                            onChange={this.handleChange(idx)}
                                            className="form-control"
                                        /></td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                name="Activite"
                                                value={this.state.rows[idx].Activite}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                name="Commentaire"
                                                value={this.state.rows[idx].Commentaire}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                name="Complete"
                                                value={this.state.rows[idx].Complete}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                name="holder"
                                                value={this.state.rows[idx].Holder}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={this.handleRemoveSpecificRow(idx)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="btn btn-primary">
                                Add Row
                            </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="btn btn-danger float-right"
                            >
                                Delete Last Row
                            </button>

                            <button
                                onClick={this.handleSubmit}
                                className="btn btn-danger float-right"
                                >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

