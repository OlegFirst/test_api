import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Schedule from '../components/Schedule/Schedule';
import Teachers from '../components/Teachers/Teachers';
import Union from '../components/Union/Union';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />			
			<Route path='/schedule' element={<Schedule />} />			
			<Route path='/teachers' element={<Teachers />} />			
			<Route path='/union' element={<Union />} />
		</Routes>
	</BrowserRouter>
);

export default Router;