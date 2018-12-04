export const Enums = {
	BOOK_STATUS: {
		move: 1,
		currentlyReading: 2,
		wantToRead: 3,
		read: 4,
		none: 5,
		
	}
};

export const Dictionaries = {
	BOOK_STATUS: {
		'Move to...': Enums.BOOK_STATUS.move,
		'Currently Reading': Enums.BOOK_STATUS.currentlyReading,
		'Want to Read': Enums.BOOK_STATUS.wantToRead,
		'Read': Enums.BOOK_STATUS.read,
		'None': Enums.BOOK_STATUS.none,
	}
};