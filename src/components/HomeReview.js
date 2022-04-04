import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Card from './Card/Card';

const HomeReview = () => {
    const [reviews,] = useReviews()
    return (
        <div>
            <h1 className='text-center my-5 lg'>Our Delighted Users Review</h1>
            <div className='grid'>
            {
                reviews.slice(0,3).map(review => <Card
                    key={review.id} singleReview={review}
                ></Card>)

            }
            </div>
            <Link to='/reviews'>
                <button className='btn w-100'><p>See More Reviews</p></button>
            </Link>


        </div>
    );
};

export default HomeReview;