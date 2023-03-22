import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Planos from './pages/planos';
import Detalhes from './pages/detalhes';
import Footer from '../src/components/Footer/index';
import NotFound from './pages/NotFound';
import Contratar from './pages/contratar';




function App() {
  return (
    <Router>

      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <a class="navbar-brand" href="">Menu</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>



          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">

              <Link className="nav-item nav-link" to='/'>Pagina Principal</Link>
              <Link className="nav-item nav-link" to='/planos'>Assinar Planos</Link>
              <Link className="nav-item nav-link" to='/about'>Sobre o Site</Link>


            </div>
          </div>
        </nav>
      </div>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='about' element={<About />} />
        {/* <Route path='about/:name' element={<About />} /> */}



        <Route path='planos' element={<Planos />} />z
        <Route path='detalhes/:filme' element={<Detalhes />} />
        <Route path='contratar/:val' element={<Contratar />} />
        <Route path='*' element={<NotFound />} />

        {/* Criar uma pagina não encontrada
        terminar os estilos das paginas
        terminar detalhes */}

      </Routes>

      <Footer />
    </Router >


  );
}

export default App;
