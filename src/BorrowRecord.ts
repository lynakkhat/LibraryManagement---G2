import { Book } from "./Book";
import { Member } from "./Member";

export class BorrowRecord {
    constructor(private recordId:number, 
        private book:Book, 
        private member:Member,
        private borrowDate:Date,
        private dueDate:Date, 
        private returnDate:Date){

    }

    public markReturn(returnDate:Date):void {
        this.returnDate = returnDate;
        console.log(`Book " ${this.book.title}" returned on ${returnDate.toDateString()} by ${this.member.getUserName()}.`);
        
    }

    public isOverdue(currentDate: Date):void {
        if (!this.returnDate && currentDate > this.dueDate) {
            console.log(`Book "${this.book.title}" is overdue! Due on ${this.dueDate.toDateString()}.`);
        } else {
            console.log(`Book "${this.book.title}" is not overdue.`);
        }
    }

    public getBook():Book {
        return this.book;
    }

    public getMember():Member {
        return this.member;
    }

    public getReturnDate():Date | null {
        return this.returnDate;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }


}