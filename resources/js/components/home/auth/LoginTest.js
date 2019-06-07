import React  from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            email: '',
            password: ''
        }

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }


    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        axios.post('/getToken', {
            email: this.state.email,
            password: this.state.password
        }).then( res => localStorage.setItem('cool-jwt', res.data));
    }


    render () {
        return (
            <div>
                <form onSumbit={e => this.submit(e)}>
                    <label>email</label><input type="text" name="email" onChange={this.change}/>
                    <label>password</label><input type="password" name="password" onChange={this.change} />
                    <button type="submit">button</button>
                </form>
            </div>
        )
    }
}