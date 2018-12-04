import React, {Component} from 'react';
import ShelfChanger from "./ShelfChanger";
import PropTypes from 'prop-types';

class Book extends Component {
	render() {
		const {title, authors, imageStyles} = this.props;
		return (
			<div>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: imageStyles.width,
							height: imageStyles.height,
							backgroundImage: `url("${imageStyles.backgroundImage}")`
						}}/>
						<ShelfChanger/>
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors}</div>
				</div>
			</div>
		);
	}
}

Book.propTypes = {
	title: PropTypes.string.isRequired,
	authors: PropTypes.string.isRequired,
	imageStyles: PropTypes.object.isRequired,
};

export default Book;