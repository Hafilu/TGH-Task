import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faEquals,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./TopBar.css";
import { setHeartIconClicked, setSelectedQuote } from "../redux/action";
import TrendingTopics from "./TagPage";

const TopBar = () => {
  const dispatch = useDispatch();
  const heartIconClicked = useSelector((state) => state.heartIconClicked);

  const [showTrendingTopics, setShowTrendingTopics] = useState(false);

  const handleHeartIconClick = () => {
    dispatch(setHeartIconClicked(true));
    dispatch(setSelectedQuote(null));
  };

  const handleHomeIconClick = () => {
    dispatch(setHeartIconClicked(false));
    dispatch(setSelectedQuote(null));
  };

  const handleEqualsClick = () => {
    setShowTrendingTopics((prev) => !prev);
  };

  const isMobileScreen = window.innerWidth <= 767;

  return (
    <div>
      {isMobileScreen ? (
        // Mobile UI
        <Row className="grid-row">
          <Col xs={12} className="mobile-column p-3">
            <div className="icon-container">
              <h5 className="quotverse-name p-0 mb-0">Quotverse</h5>
              <FontAwesomeIcon icon={faHome} onClick={handleHomeIconClick} />
              <FontAwesomeIcon
                icon={heartIconClicked ? faHeartSolid : faHeart}
                className={heartIconClicked ? "heart-clicked" : ""}
                onClick={handleHeartIconClick}
              />
              <FontAwesomeIcon icon={faEquals} onClick={handleEqualsClick} />
            </div>
            {showTrendingTopics && (
              <div className="trending-topics-container-mobile">
                <TrendingTopics />
              </div>
            )}
          </Col>
        </Row>
      ) : (
        <Row className="grid-row">
          <Col xs={3}>
            <div className="headline">
              <h4>Quotverse</h4>
            </div>
          </Col>
          <Col xs={6} className="grid-column">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHome} onClick={handleHomeIconClick} />
              <FontAwesomeIcon
                icon={heartIconClicked ? faHeartSolid : faHeart}
                className={heartIconClicked ? "heart-clicked" : ""}
                onClick={handleHeartIconClick}
              />
            </div>
          </Col>
          <Col xs={3}>
            <div className="d-flex justify-content-end pt-3">
              <FontAwesomeIcon icon={faEquals} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TopBar;
