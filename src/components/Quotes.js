 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular ,faComment, faPaperPlane} from '@fortawesome/free-regular-svg-icons';
 

import './Quotes.css';
import {   toggleLike } from '../redux/action';

const QuoteComponent = ({ quote, onClick }) => {
  const dispatch = useDispatch();
  const likedQuotes = useSelector((state) => state.likedQuotes);

  const isLiked = likedQuotes.includes(quote?._id);

  const handleLikeClick = () => {
    dispatch(toggleLike(quote._id));
     
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
              icon={isLiked ? faHeartSolid : faHeartRegular}
              className={isLiked ? 'liked-icon pe-3' : 'pe-3'}
              onClick={handleLikeClick}
            />
            <FontAwesomeIcon icon={faComment} className="pe-3" onClick={onClick} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
