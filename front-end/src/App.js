import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './styles.css'

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum cep!");
      return;
    }
      
    try {
      const response = await api.get('', {params: {cep: (input)}});
      console.log(response.data)
      setCep(response.data);
      setInput("");

      if (response.data.length === 0){
        alert("Não foi encontrado o CEP no firebase!");
        return
      }

    } catch {
      alert("Erro ao tentar buscar o CEP!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />
        
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
    
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep[0].cep}</h2>

          <span>{cep[0].logradouro}</span>
          <span>{cep[0].bairro}</span>
          <span>{cep[0].localidade} - {cep[0].uf}</span>

        </main>
      )} 

    </div>
  );
}

export default App;
