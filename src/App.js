import React, { Suspense } from 'react'
import {Switch,Route} from "react-router-dom";
import  ScrollToTop from './utils/ScrollToTop';
import Header from '../src/components/Header/Header'
import Home from '../src/views/Home/Home'
import Contact from '../src/views/Contact/Contact'
import Education from '../src/views/Education/Education'
import Experience from '../src/views/Experience/Experience'
import Speech from '../src/views/Speech/Speech'
import Footer from '../src/components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
	<Suspense fallback=''>
		<div className="app-container">
			<ScrollToTop />
			<Header/>
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contacto" component={Contact}/>
					<Route exact path="/charlas" component={Speech}/>
					<Route exact path="/formacion" component={Education}/>
					<Route exact path="/experiencia" component={Experience}/>
				</Switch>
				<Footer/>
			</main>
		</div>
	</Suspense>

  );
}

export default App;
