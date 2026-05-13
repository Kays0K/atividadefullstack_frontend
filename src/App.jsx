import { useState } from 'react'
import './App.css'
import Compras from './paginas/Compras'
import Login from './paginas/Login'
import Produtos from './paginas/Produtos'




function App() {
  const [tela, setTela] = useState('login')

  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = () => {
    if (tela === 'login') {
      return <Login />
    }
    else if (tela === 'compras') {
      return <Compras />
    }
    else if (tela === 'produtos') {
      return <Produtos/>
    }
  }

  return (
    <>

      <button onClick={() => trocarDeTela('login')}>Login</button>
      <button onClick={() => trocarDeTela('compras')}>Compras</button>
      <button onClick={() => trocarDeTela('produtos')}>Produtos</button>

      <hr />

      {renderizar()}
    </>
  )
}

export default App
