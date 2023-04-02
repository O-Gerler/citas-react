import Header from "./components/Header"
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState, useEffect } from "react"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    console.log(`id: ${id}`)
    const pacientesRestantes = pacientes.filter(pacienteRestante => pacienteRestante.id !== id)
    setPacientes(pacientesRestantes)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
