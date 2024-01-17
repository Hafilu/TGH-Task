import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { RWebShare } from 'react-web-share';   
import './Quotes.css';
import {   toggleLike } from '../redux/action';

const QuoteComponent = ({ quote, onClick }) => {
  const dispatch = useDispatch();
  const likedQuotes = useSelector((state) => state.likedQuotes);
  const [isLiked, setIsLiked] = useState();
  
console.log("from component",quote,likedQuotes.includes(quote));
 
useEffect(() => {
  // Check if the quote is liked
 

   setIsLiked(likedQuotes.includes(quote))
}, [quote, likedQuotes]);

console.log("is liked", isLiked);


  const handleLikeClick = () => {
    dispatch(toggleLike(quote));
  };

   

  return (
    <div className="quote-container">
      <div className="profile-info">
        <img src={process.env.PUBLIC_URL + '/dp.jpg'} alt="Profile" />
        <div>
          <div onClick={onClick}>
            <h6>{quote?.author}</h6>
            <p className="quote-text">{quote?.content}</p>
          </div>
          <div className="icons-container">
            <FontAwesomeIcon
              icon={isLiked  ? faHeartSolid : faHeartRegular}
              className={isLiked ? 'liked-icon pe-3' : 'pe-3'}
              onClick={handleLikeClick}
            />
            <FontAwesomeIcon icon={faComment} className="pe-3" onClick={onClick} />
            
            <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: "http://localhost:3000",
                    title: "GfG",
                }}
                onClick={() =>
                    console.log("shared successfully!")
                }
            >
              <FontAwesomeIcon icon={faPaperPlane}  />
                 
            </RWebShare>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
