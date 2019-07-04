import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Example from "./Example";
import Navbar from "./Navigation";
import Question from "./Question";
import ContactUs from "./ContactUs";
import LoggedIn from "./LoggedIn";
import Loading from "./Loading";
import PrestartData from "./PrestartData";
import NoMatch from "./NoMatch";
import Dashboard from "./Dashboard";


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



                <Navbar />


                <Switch>

                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/home" component={Dashboard}/>
                    <ProtectedRoute exact path="/predata" component={ContactUs}/>
                    <ProtectedRoute path="/prestart_questions/" component={Question}/>
                    <ProtectedRoute path="/profile" component={LoggedIn}/>

                    <ProtectedRoute exact path="/loading" component={Loading}/>
                    <ProtectedRoute exact path="/Contact" component={PrestartData}/>



                    <Route component={NoMatch}/>
                </Switch>

                {/* <Footer2/> */}


            </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
