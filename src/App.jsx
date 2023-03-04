import './App.css'
import { Contact } from './components/Contact'
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'
import { Treatments } from './components/Treatments'
import { Doubt } from './components/Doubt'
import { About } from './components/About'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Main />
      <About />
      <Treatments />
      <Doubt />
      <Contact />
    </div>
  )
}

export default App
