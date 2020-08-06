import React from 'react';
import './App.css';
import Header from "./Header/Header"
import Main from "./Main/Main"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Slogan from "./Slogan/Slogan"
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from 'react-particles-js';

const particlesOption = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  }
}

function App() {
  return (
    <div className="App">
        <Particles className='particles' params={particlesOption}/>
        <Main/>
        <Skills />
        <Projects/>
        <Slogan/>
        <Contacts/>
    </div>
  );
}

export default App;
