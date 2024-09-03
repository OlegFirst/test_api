import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Schedule from '../components/Schedule/Schedule';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			
			<Route path='/schedule' element={<Schedule />} />
		</Routes>
	</BrowserRouter>
);

export default Router;