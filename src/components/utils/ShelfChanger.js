import React, {Component} from 'react';
import {Dictionaries} from '../../utils/constants';
import PropTypes from "prop-types";

class ShelfChanger extends Component {
	
	render() {
		const bookShelves = Dictionaries.BOOK_STATUS;
		
		const bookShelvesOptions = Object.keys(bookShelves).map((bookShelfKey, bookShelfIndex) => {
			return (
				<option key={bookShelfIndex} value={bookShelfKey}>
					{bookShelves[bookShelfKey]}
				</option>
			);
		});
		return (
			<div className="book-shelf-changer">
				<select value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)}>
					<option value='move' disabled>Move to...</option>
					{bookShelvesOptions}
					<option value='-1'>None</option>
				</select>
			</div>
		);
	}
}

ShelfChanger.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ShelfChanger;