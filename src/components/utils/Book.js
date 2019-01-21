import React from 'react';
import BookActions from './BookActions';
import PropTypes from 'prop-types';

const Book = props => {
	const {title, authors, imageLinks, bookShelf} = props;
	return (
		<div>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{
						width: 128,
						height: 192,
						backgroundImage: `url("${imageLinks.thumbnail}")`
					}}/>
					<BookActions value={bookShelf} onChange={props.onChange}/>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors ? authors.join(', ') : ''}</div>
			</div>
		</div>
	);
};

Book.propTypes = {
	title: PropTypes.string.isRequired,
	bookShelf: PropTypes.string.isRequired,
	imageLinks: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Book;