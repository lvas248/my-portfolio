import NavBarComp from './NavBarComp';
import Home from './Home';
import Contact from './Contact';
import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';

function App() {
  return (
    <div className="App bgGreen overflow-hidden">

      <div
        className='max-w-[1050px] relative m-auto px-2'
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
