import '@testing-library/jest-dom'

import { getSaludo } from '../base/02-template-string'

describe('Prueba sobre Template Strings', ()=>{
    test('getSaludo debe retornan hola fernando',()=>{
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}`)
    })

    test('getSaludo sin args debe retornar Hola Carlos', ()=>{
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos')
    })
})