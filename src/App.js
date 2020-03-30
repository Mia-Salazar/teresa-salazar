import React from 'react'
import {Switch,Route} from "react-router-dom";
import Header from '../src/components/Header/Header'
import Home from '../src/views/Home/Home'
import Contact from '../src/views/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
	<div className="app-container">
		<Header/>
		<main className="main">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact}/>
			</Switch>
			<Footer/>
		</main>
	</div>

  );
}

export default App;
