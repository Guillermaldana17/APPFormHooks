import React from 'react'
import { useForm } from "react-hook-form";
const Formulario = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className='card'>
            <div className='card-header'>
                <h1>Formulario</h1>
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            name='Titulo'
                            placeholder='Ingrese un titulo'
                            ref={
                                register({
                                    required: { value: true, message: '*Titulo obligatorio' }
                                })
                            }
                        >
                        </input>
                        <span className='text-danger text-small d-block mb-3'>
                            {errors?.Titulo?.message}
                        </span>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success btn-block'>Enviar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Formulario;