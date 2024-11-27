import React, { Component } from 'react';

class Timer extends Component {

    // 1. Initialize state values
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3. It is used to sent data request to the server. It is called after mounting.
    componentDidMount(){
       this.timeRef = setInterval(this.tick, 1000);
    }

    //4.It is used to do some work when state or props value changed.
    componentDidUpdate = () => {
        console.log("ComponenetDidMount")
    }

    //5. It is used realese resources when we move to another component.
    componentWillUnmount = () => {
        clearInterval(this.timeRef);
    }

    //2. Display components
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}    
            </div>
        );
    }
}

export default Timer;