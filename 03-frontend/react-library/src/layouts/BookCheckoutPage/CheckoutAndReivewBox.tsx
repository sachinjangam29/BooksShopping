import BookModel from "../../Models/BookModel";
import { Link } from "react-router-dom";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean, currentLoansCount: number }> = (props) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b>{props.currentLoansCount}/5</b> books checked out
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className='text-success'> {/* Corrected from 'test-success' */}
                            Available
                        </h4>
                     :
                        <h4 className='text-danger'> {/* Corrected from 'test-danger' */}
                            Wait List
                        </h4>
                    }
                    <div className='row'>
                        <p className='col-6 lead'>
                            <b>{props.book?.copies}</b> copies
                        </p>
                        <p className='col-6 lead'>
                            <b>{props.book?.copiesAvailable}</b> available
                        </p>
                    </div>
                </div>
                <Link to='/signin' className='btn btn-success btn-lg'> {/* Corrected the invalid link */}
                    Sign In
                </Link>
                <hr />
                <p className='mt-3'>
                    This number can change until the order has been completed.
                </p>
                <p>
                    Sign in to be able to leave a review.
                </p>
            </div>
        </div>
    );
};
