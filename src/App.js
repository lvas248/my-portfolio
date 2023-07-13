import './App.css';
import NavBarComp from './NavBarComp';
import Home from './Home';
import Projects from './Porjects';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
