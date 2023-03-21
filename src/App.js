import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Planos from './pages/planos';
import Detalhes from './pages/detalhes';
import Footer from '../src/components/Footer/index';



function App() {
  return (
    <Router>

      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <a class="navbar-brand" href="#">Menu</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>



          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">

              <Link className="nav-item nav-link" to='/'>Home</Link>
              <Link className="nav-item nav-link" to='/plano'>Plano</Link>
              <Link className="nav-item nav-link" to='/sobre'>Sobre</Link>

              {/* <Link to='/'>aa</Link> */}

            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/:name' element={<About />} />
        <Route path='planos' element={<Planos />} />z
        <Route path='detalhes/:filme' element={<Detalhes />} />
        <Route path='*' element={<h1>Pagina não encontrada</h1>} />

        {/* Criar uma pagina não encontrada
        terminar os estilos das paginas
        terminar detalhes */}

      </Routes>

      <Footer />
    </Router >


  );
}

export default App;
