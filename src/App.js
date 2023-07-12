import './Styles/main.css';
import Header from './Components/Header';
import AboutSection from './Components/About';
import ProjectSection from './Components/Projects';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  	return (
    	<div className='App'>
     		<Header/>
			<div className='body'>
				<AboutSection/>
				<ProjectSection/>
				<ContactSection/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
