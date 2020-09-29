const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/index.js"),
    contact: path.resolve(__dirname, "./src/js/contact.js"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    hot: true, //activamos el HotModuleReplacement de webpack
    open: true, //abrimos el navegador automaticamente
    port: 9000, //le asignaos un puerto distinto al 8080 que es por defecto
  },
  module: {
    rules: [
      {
        /**regla para interceptar archivos js */ test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {
        /**regla para interceptar archivos css */ test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader"
        ],
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
          "stylus-loader",
        ],
      },

      {
        /**interceptamos una serie de tipos de archivos */
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 90000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Curso de Webpack",
      template: path.resolve(
        __dirname,
        "index.html"
      ) /**indicamos el html donde se inyectara el codigo */,
    }),
    new MiniCSSExtractPlugin({
      /**filename -> indicamos donde vamos a exportar nuestro archivo css finalizado */
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
  }
};