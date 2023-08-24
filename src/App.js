import './App.css';
import NavBarComp from './NavBarComp';
import Home from './Home';
import Contact from './Contact';
import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';

function App() {
  return (
    <div className="App bg-[#f5f4ef] relative ">


      <Home />  
      <NavBarComp /> 
      <Skills />
      <ProjectsContainer />
      <Contact />
    </div>
  );
}

export default App;
