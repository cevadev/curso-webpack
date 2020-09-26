const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ) /**los compilados van a la carpeta dist */,
    /**ubicado en la carpeta raiz: clase-multy-entries concatenamos /js[name] name tomara cada nombre de los archivos .js
     * al final se produce un merge entre el path y la ruta especificada en el filename siendo la ruta fina:
     * ./dist/js/
     */
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        /**mediante un expresion regular indicamos que cualquier archivo con extension .css  */
        test: /\.css$/,
        /**una vez que identifica un .css le indicamos que debe hacer. con el css-loader (se debe instalas
         * esta dependencia para que lo entienda webpack) logramos poner un .css dentro de un .js
         */
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};