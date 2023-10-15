import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.scss'

import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Alta from './pages/Alta'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'

import Header from './components/Header'
import Footer from './components/Footer'
import { ItemProvider } from './contexts/ItemContext'
import { CarritoProvider } from './contexts/CarritoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider> 
    <ItemProvider>
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/alta' element={<Alta/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='*' element={<Inicio/>} />  {/* Componente si hay un error se usa el, estaria bueno que diga 404 not found * */}
      </Routes>

      <Footer />

    </BrowserRouter>
      </ItemProvider>
      </CarritoProvider> 
  </React.StrictMode>,
)
