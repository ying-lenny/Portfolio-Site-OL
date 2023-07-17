import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProjectPage from './Pages/ProjectPage';
import './Styles/main.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  	return (
		<BrowserRouter>
			<div className='App'>
				<Header/>
				<div className='body'>
					<Routes>
						<Route exact path='/' element={<Homepage/>}/>
						<Route exact path='/page' element={<ProjectPage/>}/>
					</Routes>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
