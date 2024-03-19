import './App.css';
import { Routes, Route } from "react-router-dom";
import './tailwindcss/style.css'

import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import ProjectVideos from './components/ProjectVideos.js'
import ProjectImages from './components/ProjectImages.js'
import ProjectPrograms from './components/ProjectPrograms.js'
import Client from './components/Client.js';

function App({imgTitle}) {

  return (
      <div className="App scroll-smooth">
        
        <Routes>
          <Route path="/" element={ 
            <div>
              <Navbar/>
              <Home/>
              <Projects/>
              <Client/>
              <About/>
            </div>
          }/>
          <Route path="/" element={ <Home/>}/>
          <Route path="/project/videos" element={ <ProjectVideos/>}/>
          <Route path="/project/images" element={ <ProjectImages/>}/>
          <Route path="/project/programs" element={ <ProjectPrograms/>}/>
        </Routes>
      </div>
  );
}

export default App;
