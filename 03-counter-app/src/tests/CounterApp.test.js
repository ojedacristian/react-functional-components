import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
const { default: CounterApp } = require("../CounterApp");


describe('Pruebas de CounterApp', ()=>{
    const wrapper = shallow(<CounterApp/>)
    
    test('Hacer Snapshot', ()=> {
        const value = 5;
        expect(wrapper).toMatchSnapshot();
    })

    test('encontrar el valor', ()=>{
        const valor = 100;
        const wrapper = shallow(<CounterApp value={100} />)
        const number = wrapper.find('h2').text();
        expect(number).toBe('100')
    })

    test('debe de incrementar +1', ()=>{
        wrapper.find('button').at(0).simulate('click')
        const value = wrapper.find('h2').text().trim()
        expect(value).toBe('31')
    })
    test('debe restar 9', ()=>{
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        const value = wrapper.find('h2').text().trim()
        expect(value).toBe('29')
    })

    test('Probando el boton de Reset', ()=>{
        const wrapper = shallow(<CounterApp value={105}/>)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const cant = wrapper.find('h2').text().trim()
        expect(cant).toBe('105')
    })

})
