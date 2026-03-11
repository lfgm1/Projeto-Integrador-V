import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Capturar from './components/Capturar'
import Botao2 from './components/Botao'



function App() {
  const [nome, setNome] = useState('');
  const [nomeList, setNomelist] = useState('');
  const incrementar = () => {
    setNome ([...nome, '']);
  };

  function exibirNome() {
    setNomelist([...nomeList, nome])
 
  };
 
  return (
  
    <div>
      
     <p> Digite seu nome </p> 
     <input type="text" placeholder="Digite um nome" onChange = {(e) => setNome (e.target.value)}/>
      <button onClick={incrementar}> Adicionar </button>
      {nomeList.map((nomeList, index) => <li key={index}>{nomeList}</li>)}
      

    </div>
   
  
   
  )


  /* 
  
  <div>
      <Titulo />
      <Aluno />
      <button onClick={Botao}>Clique</button>
     </div> */
}

export default App
