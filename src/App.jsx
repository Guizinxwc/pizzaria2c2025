import { useState } from "react"

function App () {
 
   const [nome, steNome] = useState('Ronaldo')
  const Formulario = () => {
    
    return (
      <div>
          <input 
      className="nome"
      onChange={(e)=>{steNome(e.target.value)}}
      name="nome"
      type="text" />
     <button 
     onClick={()=>{alert (nome)}}
     className="botao">
     CLIQUE AQUI   
     </button>
      </div>
    )
  }
   return (
    <div>
      <h3>Pizzaria 2C</h3>
     <Formulario />
     <Formulario />
    </div>
  )
}

export default App

