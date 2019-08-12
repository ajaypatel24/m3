import Background from './images/182226.jpg';
import React from 'react';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`
};

export default class Section extends React.Component {
    render() {
        return (
            <section style={ sectionStyle }>
            </section>
        );
    }
}