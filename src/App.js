import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const [nombre,setNombre] = useState(() =>{
    const storage = localStorage.getItem('nombre'); //guarda en storage el contenido de input
    const valInicial = JSON.parse(storage);//regresa el contenido de storage
    return valInicial || '';//regresa el contenido guardado en la memoria cuando se recarge la pagina
                            //o un vacio en caso de no tener contenido
  });

  const nombreRef = useRef();

  useEffect(()=>{
    localStorage.setItem('nombre',JSON.stringify(nombre))
  },[nombre]); 

  function handleChange() {
    setNombre(nombreRef.current.value); //cambia el condenido de nombre conforme se va escribiendo en el input 
  }

  return (
    <div className="App">
        <h1>Guardemos tu nombre en el localStorage!</h1>
            <div className="inputSpace">
                <label>Nombre: </label> 
                <input type="text" id="name" ref={nombreRef} onChange={handleChange}></input>
            </div>

      <React.Fragment>
        <p>Hola <i>{nombre}</i>. ¡Bienvenid@! </p>
      </React.Fragment>

    </div>
  );
}

export default App;
