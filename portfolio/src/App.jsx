import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Links from "./components/Links/Links";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Links />
      <Contact />
    </>
  );
};

export default App;
