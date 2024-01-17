import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./Quotes.css";
import { toggleLike } from "../redux/action";

const QuoteComponent = ({ quote, onClick }) => {
  const dispatch = useDispatch();
  const likedQuotes = useSelector((state) => state.likedQuotes);
  const [isLiked, setIsLiked] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    setIsLiked(likedQuotes.some((liked) => liked._id === quote._id));
  }, [quote, likedQuotes]);

  const handleLikeClick = () => {
    dispatch(toggleLike(quote));
  };

  const shareUrl = "http://example.com";

  const handlePaperPlaneClick = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <div className="quote-container">
      <div className="profile-info">
        <img src={process.env.PUBLIC_URL + "/dp.jpg"} alt="Profile" />
        <div>
          <div onClick={onClick}>
            <h6>{quote?.author}</h6>
            <p className="quote-text">{quote?.content}</p>
          </div>
          <div className="icons-container">
            <FontAwesomeIcon
              icon={isLiked ? faHeartSolid : faHeartRegular}
              className={isLiked ? "liked-icon pe-3" : "pe-3"}
              onClick={handleLikeClick}
            />
            <FontAwesomeIcon
              icon={faComment}
              className="pe-3"
              onClick={onClick}
            />

            <FontAwesomeIcon
              icon={faPaperPlane}
              onClick={handlePaperPlaneClick}
            />

            {showSocialIcons && (
              <div className="social-icons-tooltip">
                <FacebookShareButton url={shareUrl} className="pe-2">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} className="pe-2">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
