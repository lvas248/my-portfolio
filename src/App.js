import NavBarComp from './Layout/NavBarComp';
import Home from './Pages/Home';
import Contact from './Pages/Contact/Contact';
import ProjectsContainer from './Pages/Project/ProjectsContainer';
import Skills from './Pages/Skill/Skills';

function App() {
  return (
    <div className="App overflow-hidden bg-stone-300">

      <div
        className='max-w-[1050px] relative m-auto '
      >
        <Home /> 
        <NavBarComp /> 
        <Skills />
        <ProjectsContainer />
        <Contact />        
      </div>

    </div>
  );
}

export default App;
