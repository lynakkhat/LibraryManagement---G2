import { Book } from "./Book";
import { BorrowRecord } from "./BorrowRecord";

export class User {
    constructor(
        private userId: number, 
        protected userName: string, 
        private email: string, 
        private password: string
    ) {}

    public register(): void {
        console.log(`User ${this.userName} has been registered successfully.`);
    }

    public login(): void {
        console.log(`User ${this.userName} has logged in successfully.`);
    }

    public searchBooks(books: Book[], query: string): Book[] {
        return books.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    // viewBorrowBook can't access borrowedBooks here,
    // so either remove it or make it abstract or implement in subclass
    public viewBorrowBook(borrowRecords: BorrowRecord[]): BorrowRecord[] {
        // filter borrow records by this user
        const myRecords = borrowRecords.filter(record => 
            record.getMember().getUserId() === this.userId
        );
        console.log(`${this.userName} has borrowed:`, myRecords);
        return myRecords;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getUserId(): number {
        return this.userId;
    }
}
