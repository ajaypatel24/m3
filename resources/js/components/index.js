import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Question from './home/questionnaires/Question';
import LoggedIn from './home/home-components/LoggedIn';
import Nav from "./home/home-components/Nav";
import Dashboard from "./home/home-components/Dashboard";
import PrestartData from "./home/home-components/PrestartData";
import Footer2 from "./home/home-components/Footer2";
import NoMatch from "./home/custom-components/NoMatch";


/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 *
 * The const below created a ProtectedRoute Tag
 * which allows for the blocking of specific
 * routes contingent on whether the user is
 * logged in or not. This is done using a
 * localStorage parameter authenticated
 */


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('authenticated') === 'true') {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    );
};


/**
 *
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
                    <Route exact path="/predata" component={PrestartData}/>
                    <ProtectedRoute path="/prestart_questions/" component={Question}/>
                    <ProtectedRoute path="/profile" component={LoggedIn}/>

                    <Route component={NoMatch}/>
                </Switch>

                <Footer2/>


            </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
