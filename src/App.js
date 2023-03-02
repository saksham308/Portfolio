import ContactMe from './Components/ContactMe';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Bubble from './Components/Bubble';
import Skills from './Components/Skills'
import Project from './Components/Project'
function App() {
  return (
    <>
      <Bubble/>
      <Navbar/>
      <Banner/>
      <Skills/> 
      <Project/>
      <ContactMe/>      
    </>
  );
}

export default App;
