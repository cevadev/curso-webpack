import '../css/index.css'
import text from './texto.js'

text();

if(module.hot){
    module.hot.accept('./texto.js', function(){
        console.log('he recargado en caliente');
        text()
    })
}