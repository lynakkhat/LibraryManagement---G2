
export class Book {
    static filter: any;
    constructor(public bookId:number, 
        public title:string, 
        private author:string, 
        private category:string, 
        private isAvailable:boolean) {
    }
}