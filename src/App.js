import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const [nombre,setNombre] = useState(() =>{
    const storage = localStorage.getItem('nombre');
    const valInicial = JSON.parse(storage);
    return valInicial || '';
  });
  
  const nombreRef = useRef();

  const handleChange = () =>{
    setNombre(nombreRef.current.value);
  }

  useEffect(()=>{
    localStorage.setItem('nombre',JSON.stringify(nombre))
  },[nombre]);


  return (
    <div className="App">
        <h1></h1>
            <form>
                <label>Nombre:</label> 
                <input type="text" id="name" ref={nombreRef} onChange={handleChange}></input>
           </form>
    

      <React.Fragment>
        <p>Hola <i>{nombre}</i>. ¡Bienvenido! </p>
      </React.Fragment>

    </div>
  );
}

export default App;
