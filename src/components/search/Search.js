import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../utils';
import { SEARCH_TERMS, URL, BooksAPI } from '../../utils';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',  // to store the search query
            books: [],  // to store books based on search query
            shelvedBooks: []    // to store books which are in any shelf
        };
    }

    componentDidMount() {
        // fetching all books
        BooksAPI.getAll().then(books => {
            // saving shelf book id and shelf name to check book status
            const shelvedBooks = books.map(book => ({ id: book.id, shelf: book.shelf }));
            this.setState({ shelvedBooks });
        });
    }

    searchBooks = () => {
        const { shelvedBooks, query } = this.state;
        BooksAPI.search(query).then(paramBooks => {
            let books = paramBooks;
            // checking if books returned properly
            if (Object.getPrototypeOf(books) === Array.prototype) {
                // filtering out the books without thumbnails
                books = books.filter(book => book.imageLinks !== undefined);

                // updating the book shelf status based on shelved books
                books = books.map(book => {
                    const shelfBookIndex = shelvedBooks.findIndex(shelfBook => shelfBook.id === book.id);
                    return {
                        ...book,
                        shelf: shelfBookIndex === -1 ? 'none' : shelvedBooks[shelfBookIndex].shelf
                    };
                });
            } else {
                books = [];
            }
            this.setState({ books });
        });
    };

    isValidQuery = query =>
        SEARCH_TERMS.filter(searchTerm => searchTerm.toLowerCase().includes(query.toLowerCase())).length > 0;

    onSearchChange = query => {
        // check if query length is greater than 2 or not and if query exist in search terms
        if (query.length > 2 && this.isValidQuery(query)) {
            this.setState({ query }, this.searchBooks);
        } else {
            this.setState({ books: [], query });
        }
    };

    onStatusChange = (value, bookIndex) => {
        const { books } = this.state;
        let { shelvedBooks } = this.state;
        const book = books[bookIndex];

        // checking if the same option is selected again
        if (book.shelf === value) {
            return;
        }
        // updating the book status
        BooksAPI.update(book, value).then(() => {
            // check if new book added to shelf
            if (book.shelf === 'none') {
                shelvedBooks.push({ id: book.id, shelf: value });
            }
            // check if book is deleted from every shelf
            else if (value === 'none') {
                shelvedBooks = shelvedBooks.filter(shelfBook => book.id !== shelfBook.id);
            }
            // check if book shelf is updated
            else {
                shelvedBooks.map(shelfBook => {
                    if (shelfBook.id === book.id) {
                        return {
                            ...shelfBook,
                            shelf: value
                        };
                    }
                    return shelfBook;
                });
            }
            books[bookIndex].shelf = value;
            this.setState({ books, shelvedBooks });
        });
    };

    render() {
        const { books, query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button type="button" className="close-search" onClick={() => this.props.history.push(URL)}>
                        Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.onSearchChange(event.target.value.trim())}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            books.map((book, bookIndex) => (
                                <li key={bookIndex}>
                                    <Book
                                        {...book}
                                        onChange={value => this.onStatusChange(value, bookIndex)}
                                        bookShelf={book.shelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    history: PropTypes.object.isRequired,
};

export default Search;