import React from 'react';
import './App.scss';
import Layout from './pages/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Layout />
		</Router>
	);
}

export default App;
