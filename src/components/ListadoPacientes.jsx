import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente}) {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll mb-10'>
      {pacientes.length > 0
        ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <p className='text-lg mt-5 mb-10 text-center'>
              Administra tus
              <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
            </p>

            {pacientes.map(paciente => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              )
            })}
          </>
          )
        : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay mas Pacientes</h2>
            <p className='text-lg mt-5 mb-10 text-center'>
              Empieza a agregar
              <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
            </p>
          </>
          )
        }
        </div>
    )
}

export default ListadoPacientes