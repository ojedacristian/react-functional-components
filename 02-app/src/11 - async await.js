const url = `https://pokeapi.co/api/v2/pokemon/pikachu`
/*
fetch(url)
.then(resp => resp.json())
.then(console.log)
*/

const buscarPokemon = async ()=>{

    try {
        
            const resp = await fetch(url)
            const data = await resp.json()
            console.log(data.sprites);
            const img = document.createElement('img')
            const {front_default} = data.sprites;
            img.src = front_default;
            document.body.append(img)
        
    } catch (error) {
        console.error(error)
    }
}
buscarPokemon()