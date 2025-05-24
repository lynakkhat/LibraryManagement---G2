import { Book } from "./Book";
import { BorrowRecord } from "./BorrowRecord";
import { User } from "./User";

export class Admin extends User {
    private books: Book[] = [];
    private users: User[] = [];
    private borrowRecords: BorrowRecord[] = [];
    constructor(userId:number, userName:string,password:string){
        super(userId, userName,password);
    }

    public addBook(book:Book):void {
        this.books.push(book);
        console.log(`Book "${book.title}" added.`);
        
    }

    public update(book:Book):void {
        const index = this.books.findIndex(b => b.bookId === book.bookId);
        if (index !== -1) {
            this.books[index] = book;
            console.log(`Book with ID ${book.bookId} updated.`);
        } else {
            console.log(`Book with ID ${book.bookId} not found.`);
        }
    }

    public deleteBook(bookId:number):void {
        const index = this.books.findIndex(b => b.bookId === bookId);
        if (index !== -1) {
            const removed = this.books.splice(index, 1)[0];
            console.log(`Book "${removed.title}" deleted.`);
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    }

    public viewUsers():User[] {
        console.log("All users:");
        return this.users;
    }

    public viewOverDueBooks():BorrowRecord[] {
        const today = new Date();
        const overdue = this.borrowRecords.filter(record => {
            return record.getReturnDate() === null && record.getDueDate() < today;
        });
        console.log(`Overdue books found: ${overdue.length}`);
        return overdue;
    }
}