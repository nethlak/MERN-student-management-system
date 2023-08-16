/*
*
*
*function based component
*
*
*/
import React, {useState} from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0);

    return(
        <div>
            <h3>Functional component</h3>
            <h1>Counter : {number}</h1>
            <button onClick={()=>{setNumber(++number)}}>Increment</button>
            <hr></hr>
        </div>
    )
}

export default CounterFunction;