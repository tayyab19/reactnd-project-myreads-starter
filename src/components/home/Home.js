import React, {Component} from 'react';
import BookShelf from './BookShelf';
import {BOOK_SHELVES, URL} from '../../utils/constants';
import * as BooksAPI from '../../utils/BooksAPI';

class Home extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			books: [],  // to store all books
			bookShelves: [],    // to store books categorized by shelves
			dataLoaded: false,  // flag to display the data when loaded
		};
	}
	
	componentDidMount() {
		// fetching all books
		BooksAPI.getAll().then(books => {
			const bookShelves = Object.keys(BOOK_SHELVES).map(bookStatusKey => {
				// filter books by book shelf
				const currentShelfBooks = books.filter(book => book.shelf === bookStatusKey);
				const shelfTitle = BOOK_SHELVES[bookStatusKey];
				return {title: shelfTitle, books: currentShelfBooks, bookShelf: bookStatusKey};
			});
			this.setState({books, bookShelves, dataLoaded: true});
		});
	}
	
	onStatusChange = (bookShelfIndex, bookIndex, value, oldValue) => {
		// checking if the same option is selected again
		if (value === oldValue) {
			return;
		}
		const { books, bookShelves } = this.state;
		const book = bookShelves[bookShelfIndex]['books'][bookIndex];
		// updating the book status
		BooksAPI.update(book, value).then(response => {
			const bookShelves = Object.keys(response).map(bookStatusKey => {
				const booksId = response[bookStatusKey];
				// filtering the current shelf books to update the state
				const currentShelfBooks = books.filter(book => booksId.includes(book.id));
				const shelfTitle = BOOK_SHELVES[bookStatusKey];
				return {title: shelfTitle, books: currentShelfBooks, bookShelf: bookStatusKey};
			});
			this.setState({bookShelves});
		});
	};
	
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
								<BookShelf
									key={bookShelfIndex}
									{...bookShelf}
									onChange={
										(bookIndex, value, oldValue) => this.onStatusChange(
											bookShelfIndex, bookIndex, value, oldValue)}
								/>
							)
						})
					}
				</div>
				<div className="open-search">
					<button onClick={() => this.props.history.push(`${URL}/search`)}>Add a book</button>
				</div>
			</div>
		);
	}
}

export default Home;