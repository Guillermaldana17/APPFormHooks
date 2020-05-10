import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'
import Solicitud from './components/Solicitud';
import Listado from './components/Listado'

function App() {
  const [Entradas, setEntradas] = useState([]);

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mt-2'>
            <Formulario></Formulario>
          </div>
          <div className='col-sm-6 mt-2'>
            <Solicitud
              Entradas={Entradas}
              setEntradas={setEntradas}
            >
            </Solicitud>
            <Listado
              Entradas={Entradas}>
            </Listado>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
