import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../utils';

const BookShelf = props => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book, bookIndex) => (
                        <li key={book.id}>
                            <Book
                                {...book}
                                onChange={value => props.onChange(bookIndex, value, props.bookShelf)}
                                bookShelf={props.bookShelf}
                            />
                        </li>
                    ))
                }
            </ol>
        </div>
    </div>
);

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    bookShelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(BookShelf);