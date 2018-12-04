import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from '../utils/Book';

class BookShelf extends Component {
	render() {
		const {title, books} = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							books.map((book, bookIndex) => {
								return (
									<li key={bookIndex}>
										<Book {...book}/>
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

BookShelf.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired
};

export default BookShelf;