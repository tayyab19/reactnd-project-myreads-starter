import React from 'react'
import './App.css'
import routes from './routes';

class BooksApp extends React.Component {
	
	render() {
		return (
			<div className="app">
				{routes}
			</div>
		);
	}
}

export default BooksApp
