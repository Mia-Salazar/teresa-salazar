import React from 'react'
import Header from '../src/components/Header/Header'
import Home from '../src/views/Home/Home'
import './App.scss'

const App = () => {
  return (
		<div className="app-container">
			<Header/>
			<main className="main">
				<Home/>
			</main>
		</div>
  );
}

export default App;
