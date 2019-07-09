import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookActions';
import { IMAGE_DIMENSIONS } from '../../utils';

const Book = props => (
    <div>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: IMAGE_DIMENSIONS.width,
                    height: IMAGE_DIMENSIONS.height,
                    backgroundImage: `url("${props.imageLinks.thumbnail}")`,
                }}/>
                <BookActions value={props.bookShelf} onChange={props.onChange}/>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors ? props.authors.join(', ') : ''}</div>
        </div>
    </div>
);

Book.propTypes = {
    title: PropTypes.string.isRequired,
    bookShelf: PropTypes.string.isRequired,
    imageLinks: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(Book);