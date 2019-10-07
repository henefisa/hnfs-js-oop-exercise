let _numberOfReadedBooks = new WeakMap();
let _numberOfNotReadedBooks = new WeakMap();
let _arrayOfBooks = new WeakMap();
let _lastBook = new WeakMap();
let _currentBook = new WeakMap();
let _nextBook = new WeakMap();
class BookList {
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

let _title = new WeakMap();
let _genre = new WeakMap();
let _author = new WeakMap();
let _readed = new WeakMap();
let _readDate = new WeakMap();
class Book {
    constructor(title, genre, author, readed, readDate) {
        _title.set(this, title);
        _genre.set(this, genre);
        _author.set(this, author);
        _readed.set(this, readed);
        _readDate.set(this, readDate);
    }
    //#region getter and setter
    get title() {
        return _title.get(this);
    }

    set title(name) {
        if (name === '') {
            throw new Error("Title can't be blank.");
        } else {
            _title.set(this, name);
        }
    }

    get genre() {
        return _genre.get(this);
    }

    set genre(gender) {
        if (name === '') {
            throw new Error("Genre can't be blank.");
        } else {
            _genre.set(this, gender);
        }
    }

    get author() {
        return _author.get(this);
    }

    set author(name) {
        if (name === '') {
            throw new Error("Author can't be blank.");
        } else {
            _author.set(this, name);
        }
    }

    get readed() {
        return _readed.get(this);
    }

    set readed(isRead) {
        if (typeof isRead !== "boolean") {
            throw new Error("Readed must be true or false");
        } else {
            _readed.set(this, isRead);
        }
    }

    get readDate() {
        return _readDate.get(this);
    }

    set readDate(date) {
        if (typeof date !== "object") {
            throw new Error("Read date must be an Date object.");
        } else {
            _readDate.set(this, date);
        }
    }

    //#endregion getter and setter
}

//test @@
let booklist = new BookList(10, 10, [new Book("hola", "sss", "aaa", true), new Book("123", "123", "123", false), new Book("123", "123", "123", false), new Book("123", "123", "123", false), new Book("123", "123", "123", false)])