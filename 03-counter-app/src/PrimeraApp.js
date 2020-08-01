import React from 'react'
import {Fragment} from 'react' // para la 2da app
import PropTypes from 'prop-types'

// Functional Components

const PrimeraApp = ( { saludo, descripcion } )=>{
    return (
        <>
        <h1> { saludo } </h1>
        {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
        <p>{ descripcion}</p>
        </>
    );

}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Tambien se puede agregar al momento de hacer la desestructuracion
// Pero asi si aparece dentro de props en la extension Components de chrome
PrimeraApp.defaultProps = {
    descripcion:'Descripcion por defecto'
}




// Lo mismo pero importando Fragment

export const SegundaApp = ()=>{
    return (
        <Fragment>
        <h1>Hola Mundo</h1>
        <p>Mi Segunda Aplicacion</p>
        </Fragment>
    );

}

export default PrimeraApp;