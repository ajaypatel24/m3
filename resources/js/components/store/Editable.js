import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios";


export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Name', field: 'Nom_procede' },
                { title: 'Surname', field: 'Quantite_an' },
                { title: 'Surname', field: 'Quantite_an' },
                { title: 'Surname', field: 'Quantite_an' },
                { title: 'Surname', field: 'Quantite_an' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
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


                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = newData;
                                    var Q_an = data.Quantite_an
                                    var FK = data.Categorie_idCategorie
                                    let id = sessionStorage.getItem('UID');
                                    const data2 = this.state.TableData;
                                    const index = data2.indexOf(oldData);
                                    data2[index] = newData;
                                    console.log(data);

                                    this.setState({ data }, () => resolve());
                                    fetch('/e/' + Q_an + '/' + FK + '/' + id,{
                                        method: 'POST',
                                        body: JSON.stringify(data),
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                                            "Content-type": "application/json"
                                        }

                                    })
                                        .then(function (response) {
                                            console.log(response.data);
                                            console.log('Request succeeded with JSON response', response);


                                        })
                                        .catch(function (error) {

                                            console.log('Request failed', error);
                                            console.log("why");
                                        });
                                }
                                resolve()
                            }, 1000)
                        }),
                }}



            />
        )
    }
}