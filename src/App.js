
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Experience from './components/Experience'
import Project from './components/Project';
import Contactus from './components/ContactMe'
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
function App() {
  return (
    <>  
    
   <Navbar />
   <Header />
   <AboutMe />
   <Portfolio />
   <Experience />
   <Project />
   <Contactus />
   <Footer />
   </>
  );
}

export default App
