import React, {Component} from 'react';
import BookShelf from './BookShelf';
import {Dictionaries} from '../../constants';
import * as BooksAPI from '../../utils/BooksAPI';

class Home extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			bookShelves: [],
			dataLoaded: false,
		};
	}
	
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			const bookShelves = Object.keys(Dictionaries.BOOK_STATUS).map(bookStatusKey => {
				const currentShelfBooks = books.filter(book => book.shelf === bookStatusKey);
				const shelfTitle = Dictionaries.BOOK_STATUS[bookStatusKey];
				return {title: shelfTitle, books: currentShelfBooks};
			});
			this.setState({bookShelves, dataLoaded: true});
		});
	}
	
	render() {
		const {bookShelves, dataLoaded} = this.state;
		if (!dataLoaded) {
			return <div/>;
		}
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{
						bookShelves.map((bookShelf, bookShelfIndex) => {
							return (
								<BookShelf {...bookShelf} key={bookShelfIndex}/>
							)
						})
					}
				</div>
				<div className="open-search">
					<button onClick={() => this.props.history.push('/search')}>Add a book</button>
				</div>
			</div>
		);
	}
}

export default Home;