import './App.css';
import NavBarComp from './NavBarComp';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';

function App() {
  return (
    <div className="App bg-[#f5f4ef] relative">


      <NavBarComp />
      <Home />   
      {/* <ProjectsAlt /> */}
      {/* <Projects /> */}
      <Skills />
      <ProjectsContainer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
