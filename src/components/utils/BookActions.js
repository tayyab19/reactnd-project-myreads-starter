import React from 'react';
import {BOOK_ACTIONS} from '../../utils/constants';
import PropTypes from 'prop-types';

const BookActions = props => {
	
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
			<select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
				<option value='move' disabled>Move to...</option>
				{bookShelvesOptions}
			</select>
		</div>
	);
}

BookActions.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default BookActions;