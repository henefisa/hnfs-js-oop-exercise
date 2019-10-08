let _title = new WeakMap();
let _genre = new WeakMap();
let _author = new WeakMap();
let _readed = new WeakMap();
let _readDate = new WeakMap();
export class Book {
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