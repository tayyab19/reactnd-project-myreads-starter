import React, {Component} from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

class Book extends Component {
	render() {
		const {title, authors, imageLinks} = this.props;
		return (
			<div>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: 128,
							height: 192,
							backgroundImage: `url("${imageLinks.thumbnail}")`
						}}/>
						<ShelfChanger/>
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors.join(', ')}</div>
				</div>
			</div>
		);
	}
}

Book.propTypes = {
	title: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	imageLinks: PropTypes.object.isRequired,
};

export default Book;