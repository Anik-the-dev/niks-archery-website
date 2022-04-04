import React from 'react';
import useReviews from '../hooks/useReviews'
import Card from './Card/Card';
import '../css/style.css'

const Reviews = () => {
    const [reviews,] = useReviews()

    return (
        <div className='project-body'>
            <h1 className='text-center my-4 lg'>Our Delighted Users Review</h1>
            <div className='grid  project-container'>

                {
                    reviews.map(review => <Card
                        key={review.id} singleReview={review}
                    ></Card>)
                }
            </div>
        </div>

    );
};

export default Reviews;