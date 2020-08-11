import React, { useState } from 'react';
import PropTypes from 'prop-types'

// Functional Component
const CounterApp = ({ value = 10}) => {

    // Hook State
    const [counter, setCounter] = useState( value );

    //Handler Add
    const handleAdd = ()=>{
        // setCounter( (c) => c+2)
        setCounter(counter + 1) 
    }
    const handleSubstract = ()=>{
        setCounter(counter - 1)
    }
    const handleReset = ()=>{
        setCounter(value);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract}>-1</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 30
}

export default CounterApp;
