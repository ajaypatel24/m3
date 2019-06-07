import React from "react";
import { render } from "react-dom";

export class DynamicTable extends React.Component {
    state = {
        rows: [{}]
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
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
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
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
                                        <td><input
                                            type="text"
                                            name="name0"
                                            value={this.state.rows[idx].name}
                                            onChange={this.handleChange(idx)}
                                            className="form-control"
                                        /></td>
                                        <td>
                                            <input
                                                type="text"
                                                name="name1"
                                                value={this.state.rows[idx].name}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="mobile1"
                                                value={this.state.rows[idx].mobile}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="mobile2"
                                                value={this.state.rows[idx].mobile}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="mobile3"
                                                value={this.state.rows[idx].mobile}
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

