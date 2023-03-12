import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import { About } from './components/About'
import { Treatments } from './components/Treatments'
import { Contact } from './components/Contact'
import { Doubt } from './components/Doubt'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='treatments' element={<Treatments />} />
        <Route exact path='doubt' element={<Doubt />} />
        <Route exact path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
