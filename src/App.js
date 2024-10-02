import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfoili from "./components/Portfoili";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

export default function App() {
  return (
    <div> 
      <NavBar />
      <Home />
      <About /> 
      <Portfoili />
      <SocialLinks />
    </div>
  );
}
