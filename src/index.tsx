import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/_commonComponents/Header/Header';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
		<Header />
	
    <main>
			<Router />
		</main>
  </React.StrictMode>
);