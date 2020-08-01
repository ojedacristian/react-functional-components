import edad, {heroes} from './data/heroes'


export const getHeroeById = id => heroes.find(heroe => heroe.id === id);
const getHeroeByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroeById(3))
// console.table(getHeroeByOwner('DC'))
