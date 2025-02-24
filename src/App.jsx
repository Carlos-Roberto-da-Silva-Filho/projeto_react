import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import Principal from './components/Principal'
import Usuarios from './components/Usuarios'
import Comentarios from './components/Comentarios'
import Hora from './components/Hora'

function App() {


  return (
    <>
      <Router>
      <div className="d-flex flex-column container-altura">
        <Header />

        {/* O Content funciona como container principal para as rotas */}
        <Content>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/hora" element={<Hora />} />
          </Routes>
        </Content>

        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
