let _numberOfReadedBooks = new WeakMap();
let _numberOfNotReadedBooks = new WeakMap();
let _arrayOfBooks = new WeakMap();
let _lastBook = new WeakMap();
let _currentBook = new WeakMap();
let _nextBook = new WeakMap();
export class BookList {
    constructor(readed, notReaded, books) {
        _numberOfReadedBooks.set(this, readed);
        _numberOfNotReadedBooks.set(this, notReaded);
        _arrayOfBooks.set(this, books);
        if (books !== undefined) {
            if (Array.isArray(books) === false) {
                _nextBook.set(this, null);
                _lastBook.set(this, null);
                _currentBook.set(this, books);
            } else if (books.length === 1) {
                _nextBook.set(this, null);
                _lastBook.set(this, null);
                _currentBook.set(this, books[0]);
            } else {
                _lastBook.set(this, null);
                _nextBook.set(this, books[1]);
                _currentBook.set(this, books[0]);
            }
        }
    }
    //#region getter and setter
    get readed() {
        return _numberOfReadedBooks.get(this);
    }

    set readed(value) {
        if (value < 0) {
            throw new Error("Invalid number of readed books.");
        } else {
            _numberOfReadedBooks.set(this, value);
        }
    }

    get notReaded() {
        return _numberOfNotReadedBooks.get(this);
    }

    set notReaded(value) {
        if (value < 0) {
            throw new Error("Invalid number of not readed books.");
        } else {
            _numberOfNotReadedBooks.set(this, value);
        }
    }

    get books() {
        return _arrayOfBooks.get(this);
    }

    set books(value) {
        if (Array.isArray(value) === false) {
            throw new Error("Books must be an array.");
        } else {
            _arrayOfBooks.set(this);
        }
    }

    get currentBook() {
        return _currentBook.get(this);
    }

    set currentBook(index) {
        _currentBook.set(this, index);
    }

    get nextBook() {
        return _nextBook.get(this);
    }

    set nextBook(index) {
        _nextBook.set(this, index);
    }

    get lastBook() {
        return _lastBook.get(this);
    }

    set lastBook(index) {
        _lastBook.set(this, index);
    }
    //#endregion

    //method
    finishCurrentBook() {
        this.lastBook = this.currentBook;
        this.currentBook.readed = true;
        this.currentBook.readDate = new Date(Date.now());
        this.currentBook = this.nextBook;

        let unreaded = this.books.filter((book) => {
            return book.readed === false;
        });
        let randomNextBook = Math.floor(Math.random() * unreaded.length);
        this.nextBook = unreaded[randomNextBook];

    }

    addBooks(book) {
        if (Array.isArray(book)) {
            this.books = this.books.concat(book);
        } else {
            this.books.push(book);
        }
    }
}