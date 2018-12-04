import React, {Component} from 'react';
import BookShelf from "./BookShelf";
import {BOOK_SHELVES} from '../../constants';

class Home extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{
						BOOK_SHELVES.map((bookShelf, bookShelfIndex) => {
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