import React from 'react';
import './image.scss';
import rect1 from '../../assets/Rectangle 3.png';

const Image = () => {
    return (
        <>
            <div className="image-container">
                <img className="image" src={rect1} alt="people images" />
            </div>
        </>
    )
};

export default Image;

