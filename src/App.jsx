import { useState } from 'react'
import './App.css'
import Compras from './paginas/Compras'
import Login from './paginas/Login'
import Produtos from './paginas/Produtos'
import Agendamentos from './paginas/Agendamento'




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
    else if (tela === 'agendamentos') {
      return <Agendamentos/>
    }else {
      return <Login />
    }
  }

  return (
    <>

      <button onClick={() => trocarDeTela('login')}>Login</button>
      <button onClick={() => trocarDeTela('compras')}>Compras</button>
      <button onClick={() => trocarDeTela('produtos')}>Produtos</button>
      <button onClick={() => trocarDeTela('agendamentos')}>Agendamentos</button>

      <hr />

      {renderizar()}
    </>
  )
}

export default App
