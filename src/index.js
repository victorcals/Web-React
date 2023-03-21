import React from 'react';
import ReactDOM from 'react-dom/client';

// não colocar boot dps se não vai sobrepor os componentes
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



// Componentes
import App from './App';
import Filme from './components/Filme';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Header /> */}
    <App />
    {/* <Title />
    <Filme /> */}
    {/* <Footer /> */}




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
