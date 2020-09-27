import '../css/index.css'
import search from './search.js'
import render from './render.js'

const id = prompt("¿Quién es ese pokemon?");

/**invocamos a nuestra funcion que retorna una promesa */
search(id)
    .then((data)=>{
        /**Renderizado del pokemon que es un objeto json */
        render(data);
    })
    .catch(()=>{
        console.warn('No hubo pokemons');
    })