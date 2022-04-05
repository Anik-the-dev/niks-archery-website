import React from 'react';
import { Link } from 'react-router-dom';
import archery from '../../archery.jpg'
import HomeReview from '../HomeReview';

const Display = () => {
    return (
        <div className='project-body'>
            <div className='project-container'>
                <div className=' grid customize-grid md-flex-reverse display-scale'>
                    <div className='display-details'>
                        <div className='display-title  md-font'>
                            <h1><span className='display-title-color'>Bear Archery</span> Brave Bow Set.</h1>
                        </div>
                        <div className='display-description'><p>
                        26” axle-to-axle introductory bow comes ready to shoot with two Safetyglass arrows.Features 15 to 25 lb. draw weight and 13.5 inch draw length range.Set also includes Whisker Biscuit.</p></div>
                        <button className='btn'>
                            {/* <p>Grab the Deal</p> */}
                            <Link className='btn-link' to='/blog'>Grab the Deal</Link>

                        </button>
                    </div>
                    <img src={archery}  alt="Archery"/>
   

                </div>

                {/* Review Section */}
                <HomeReview></HomeReview>

            </div>

        </div>
    );
};

export default Display;