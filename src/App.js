import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfoili from "./components/Portfoili";
import SocialLinks from "./components/SocialLinks";
import Experiences from "./components/Experiences";


export default function App() {
  return (
    <div> 
      <NavBar />
      <Home />
      <About /> 
      <Portfoili />
      <SocialLinks />
      <Experiences />
    </div>
  );
}
