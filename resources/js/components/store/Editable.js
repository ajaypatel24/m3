import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios";


export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'Nom_procede' },
                { title: 'Surname', field: 'Quantite_an' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ],
            data: [
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            ],

            TableData: [],
        }
    }

    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/inventaire/' + uid)
            .then(response => {
                this.setState({TableData: response.data})

                console.log(this.state.TableData)

            });

    }

    render() {
        return (
            <MaterialTable
                title="Editable Preview"
                columns={this.state.columns}
                data={this.state.TableData}
                editable={{
                    /*
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.TableData;
                                    data.push(newData);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                        */

                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.TableData;
                                    const index = data.indexOf(oldData);
                                    data[index] = newData;
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data = this.state.TableData;
                                    const index = data.indexOf(oldData);
                                    data.splice(index, 1);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        )
    }
}