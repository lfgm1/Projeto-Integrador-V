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

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    perfil: "",
    receberNovidades: false,
    observacoes: ""

  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Nome:", form.nome);
    console.log("Email:", form.email);
    console.log("Cidade:", form.cidade);
    console.log("Perfil:", form.perfil);
    console.log("Observações:", form.observacoes);
  }

  return (
    <div>
      <h2>Formulario de Cadastro</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Perfil:</label>
          <input
            type="text"
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Receber novidades:</label>
          <input
            type="checkbox"
            name="receberNovidades"
            value={form.receberNovidades}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Observações:</label>
          <input
            type="text"
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
          />
        </div>

        
        <button type="submit">Cadastrar</button>

      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

    </div>
  );
}


/* -----------------------------------------------------------------------------
function App() {
  const [nome, setNome] = useState("");          
  const [nomeList, setNomeList] = useState([]);  

  const adicionar = () => {
    setNomeList([...nomeList, nome]); 
    setNome("");                       
  };

  return (
    <div>
      <p>Digite seu nome</p>

      <input type="text" placeholder="Digite um nome" value={nome} onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {nomeList.map((item, index) => (
          <li key={index}>{item}</li>  
        ))}
      </ul>
    </div>
  );
}
  /*
   
  /* Lista de Exercicios React (Exercicio 4) ----------------------------------------------------------------

  function App() {
  const [nome, setNome] = useState("");          
  const [nomeList, setNomeList] = useState([]);  

  const adicionar = () => {
    setNomeList([...nomeList, nome]); 
    setNome("");                       
  };

  return (
    <div>
      <p>Digite seu nome</p>

      <input type="text" placeholder="Digite um nome" value={nome} onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {nomeList.map((item, index) => (
          <li key={index}>{item}</li>  
        ))}
      </ul>
    </div>
  );
}

  --------------------------------------------------------------------------------------------------------- /*

   
  /* Lista de Exercicios React (Exercicio 3) ----------------------------------------------------------------

  function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [incrementar, setIncrementar] = useState ({ nome: "", email: "" });
  const enviar = () => {
    setIncrementar({
      nome: nome,
      email: email

    })  

  };

  return (
    <div>

      <h1> FORMULARIO DE CADASTRO SIMPLES </h1>
      <input type="text" placeholder="Digite um nome" onChange = {(e) => setNome (e.target.value)}/>
      <input type="text" placeholder="Digite seu email" onChange = {(e) => setEmail (e.target.value)}/>
      <button onClick={enviar}> Enviar </button>

      <p>Nome: {incrementar.nome}</p>
      <p>Email: {incrementar.email}</p>

     </div>
   
  )
}
  /* --------------------------------------------------------------------------------------------------------

  
  
  <div>
      <Titulo />
      <Aluno />
      <button onClick={Botao}>Clique</button>
     </div> */


export default App
