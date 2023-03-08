import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import { About } from './components/About'
import { Treatments } from './components/Treatments'
import { Contact } from './components/Contact'
import { Doubt } from './components/Doubt'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='about' element={<About />} />
        <Route path='treatments' element={<Treatments />} />
        <Route path='doubt' element={<Doubt />} />
        <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
