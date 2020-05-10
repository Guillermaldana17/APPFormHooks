import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Solicitud from './components/Solicitud';
import SolicitudEdit from './components/Solicitud';
import Listado from './components/Listado'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [Entradas, setEntradas] = useState([
    {
      id: uuidv4(),
      Nombre: 'Nicolas',
      Apellido: 'Aldana',
      Email: 'Naldana@mail.com',
      Fecha: '12/2/2020',
    },
    {
      id: uuidv4(),
      Nombre: 'Juan',
      Apellido: 'Lopez',
      Email: 'Jlopez@mail.com',
      Fecha: '12/2/2020',
    }

  ]);
  const addSolicitud = (Entrada) =>{
    Entrada.id = uuidv4();
    setEntradas(
      [
         ...Entradas,
        Entrada
      ]
    )
  }
  const deleteSolicitud = (id) => {
    const EntradaFilters = Entradas.filter(Entrada => Entrada.id !== id )
    setEntradas(EntradaFilters);
    alert('Item Eliminado')
  }
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-4 mt-2'>
            <Solicitud
              addSolicitud={addSolicitud}
            >
            </Solicitud>
          </div>
          <div className='col-sm-8 mt-2'>

            <Listado
              Entradas={Entradas}
              deleteSolicitud={deleteSolicitud}>
            </Listado>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
