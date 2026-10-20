import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Journey from "./Pages/Journey";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/abhishek-portfolio">

      <div className="app">

        <div className="background-grid" />
        <div className="background-glow" />
        <div className="background-glow-violet" />

        <Navbar />

        <main className="page-content">

          <Routes>
            <Route
  path="/skills"
  element={
    <PageTransition>
      <Skills />
    </PageTransition>
  }
/>

<Route
  path="/projects"
  element={
    <PageTransition>
      <Projects />
    </PageTransition>
  }
/>

<Route
  path="/journey"
  element={
    <PageTransition>
      <Journey />
    </PageTransition>
  }
/>

<Route
  path="/contact"
  element={
    <PageTransition>
      <Contact />
    </PageTransition>
  }
/>

            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;