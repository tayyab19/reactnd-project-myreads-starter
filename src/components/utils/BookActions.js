import React, {Component} from 'react';
import {BOOK_ACTIONS} from '../../utils/constants';
import PropTypes from "prop-types";

class BookActions extends Component {
	
	render() {
		const bookStatus = BOOK_ACTIONS;
		
		const bookShelvesOptions = Object.keys(bookStatus).map((bookStatusKey, bookStatusIndex) => {
			return (
				<option key={bookStatusIndex} value={bookStatusKey}>
					{bookStatus[bookStatusKey]}
				</option>
			);
		});
		return (
			<div className="book-shelf-changer">
				<select value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)}>
					<option value='move' disabled>Move to...</option>
					{bookShelvesOptions}
				</select>
			</div>
		);
	}
}

BookActions.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default BookActions;