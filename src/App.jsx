import './App.css'
import { Contact } from './components/Contact'
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'
import { Treatments } from './components/Treatments'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Treatments />
      <Contact />
    </div>
  )
}

export default App
