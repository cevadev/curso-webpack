const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/index.js"),
    precios: path.resolve(__dirname, "./src/js/precios.js"),
    contacto: path.resolve(__dirname, "./src/js/contacto.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname,"dist") /**los compilados van a la carpeta dist */,
    /**ubicado en la carpeta raiz: clase-multy-entries concatenamos /js[name] name tomara cada nombre de los archivos .js
     * al final se produce un merge entre el path y la ruta especificada en el filename siendo la ruta fina:
     * ./dist/js/
     */
    filename: "js/[name].js",
  },
};