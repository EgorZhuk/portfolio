import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Works} from './components/Works/Works';
import {ContactMe} from './components/ContactMe/ContactMe';
import {Feedback} from './components/Feedback/Feedback';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className="AppContainer">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <ContactMe/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
