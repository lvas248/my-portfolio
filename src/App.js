import './App.css';
import NavBarComp from './NavBarComp';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import StyledCard from './StyledCard';


function App() {
  return (
    <div className="App bg-[#f5f4ef] relative">

      {/* <StyledCard /> */}

      <NavBarComp />
      <Home />   

      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
