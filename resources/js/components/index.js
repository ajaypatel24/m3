import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Question from './home/questionnaires/Question';
import Nav from "./home/home-components/Nav";
import Dashboard from "./home/home-components/Dashboard";

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
            <BrowserRouter>
                <Nav/>
                <Link to="/prestart_questions/" replace>Prestart Question</Link>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/prestart_questions/" component={Question}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
