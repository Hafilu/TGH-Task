import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import CommentSection from "../components/Comment";
import "./QuoteDetail.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../redux/action";

const QuoteDetail = ({ quote, onClick }) => {
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
    <Container fluid className="p-0">
      <Row className="quote-detail-row">
        <Col xs={6} className="quote-det-col">
          <div className="quote-container">
            <div className="comments" onClick={onClick}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <h5 className="comments-headline">Comments</h5>
            </div>

            <div className="profile-info">
              <img src={process.env.PUBLIC_URL + "/dp.jpg"} alt="Profile" />
              <div>
                <h6>{quote.author}</h6>
                <p className="quote-text">{quote.content}</p>
                <div className="icons-container">
                  <FontAwesomeIcon
                    icon={isLiked ? faHeartSolid : faHeartRegular}
                    className={isLiked ? "liked-icon pe-3" : "pe-3"}
                    onClick={handleLikeClick}
                  />
                  <FontAwesomeIcon icon={faComment} className="pe-3" />

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
        </Col>
      </Row>
      <CommentSection />
    </Container>
  );
};

export default QuoteDetail;
