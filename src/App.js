import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import Header from './components/Header';
import Sobremim from './components/Sobremim';
import Contatos from './components/Contatos';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header className="Header" />
      <div className='container'>
        <main>
          <section id="inicio">
          <Sobremim />
          </section>
          <section id="habilidades">
          <h1>Habilidades:</h1>
          <Habilidades />
          </section>
          <section id="projetos">
          <h1>Projetos:</h1>
          <Projetos />
          </section>
        </main>
        <section id='contato'>
          <footer>
            <h2>Contato:</h2>
            <Contatos className="footerContatos" />
            Ⓒ Gabriel D'angelo 2024.
        </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
