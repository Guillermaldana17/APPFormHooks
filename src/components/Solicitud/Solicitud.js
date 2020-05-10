import React from 'react'
import { useForm } from "react-hook-form";


const Solicitud = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const {setEntradas} = props;
 
    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas(
            [data]
        );
        e.target.reset(); /* Limpio Formulario */
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h2>Solicitud de acceso</h2>
                <p>Ingrese la informacion solicitada</p>
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            name='Nombre'
                            type='text'
                            autoComplete='none'
                            placeholder='Ingrese su nombre'
                            ref={
                                register({ required: { value: true, message: 'Campo Requerido' } })
                            }
                        ></input>
                        {
                            errors.Nombre &&
                            <span className='text-danger text-small d-block mb-3'>
                                {
                                    errors.Nombre.message
                                }
                            </span>
                            /* Forma de validar error 1 */
                        }
                        
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            name='Apellido'
                            autoComplete='none'
                            type='text'
                            placeholder='Ingrese su apellido'
                            ref={
                                register({ required: { value: true, message: 'Campo Requerido' }, minLength: { value: 2, message: 'Minimo 2 Caracteres' } })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-3'>
                            {errors?.Apellido?.message} 
                        </span>
                        {/* Forma de validar error 2 */}
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            name='Email'
                            type='Email'
                            placeholder='Ingrese su Email'
                            ref={
                                register({ required: { value: true, message: 'Campo Requerido' } })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-3'>
                            {errors?.Email?.message}
                        </span>
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='date'
                            name='Fecha'
                            ref={
                                register({ required: { value: true, message: 'Campo Requerido' } })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-3'>
                            {errors?.Fecha?.message}
                        </span>

                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success btn-block'> Enviar
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Solicitud