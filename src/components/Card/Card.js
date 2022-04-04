import React from 'react';
import './Card.css'

const Card = ({ singleReview }) => {
    const { name, review, rating } = singleReview
    return (
        <div className='card'>
            
                <h2>Name: {name}</h2>
                <p className='ratings-color'>Rating: {rating}</p>
                <p>{review}</p>
            
          

        </div>
    );
};

export default Card;