import React from 'react'
import Header from '../src/components/Header/Header'
import Home from '../src/views/Home/Home'
import Footer from '../src/components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
		<div className="app-container">
			<Header/>
			<main className="main">
				<Home/>
				<Footer/>
			</main>
		</div>
  );
}

export default App;
