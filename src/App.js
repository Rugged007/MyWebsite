import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";


function App() {
  return (
    <div> 
      <NavBar />
      <Home />
      <About /> 
      <Portfolio />
      <Experiences />
      <Contact />
      <SocialLinks />
    </div>
  );
}
export default App;