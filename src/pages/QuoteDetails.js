import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import CommentSection from "../components/Comment";
import "./QuoteDetail.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../redux/action";
const QuoteDetail = ({ quote, onClick }) => {
  const dispatch = useDispatch();
  const likedQuotes = useSelector((state) => state.likedQuotes);

  const isLiked = likedQuotes.includes(quote);

  const handleLikeClick = () => {
    dispatch(toggleLike(quote));
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
                  <FontAwesomeIcon icon={faPaperPlane} />
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
