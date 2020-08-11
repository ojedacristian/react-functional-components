import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'

describe('Probando <PrimeraApp/>', () => {
    
    test('probando', ()=>{
        const saludo = 'Hello'
        const wrapper = shallow(<PrimeraApp saludo={ saludo } descripcion='Descripcion por defecto'/>);
        expect(wrapper).toBe;
    })
})
