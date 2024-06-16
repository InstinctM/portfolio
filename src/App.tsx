import './App.css'
import About from './components/About.tsx';
import Contacts from './components/Contacts.tsx';
import Footer from './components/Footer.tsx';
import LandingPage from "./components/LandingPage.tsx";
import NavBar from "./components/NavBar.tsx";
import Projects from './components/Projects.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Skills from './components/Skills.tsx';

function App() {

  return (
    <>
      <NavBar/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
