import { Book } from "./Book";
import { BorrowRecord } from "./BorrowRecord";
import { User } from "./User";
import { Member } from "./Member";

// Create some books
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction", true);
const book2 = new Book(2, "1984", "George Orwell", "Dystopian", true);
const book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee", "Classic", true);

// Store books in an array (library)
const library: Book[] = [book1, book2, book3];

// Create a member
const member1 = new Member(101, "Alice","password123");

// Simulate member registering and logging in
member1.register();
member1.login();

// Search books with query "the"
const foundBooks = member1.searchBooks(library, "the");
console.log("Search results:", foundBooks.map(b => b.title));

// Member borrows a book
const borrowRecord = member1.borrowBook(book1);

// Store all borrow records in a global array (simulate database)
const allBorrowRecords: BorrowRecord[] = [borrowRecord];

// Member returns the book
member1.returnBook(borrowRecord);

