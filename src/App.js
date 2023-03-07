import './Styles/App.css';
import ContactSection from './Components/Contact';
import AboutSection from './Components/About';
import ProjectSection from './Components/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
