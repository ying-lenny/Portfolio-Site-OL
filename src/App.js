import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import SmallProjectItem from './Components/SmallProjectItem';
import PFG from './Components/PFG';
import EOTM from './Components/EOTM';
import Egeplast from './Components/Egeplast';
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
						<Route exact path='/Portfolio-Site-OL/' element={<Homepage/>}/>
						<Route exact path='/page2' element={<ProjectPage/>}/>
						<Route exact path='/page3' element={<ContactPage/>}/>
						<Route exact path='/Portfolio-Site-OL/PortFoliGo' element={<PFG/>}/>
						<Route exact path='/Portfolio-Site-OL/Egeplast-Ireland' element={<Egeplast/>}/>
						<Route exact path='/Portfolio-Site-OL/Employee-of-The-Month' element={<EOTM/>}/>
						{small_projects.map((small) => {
							return (
								<Route 
									key={small.id}
									exact path={`/Portfolio-Site-OL/personal/${small.id}`}
									element = {<SmallProjectItem project={small}/>}
									/>
								)
						})}
					</Routes>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
