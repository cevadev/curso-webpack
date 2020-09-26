const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'), /**los compilados van a la carpeta dist */
        filename: 'bundle.js'
    }
}