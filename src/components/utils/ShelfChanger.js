import React, {Component} from 'react';
import {Dictionaries} from '../../constants';

class ShelfChanger extends Component {
	
	render() {
		const bookStatus = Dictionaries.BOOK_STATUS;
		
		const bookStatusOptions = Object.keys(bookStatus).map((bookStatusKey, bookStatusIndex) => {
			return (
				<option key={bookStatusIndex} value={bookStatus[bookStatusKey]}>{bookStatusKey}</option>
			);
		});
		return (
			<div className="book-shelf-changer">
				<select>
					{bookStatusOptions}
				</select>
			</div>
		);
	}
}

export default ShelfChanger;