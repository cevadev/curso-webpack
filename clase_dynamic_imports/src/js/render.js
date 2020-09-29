function render(data){
    /**creamos el elemento img */
    const pokemon = document.createElement('img');
    /**establecemos el src al elemento img */
    pokemon.setAttribute('src', data.sprites.front_default);
    /**incrustamos en el boduy del documento html */
    document.body.append(pokemon);
}

export default render;