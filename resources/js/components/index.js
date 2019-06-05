import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Question from './home/questionnaires/Question';
import LoggedIn from './home/home-components/LoggedIn';
import Nav from "./home/home-components/Nav";
import Dashboard from "./home/home-components/Dashboard";
import Callback from "./home/home-components/Callback";

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    render()
    {
        return (
            /*full routing found here*/
            <BrowserRouter>
                <Nav/>
                <Link to="/prestart_questions/" replace>Prestart Question</Link>
                <Link to="/test_login" replace>test login</Link>
                <Link to="/callback/" replace>callback</Link>


                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/prestart_questions/" component={Question}/>
                    <Route exact path="/test_login" component={LoggedIn}/>
                    <Route exact path="/callback/" component={Callback} />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
