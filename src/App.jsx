import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Categorias } from './Components/Categorias/Categorias'
import { SubCategorias } from './Components/Categorias/SubCategorias'
import { Busqueda } from './Components/Busqueda/Busqueda'
import { Detalles } from './Components/Detalles/Detalles'
import { NotFound } from './Components/NotFound/NotFound'


function App() {
  return (
    <section className='w-full h-screen'>
      <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}}>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/categorias/:name/:id" element={<SubCategorias />}/>
          <Route path="/busqueda/:value" element={<Busqueda />}/>
          <Route path="/detalles/:title/:titleId" element={<Detalles />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>

      </HashRouter>
    </section>
  )
}

export default App
