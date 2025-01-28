import './App.css';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Footer from './sections/Footer/Footer';
import TncModal from './sections/TncModal/tncModal';


function App() {
  return(
    <>
    <TncModal />
    <Hero />
    <Projects />
    {/* <Skills /> */}
    <Contact />
    <Footer />
    </>
  ) 
    

} 

export default App;
