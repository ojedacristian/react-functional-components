import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp, {SegundaApp} from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

const root = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 5 }/>, root)

//ReactDOM.render( <SegundaApp />, root)
