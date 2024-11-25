import React, { Component } from 'react';

class MyCity extends Component {
    render() {
        const { country, population} = this.props
        return (
            <>
                <h2>My City Class Based Components</h2>
                <br/>
                <span>My Country: {country}</span>
                <br/>
                <span>Population: {population}</span>
                <br/>
                <span>My City: {country === "India" ? "Delhi" : "New York"}</span>
            </>
        );
    }
}

export default MyCity;