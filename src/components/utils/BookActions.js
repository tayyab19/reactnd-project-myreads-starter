import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BOOK_SHELVES_OPTIONS } from '../../utils';

const BookActions = props => (
    <div className="book-shelf-changer">
        <select value={props.value} onChange={e => props.onChange(e.target.value)}>
            <option value="move" disabled>Move to...</option>
            {BOOK_SHELVES_OPTIONS}
        </select>
    </div>
);

BookActions.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(BookActions);