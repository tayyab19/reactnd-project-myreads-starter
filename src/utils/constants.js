import React from 'react';

export const BOOK_SHELVES = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
};

export const BOOK_ACTIONS = {
    ...BOOK_SHELVES,
    none: 'None',
};

export const SEARCH_TERMS = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat',
    'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket',
    'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri',
    'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate',
    'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
    'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun',
    'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS',
];

export const IMAGE_DIMENSIONS = {
    width: 128,
    height: 192,
};

export const BOOK_SHELVES_OPTIONS = Object.keys(BOOK_ACTIONS).map(bookStatusKey => (
    <option key={bookStatusKey} value={bookStatusKey}>
        {BOOK_ACTIONS[bookStatusKey]}
    </option>
));

export const URL = '/my-reads';