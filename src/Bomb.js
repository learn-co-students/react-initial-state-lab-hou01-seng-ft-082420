// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{
    
    constructor(props){
        const seconds = props.initialCount
        super()
        this.state = {
            secondsLeft: seconds
        }
    }

    render() {
        return(
            <div>
                {this.state.secondsLeft > 0 ? this.state.secondsLeft + " seconds left before I go boom!" : "Boom!"}
            </div>
        )
    }
}