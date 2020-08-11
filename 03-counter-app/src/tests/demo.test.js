describe('Pruebas en Demo Test', ()=>{
    
    test('los strings deben de ser iguales', ()=>{
        //1. inicializacion
            const mensaje = "Hola Mundo";
        //2. estimulo
        const mensaje2 = `Hola Mundo`
        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
    
})