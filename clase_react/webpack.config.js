const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "js/[name].js",
  },
  devServer: {
    hot: true, //activamos el HotModuleReplacement de webpack
    open: true, //abrimos el navegador automaticamente
    port: 9000 //le asignaos un puerto distinto al 8080 que es por defecto
  },
  module: {
    rules: [
      {/**regla para interceptar archivos js */
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {  /**regla para interceptar archivos css */
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Curso de Webpack"
    }),
    new MiniCSSExtractPlugin({
      /**filename -> indicamos donde vamos a exportar nuestro archivo css finalizado */
      filename: "css/[name].css",
    }),
  ],
};