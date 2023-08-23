import './App.css';
import NavBarComp from './NavBarComp';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';
import Banner from './Banner';

function App() {
  return (
    <div className="App bg-[#f5f4ef] relative">
      {/* <Banner /> */}


      <Home />  
      <NavBarComp /> 
      <Skills />
      <ProjectsContainer />
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default App;
