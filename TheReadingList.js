import {
    Book
} from './Book.js';
import {
    BookList
} from './BookList.js';

let book = [new Book("Nghia", "Male", "Nghia dep trai", false), new Book("A", "female", "hihi", false), new Book("B", "female", "huhu", false), new Book("C", "Male", "haha", false)];
let bookX = new Book("D", "Male", ":v:v", false);

let bookList = new BookList(0,5,book);
bookList.addBooks(bookX);