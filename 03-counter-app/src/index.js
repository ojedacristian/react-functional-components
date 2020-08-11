import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp, {SegundaApp} from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

const root = document.querySelector('#root');

ReactDOM.render( <CounterApp/>, root)

//ReactDOM.render( <SegundaApp />, root)
