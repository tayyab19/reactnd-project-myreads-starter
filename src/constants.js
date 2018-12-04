export const Enums = {
	BOOK_STATUS: {
		currentlyReading: 1,
		wantToRead: 2,
		read: 3
	},
	BOOK_STATUS_ACTION: {
		move: 1,
		currentlyReading: 2,
		wantToRead: 3,
		read: 4,
		none: 5,
	}
};

export const Dictionaries = {
	BOOK_STATUS: {
		'currentlyReading': 'Currently Reading',
		'wantToRead': 'Want to Read',
		'read': 'Read'
	},
	BOOK_SHELF_NAME: {
		'Currently Reading': Enums.BOOK_STATUS.currentlyReading,
		'Want to Read': Enums.BOOK_STATUS.wantToRead,
		'Read': Enums.BOOK_STATUS.read,
	},
	BOOK_STATUS_ACTION: {
		'Move to...': Enums.BOOK_STATUS_ACTION.move,
		'Currently Reading': Enums.BOOK_STATUS_ACTION.currentlyReading,
		'Want to Read': Enums.BOOK_STATUS_ACTION.wantToRead,
		'Read': Enums.BOOK_STATUS_ACTION.read,
		'None': Enums.BOOK_STATUS_ACTION.none,
	},
};
