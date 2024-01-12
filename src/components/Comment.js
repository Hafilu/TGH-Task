 

import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular  } from '@fortawesome/free-regular-svg-icons';
import "./Comment.css";
 

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);  
  const [isLiked, setIsLiked] = useState(false)

 
  
    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };



  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };


  return (
    <div className="comment-section">
      <ul className="comment-list">
      {comments.length === 0 ? (
      <li className="comment-item">
        <p className="no-comments-text">No comments yet.</p>
      </li>
    ) :
       (
         comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <div className="profile-info">
              <img src={process.env.PUBLIC_URL + "/dp.jpg"} alt="Profile" />
              <div className="comment">
                <div className="comment-content">
                  <h6 className="comment-name">Jhon Doe</h6>
                  <p className="quote-text">{comment}</p>
                </div>
                <div className="comment-actions">
                <FontAwesomeIcon
              icon={isLiked ? faHeartSolid : faHeartRegular}
              className={isLiked ? 'liked-icon pe-3' : 'pe-3'}
              onClick={handleLikeClick}
            />
                </div>
              </div>
            </div>
          </li>
        )))}
      </ul>

      <Form onSubmit={handleCommentSubmit} className="comment-form">
        <Form.Group className="d-flex align-items-center">
          <Image
            src={process.env.PUBLIC_URL + "/dp.jpg"}  
            alt="Profile"
            roundedCircle
            className="profile-photo mr-3"
          />
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
            className="comment-input"
          />
          <Button type="submit" className="post-button">
            POST
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CommentSection;
