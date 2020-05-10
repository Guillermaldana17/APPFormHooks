import React from 'react'

const Listado = (props) => {
    const { Entradas,deleteSolicitud } = props;
    return (
        <div className='row col-sm-12 mt-3'>
            <h4>Listado:</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Fecha-Alta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Entradas.length > 0 ?
                        Entradas.map(e => (
                            <tr key={e.id}>
                                <td>{e.Nombre}</td>
                                <td>{e.Apellido}</td>
                                <td>{e.Email}</td>
                                <td>{e.Fecha}</td>
                                <td>
                                    <button className="btn btn-light mr-2 btn-sm">Edit</button>
                                    <button className="btn btn-light mr-2 btn-sm" onClick={() => {deleteSolicitud(e.id)}}>Delete</button>
                                </td>
                            </tr>
                        )) : 
                        (
                            <tr>
                                <td colSpan='3'>No hay usuarios</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Listado