import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'

console.info(data);

function App(){
  const [loaderList, setLoaderList] = useState([])
  function handleClick(){
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <p class="sass">Esto es sass</p>
      <p class="less">Esto es less</p>
      <p class="stylus">Esto es stylus</p>
      <p> Que linda aplicación realizada con React</p>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width={40}/>
      </p>
      <ul>
        {
          loaderList.map((item)=>(
            <Loader {...item} key={item.id} />
          ))
        }
      </ul>
      <button onClick={handleClick} >Mostrar lo aprendido hasta el momento</button>
    </div>
  );
}

export default App