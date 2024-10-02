class ReviewModel{
    id: number;
    userEmail:string;
    date: string;
    rating:number;
    book_id:number;
    reviewDescription:string;

    constructor(id:number,userEmail:string,date:string,rating:number,book_id:number,reviewDescription:string) {
        this.book_id = book_id;
        this.date = date;
        this.reviewDescription = reviewDescription;
        this.id = id;
        this.rating = rating;
        this.userEmail = userEmail;

    }
}

export default ReviewModel;