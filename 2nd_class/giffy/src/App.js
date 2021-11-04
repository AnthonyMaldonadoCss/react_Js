//import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([])

  //esta funcion se carga una vez renderizado el componente
  useEffect(function(){
    //setGifs(DiferentGifs)

    getGifs({keyword: 'web'}).then(gifs => setGifs(gifs))
    
  }, [])
  
  
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif =>{ 
          return (
            <div>
              <h3>{singleGif.title}</h3>  
              <img height="122" width="122" src={singleGif.url} alt={singleGif.title} />
            </div>
          )
      })
      }
       </section>
    </div>
  );
}

export default App;
