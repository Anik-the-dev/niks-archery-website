import React from 'react';
import useReviews from '../hooks/useReviews'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <div>
            
        </div>
    );
};

export default Reviews;