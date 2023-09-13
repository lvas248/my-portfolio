import NavBarComp from './Layout/NavBarComp';
import Home from './Pages/Home';
import Contact from './Pages/Contact/Contact';
import ProjectsContainer from './Pages/Project/ProjectsContainer';
import Skills from './Pages/Skill/Skills';
import BottomBanner from './Layout/BottomBanner';
import FloatingActionButton from './Layout/FloatingActionButton';
import AltProjectContainer from './AltProject/AltProjectContainer';

function App() {

  return (
    <div className="App overflow-hidden bg-stone-300 pb-[10vh]">

      <div
        className='max-w-[1050px] relative m-auto '
      >
        <NavBarComp />    
        
        <Home /> 
        <Skills />
        {/* <ProjectsContainer /> */}
        <AltProjectContainer />
        <Contact />    
        
        <FloatingActionButton />
        <BottomBanner />    
      </div>

    </div>
  );
}

export default App;
