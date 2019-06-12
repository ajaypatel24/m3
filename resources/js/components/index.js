import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import Question from './home/questionnaires/Question';
import LoggedIn from './home/home-components/LoggedIn';
import Nav from "./home/home-components/Nav";
import Dashboard from "./home/home-components/Dashboard";
import LoginTest from "./home/auth/LoginTest";
import $ from 'jquery';
import axios from 'axios';

/**
 *
 * @param email
 * @param password
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    render() {
        return (
            /*full routing found here*/
            <HashRouter>
                <Nav/>
                <Link to="/prestart_questions/" replace>Prestart Question</Link>
                <Link to="/profile" replace>test login</Link>
                <Link to="/l" replace>test login2</Link>

                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/prestart_questions/" component={Question}/>
                    <Route path="/profile" component={LoggedIn}/>
                    <Route path="/l" component={LoginTest}/>

                </Switch>
            </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
