import NavBarComp from './Layout/NavBarComp';
import Home from './Pages/Home';
import Contact from './Pages/Contact/Contact';
import ProjectsContainer from './Pages/Project/ProjectsContainer';
import Skills from './Pages/Skill/Skills';
import BottomBanner from './Layout/BottomBanner';
import FloatingActionButton from './Layout/FloatingActionButton';

function App() {

  return (
    <div className="App overflow-hidden bg-stone-300">

      <div
        className='max-w-[1050px] relative m-auto '
      >
        <NavBarComp />    
        
        <Home /> 
        <Skills />
        <ProjectsContainer />
        <Contact />    
        
        <FloatingActionButton />
        <BottomBanner />    
      </div>

    </div>
  );
}

export default App;
