import '@testing-library/jest-dom'

import {getUser, getUsuarioActivo} from '../base/05-funciones'

describe('Pruebas en 05 funciones', ()=>{
    test('debe retornar un objeto',()=>{
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(userTest).toEqual(user);
      
    })

    test('getUsuarioActivo debe retornar un objeto', ()=>{

        const nameTest = {
            uid: 'ABC567',
            username: 'Cristian'
        }
        const name = getUsuarioActivo('Cristian');

        expect(nameTest).toEqual(name)

    })

})