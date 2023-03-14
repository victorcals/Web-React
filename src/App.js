import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home'

function App() {
  return (

    <Router>
      <div className='app'>
        <ul>
          <li> <Link to='/'>Home </Link></li>
          <li> <Link to='/'>About</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<About />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
