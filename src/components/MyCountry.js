import React, { Component } from 'react';
import MyCity from './MyCity';


// state - it is object that is used to store information components.
class MyCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'India',
            population: '135 Billion',
        }
    }
    handleChange = () => {
        if(this.state.name === "India") {
            this.setState({
                name: 'USA',
                population: '15 Billion',
            })
        } else {
            this.setState({
                name: 'India',
                population: '135 Billion',
            })
        }
    }
    render() {
        const { name , population} = this.state
        return (
            <>
                <h2>Class Based Component</h2>
                <div>
                    MyCountry: {name}
                </div>
                <br />
                <div>
                    Populaton: {population}
                </div>
                <button onClick={this.handleChange}>Change The Country</button>
                <MyCity country={name} population = {population}/>
            </>
        );
    }
}

// class MyCountry extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             toggle: false
//         }
//     }
//     handleChange = () => {
//         this.setState({
//             toggle: !this.state.toggle
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h2>Class Based Component</h2>
//                 <div>
//                     MyCountry: {this.state.toggle ? "India" : "US"}
//                 </div>
//                 <br />
//                 <div>
//                     Populaton: {this.state.toggle ? "135 Billion" : "15 Billion"}
//                 </div>
//                 <button onClick={this.handleChange}>Change The Country</button>                
//             </>
//         );
//     }
// }

export default MyCountry;