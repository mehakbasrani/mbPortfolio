import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cusror/Cursor";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
