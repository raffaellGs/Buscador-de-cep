import { FiSearch } from 'react-icons/fi'

import { useState } from 'react'
import './App.css'


import api from './services/api'

function App() {
  const [input, setInput] = useState()
  const [cep, SetCep] = useState({})

  
 async function handleSeach() {

    try {
      const response = await api.get(`${input}/json`)
     setInput('')
      SetCep(response.data)

    } catch{
      alert('Ops Erro ao buscar!')
     setInput('')
    }
    
  }

  return (
    <div>
      <div className="container">

        <div className="box-container">
          <h1>Buscar CEP</h1>
          <span>
            <input
              type="text"
              value={input}
              placeholder='Digite o CEP ...'
              onChange={(e) => setInput(e.target.value)}
            />

            <button className='buttonSearch'
              onClick={handleSeach}>
              <i className='icon'><FiSearch /></i>
            </button>
          </span>
        </div>

        {Object.keys(cep).length > 0 && (
        <div className="box-info">
          <h3>CEP: {cep.cep}</h3>
          <p><span>Rua:</span> {cep.logradouro}</p>
          <p><span>Bairro:</span> {cep.bairro}</p>
          <p><span>DDD:</span> {cep.ddd}</p>
          <p><span>Cidade:</span> {cep.localidade}</p>
          <p><span>UF:</span> {cep.uf}</p>
        </div>

        )}

      </div>
    </div>
  )
}

export default App
