import { useEffect, useState } from "react";
import BookModel from "../../Models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { StarReview } from "../Utils/StarReview";
import { CheckoutAndReviewBox } from "./CheckoutAndReivewBox";
import ReviewModel from "../../Models/ReviewModel";
import {LatestReview} from "./LatestReviews";

export const BookCheckoutPage = () => {
    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState<string | null>(null);

    // Review State
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [totalStars, setTotalStars] = useState(0);
    const [isLoadingReview, setIsLoadingReview] = useState(true);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const baseUrl: string = `http://localhost:8078/api/books/${bookId}`;
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }

                const responseJson = await response.json();
                const loadedBook: BookModel = {
                    id: responseJson.id,
                    title: responseJson.title,
                    author: responseJson.author,
                    description: responseJson.description,
                    copies: responseJson.copies,
                    copiesAvailable: responseJson.copiesAvailable,
                    category: responseJson.category,
                    img: responseJson.img,
                };

                setBook(loadedBook);
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                setHttpError(error.message);
            }
        };
        fetchBook();
    }, [bookId]);

    // Review UseEffect
    useEffect(() => {
        const fetchBooksReview = async () => {
            try {
                const reviewUrl: string = `http://localhost:8078/api/reviews/search/findByBookId?bookId=${bookId}`;
                const responseReviews = await fetch(reviewUrl);

                if (!responseReviews.ok) {
                    throw new Error("Something went wrong!");
                }

                const responseJsonReviews = await responseReviews.json();
                const responseData = responseJsonReviews._embedded.reviews;

                const loadedReviews: ReviewModel[] = [];
                let weightedStarReviews: number = 0;

                for (const key in responseData) {
                    loadedReviews.push({
                        id: responseData[key].id,
                        userEmail: responseData[key].userEmail,
                        date: responseData[key].date,
                        rating: responseData[key].rating,
                        book_id: responseData[key].bookId,
                        reviewDescription: responseData[key].review_description,
                    });
                    weightedStarReviews += responseData[key].rating;
                }

                if (loadedReviews.length > 0) {
                    const averageRating = (weightedStarReviews / loadedReviews.length).toFixed(1);
                    setTotalStars(Number(averageRating));
                }

                setReviews(loadedReviews);
                setIsLoadingReview(false);
            } catch (error: any) {
                setIsLoadingReview(false);
                setHttpError(error.message);
            }
        };
        fetchBooksReview();
    }, [bookId]);

    if (isLoading || isLoadingReview) {
        return <SpinnerLoading />;
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <div>
            <div className='container d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className='col-sm-2 col-md-2'>
                        {book?.img ? (
                            <img src={book?.img} width='226' height='349' alt='Book' />
                        ) : (
                            <img
                                src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                width='226'
                                height='348'
                                alt='Book'
                            />
                        )}
                    </div>
                    <div className='col-4 col-md-4 container'>
                        <div className='ml-2'>
                            <h2>{book?.title}</h2>
                            <h5 className='text-primary'>{book?.author}</h5>
                            <p className='lead'>{book?.description}</p>
                            <StarReview rating={totalStars} size={32} />
                        </div>
                    </div>
                    <CheckoutAndReviewBox book={book} mobile={false} />
                </div>
                <hr/>
                <LatestReview reviews={reviews} bookId={book?.id} mobile={false}/>
            </div>
            <div className='container d-lg-none mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    {book?.img ? (
                        <img src={book?.img} width='226' height='349' alt='Book' />
                    ) : (
                        <img
                            src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                            width='226'
                            height='348'
                            alt='Book'
                        />
                    )}
                </div>
                <div className='mt-4'>
                    <div className='ml-2'>
                        <h2>{book?.title}</h2>
                        <h5 className='text-primary'>{book?.author}</h5>
                        <p className='lead'>{book?.description}</p>
                        <StarReview rating={totalStars} size={32} />
                    </div>
                </div>
                <CheckoutAndReviewBox  book={book} mobile={true} />
                <hr />
                <LatestReview reviews={reviews} bookId={book?.id} mobile={true}/>
            </div>
        </div>
    );
};
