import React from 'react'

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <>
            <div className="m-3 bg-white shadow-md px-5 py-6 rounded-md">
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Nombre: <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Propietario: <span className='font-normal normal-case'>{propietario}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Email: <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Fecha: <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Sintomas: <span className='font-normal normal-case'>{sintomas}</span>
                </p>
                <div className='flex gap-4 mt-8'>
                    <button
                        type='button'
                        className='py-3 px-10 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-semibold uppercase'
                        onClick={() => setPaciente(paciente)}
                    >Modificar</button>
                    <button
                        type='button'
                        className='py-3 px-10 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold uppercase'
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default Paciente