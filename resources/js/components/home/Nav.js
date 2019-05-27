import React from 'react';

export default class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar home-nav">
                <img src={window.location.origin + "/img/cadet_logo.jpg"} className="navbar-brand mb-0 h1 nav-img"/>
                <button type="button" className="btn btn-danger btn-lg login-btn-color">Log In</button>
            </nav>
        );
    }
}
