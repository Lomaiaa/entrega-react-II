import './App.css'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Projetos from './components/Projetos/Projetos'
import Repositorios from './components/Repositorios/Repositorios'
import Rodape from './components/Rodape/Rodape'
import Titulo from './components/Titulo/Titulo'

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Apresentacao/>
      <Projetos/>
      <Repositorios/>
      <Rodape/>
    </div>
  )
}

export default App
