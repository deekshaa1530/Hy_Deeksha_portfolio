import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Responsibilities from "./components/Responsibilities.jsx";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Responsibilities />
      <Certifications />
      <Activities />
      <Footer />
    </>
  );
}

export default App;
