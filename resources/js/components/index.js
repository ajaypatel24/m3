import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import Question from './home/questionnaires/Question';
import LoggedIn from './home/home-components/LoggedIn';
import Nav from "./home/home-components/Nav";
import Dashboard from "./home/home-components/Dashboard";


/**
 *
 * @param email
 * @param password
 */

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            user: {}

        };
    }



    render() {
        return (
            /*full routing found here*/
            <HashRouter>
                <Nav/>

                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/home" component={Dashboard}/>
                    <Route path="/prestart_questions/" component={Question}/>
                    <Route path="/profile" component={LoggedIn}/>


                </Switch>
            </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
