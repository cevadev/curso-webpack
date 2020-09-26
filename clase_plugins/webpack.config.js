const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
         * style-loader permite inyectar codigo css en el html pero ya no lo utilizaremos ya que vamos a emplear
         * un plugin que exportar a un archivo .css externo
         */
        /**Que es lo que hace use:
         * 1. Interpretamos los imports de css con el css-loader
         * 2. El plugin MiniCSSExtractPlugin empieza a actuar para extraer el css, la configuracion de como extraer el css
         * esta indicado en la seccion plugin
         */
        use: [
          /**agregamos un nuevo loader en forma de objeto */
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Curso de Webpack"
    }),
    new MiniCSSExtractPlugin({
      /**filename -> indicamos donde vamos a exportar nuestro archivo css finalizado */
      filename: "css/[name].css",
    }),
  ],
};