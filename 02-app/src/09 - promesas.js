import { getHeroeById } from './getHeroes.js';
/*
const promesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=> {
        const heroe = getHeroeById(7)
        heroe === undefined ? reject('el Heroe no existe') : resolve(heroe);
    },1000)
});
promesa.then((dataresolve)=>{
    console.log('Promesa resuelta', dataresolve)
})
.catch(err => console.error(err));
*/
const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject(`El heroe con el id ${id} no existe`)
        },1000)
    })
}

getHeroeByIdAsync(5)
.then( console.log )
.catch( console.error )