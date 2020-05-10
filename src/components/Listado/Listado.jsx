import React from 'react'

const Listado = (props) => {
    const { Entradas } = props;
    return (
        <div className='row col-sm-12 mt-3'>

            <ul>
                {Entradas.map(e =>
                    
                    <li key={e}>
                        Nombre: {e.Nombre} <br />
                        Apellido: {e.Apellido}<br />
                        Email: {e.Email}<br />
                        Fecha: {e.Fecha}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Listado