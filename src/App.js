import React from 'react';
import './App.css';
import Eightball from './Eightball';
import data from './helper';

function App() {
	return (
		<div className='App'>
			<Eightball answers={data} />
		</div>
	);
}

export default App;
