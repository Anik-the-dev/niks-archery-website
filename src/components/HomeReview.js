import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Card from './Card/Card';

const HomeReview = () => {
    const [reviews,] = useReviews()
    return (
        <div>
            <h1 className='text-center my-5 lg'>Our Top 3 User's Reviews</h1>
            <div className='grid'>
            {
                reviews.slice(0,3).map(review => <Card
                    key={review.id} singleReview={review}
                ></Card>)

            }
            </div>
            <Link to='/reviews'>
                <button className='btn w-100 mb-50 p-2'><p>See More Reviews</p></button>
            </Link>


        </div>
    );
};

export default HomeReview;