import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Planos from './pages/planos';
import Detalhes from './pages/detalhes';



function App() {
  return (

    <Router>
      <div className='app'>
        <ul>
          <li> <Link to='/'>Home </Link></li>
          <li> <Link to='about'>About</Link></li>
          <li> <Link to='planos'>Planos</Link></li>
          <li> <Link to='detalhes'>Detalhes</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='planos' element={<Planos />} />
        <Route path='detalhes' element={<Detalhes />} />


      </Routes>
    </Router>
  );
}

export default App;
