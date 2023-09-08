import NavBarComp from './NavBarComp';
import Home from './Home';
import Contact from './Contact';
import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';

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
