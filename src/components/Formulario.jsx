import React, { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({setPacientes, pacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => Math.random().toString(36).substring(2).concat(Date.now().toString(36))

  const handleSubmit = e => {
    e.preventDefault()

    if([nombre, propietario, email, fecha, sintomas].some( field => field.trim() === '')) {
      setError(true)
      return
    }

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      // id: generarId()
    }

    if (paciente.id) {
      objetoPaciente.id = paciente.id

      const pacientesUpdate = pacientes.map(pacienteState => objetoPaciente.id === pacienteState.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesUpdate)
      setPaciente({})
    }else {
      objetoPaciente.id = generarId()
      setPacientes(pacientes => [...pacientes, objetoPaciente])
    }

    setError(false)
    
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-3">
      <h2 className='font-black text-3xl text-center'>Segimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Agrega pacientes y <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form action="" className='bg-white shadow-md rounded-md py-10 px-5'
        onSubmit={handleSubmit}>
        { error && <Error
          mensaje={'Rellene todos los campos'}
        /> }
        <div className='mb-5'>
          <label htmlFor="nombre" className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
          <input 
            id='nombre'
            type="text" 
            placeholder='Nombre de la mascota'
            name='nombre'
            className='border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre 
          Propietario</label>
          <input 
            id='propietario'
            type="text" 
            placeholder='Nombre de el propietario'
            name='nombre'
            className='border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
            id='email'
            type="email" 
            placeholder='Email'
            name='nombre'
            className='border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="fecha" className='block text-gray-700 uppercase font-bold'>Fecha</label>
          <input 
            id='fecha'
            type="date" 
            name='nombre'
            className='border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea name="sintomas" id="sintomas" 
            className='border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit" value={paciente.id ? 'Modificar Paciente' : 'Agragar paciente'} 
          className='bg-indigo-600 w-full p-2 text-white font-semibold uppercase
          hover:bg-indigo-700 cursor-pointer transition-colors rounded-md'
        />
      </form>
    </div>
  )
}

export default Formulario       