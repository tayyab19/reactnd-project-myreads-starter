import React, {Component} from 'react';
import * as BooksAPI from '../../utils/BooksAPI';
import Book from '../utils/Book';

class Search extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			query: '',
			books: [],
			shelvedBooks: []
		};
	}
	
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			const shelvedBooks = books.map(book => { return {id: book.id, shelf: book.shelf} });
			this.setState({shelvedBooks});
		});
	}
	
	onSearchSubmit = (e) => {
		e.preventDefault();
		const { query, shelvedBooks } = this.state;
		if (query) {
			BooksAPI.search(query).then((books) => {
				if (Object.getPrototypeOf( books ) === Array.prototype) {
					books = books.filter(book => book.imageLinks !== undefined);
					books = books.map(book => {
						let shelfBookIndex = shelvedBooks.findIndex(shelfBook => shelfBook.id === book.id);
						book.shelf = shelfBookIndex === -1 ? 'none': shelvedBooks[shelfBookIndex].shelf;
						return book;
					});
				}
				else {
					books = [];
				}
				this.setState({books});
			});
		}
		else {
			this.setState({books: []});
		}
	};
	
	onStatusChange = (value, bookIndex) => {
		let {books, shelvedBooks} = this.state;
		const book = books[bookIndex];
		if (book.shelf === value) {
			return;
		}
		BooksAPI.update(book, value).then(() => {
			if ('none' === book.shelf) {
				shelvedBooks.push({id: book.id, shelf: value});
			}
			else if ('none' === value) {
				shelvedBooks = shelvedBooks.filter(shelfBook => book.id !== shelfBook.id);
			}
			else {
				shelvedBooks.map(shelfBook => {
					if (shelfBook.id === book.id) {
						shelfBook.shelf = value;
					}
					return shelfBook;
				})
			}
			books[bookIndex].shelf = value;
			this.setState({books, shelvedBooks});
		});
	};
	
	render() {
		const { books, query } = this.state;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => this.props.history.push('/')}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<form onSubmit={this.onSearchSubmit}>
							<input
								type="text" placeholder="Search by title or author" value={query}
								onChange={(e) => this.setState({query: e.target.value})}
							/>
						</form>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							books.map((book, bookIndex) => {
								return (
									<li key={bookIndex}>
										<Book
											{...book}
											onChange={(value) => this.onStatusChange(value, bookIndex)}
											bookShelf={book.shelf}
										/>
									</li>
								)
							})
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default Search;