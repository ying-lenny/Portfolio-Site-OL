import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import SmallProjectItem from './Components/SmallProjectItem';
import './Styles/main.css';
import { small_projects } from './Assets/data';
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
						<Route exact path='/contact' element={<ContactPage/>}/>
						{small_projects.map((small) => {
							return (
								<Route 
									key={small.id}
									exact path={`/personal/${small.id}`}
									element = {<SmallProjectItem project={small}/>}
									/>
								)
						})}
					</Routes>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
