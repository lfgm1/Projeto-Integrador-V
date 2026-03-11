import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Capturar from './components/Capturar'

function App() {


  return (
    <div>
      <Titulo />
      <Aluno />
      <button onClick={Botao}>Clique</button>
     </div>
   
  )
}

export default App
