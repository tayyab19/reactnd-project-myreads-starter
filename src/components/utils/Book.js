import React, {Component} from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

class Book extends Component {
	render() {
		const {title, authors, imageLinks, shelf} = this.props;
		return (
			<div>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: 128,
							height: 192,
							backgroundImage: `url("${imageLinks.thumbnail}")`
						}}/>
						<ShelfChanger value={shelf} onChange={this.props.onChange}/>
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
	shelf: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	imageLinks: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Book;