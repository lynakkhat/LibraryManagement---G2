import { Book } from "./Book";
import { BorrowRecord } from "./BorrowRecord";
import { User } from "./User";

export class Member extends User {
    private borrowedBooks: BorrowRecord[];
    private returnedBooks: BorrowRecord[];
    
    constructor(userId:number, userName:string, email:string, password:string){
        super(userId, userName, email, password);
        this.borrowedBooks = [];
        this.returnedBooks = [];
    }

    public readBook(book:Book):void {
        console.log(`${book.title} is being read by ${this.getUserName()}`);
    }

    public borrowBook(book:Book):BorrowRecord {
        const borrowDate = new Date();
        const dueDate = new Date();
        dueDate.setDate(borrowDate.getDate() + 14); // due in 2 weeks

        const borrowRecord = new BorrowRecord(
            Date.now(),
            book,
            this,
            borrowDate,
            dueDate,
            null as any
        );
        this.borrowedBooks.push(borrowRecord);
        console.log(`${this.getUserName()} borrowed "${book.title}" on ${borrowDate.toDateString()}`);
        return borrowRecord;
    }

    public returnBook(borrowRecord:BorrowRecord):void {
        const returnDate = new Date();
        borrowRecord.markReturn(returnDate);

        // Remove from borrowed list
        this.borrowedBooks = this.borrowedBooks.filter(record => record !== borrowRecord);

        // Add to returned list
        this.returnedBooks.push(borrowRecord);

        console.log(`${this.getUserName()} returned "${borrowRecord.getBook().title}" on ${returnDate.toDateString()}`);
    }

    public viewBorrowedBook():BorrowRecord[] {
        console.log(`${this.getUserName()}'s currently borrowed books:`, this.borrowedBooks);
        return this.borrowedBooks;
    }
}
