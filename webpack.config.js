const path = require('path')

/*exportamos nuestro modulo que es un objeto */
module.exports = {
    /*configuramos nuestro entry */
    entry: './index.js',
    mode: 'development', // otro valor permitido es production
    output: {
        /**indicamos el directorio donde queremos guardar el archivo final. path es un modulo de node que trabaja con rutas y directrios
         * __dirname lee la ubicacion del proyecto, si queremos que el archivo final se ubique dentro de una carpeta colocamos
         * __dirname, "nombre_carpeta". Si queremos que el archivo se ubique en la raiz del proyecto solo dejamos __dirname
         * especificado.
         */
        //path: path.resolve(__dirname, "dist"),
        path: path.resolve(__dirname),
        /**Indicamos el nombre del archivo final */
        filename: 'bundle.js'
    }
} 