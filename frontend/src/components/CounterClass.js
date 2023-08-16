/*
*
*
*Class based component
*
*
*/

import React from "react";

class CounterClass extends React.Component{//counterClass extends the super class called react.component
    constructor(){
        
        super();//give all the data to the React.component super class
        this.increment = this.increment.bind(this);//without this class does not know the named function have
        this.state = {//creating a js object.In here we define the value that going to change
            number:0
        }
    }


    increment(){
        this.setState({
            number : this.state.number + 1
        })
    }

    render(){
        return(
            <div>
                <h3>Class component</h3>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;