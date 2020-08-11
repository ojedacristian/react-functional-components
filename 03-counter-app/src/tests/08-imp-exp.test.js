import '@testing-library/jest-dom'
import {getHeroeById} from '../base/08-imp-exp'
import heroesData from '../base/data/heroes.js'


describe('pruebas en funciones de heroes', () => {
    
    test('debe retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeTest = heroesData.find(h => h.id == id)
        
        expect(heroeTest).toEqual(heroe)
    })
    
})
