import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuotesPage from "./pages/QuotePage";
import TrendingTopics from "./pages/TagPage";
import ProfilePage from "./pages/ProfilePage";
import TopBar from "./pages/TopBar";

const App = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Check if it's a mobile screen on initial load
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <Container fluid>
        <TopBar />

        {isMobileScreen ? (
          // Mobile UI
          <Row className="vertical-lines">
            <Col xs={12} className="p-0">
              <QuotesPage />
            </Col>
          </Row>
        ) : (
          <Row className="vertical-lines">
            <Col xs={3} className="p-0">
              <ProfilePage />
            </Col>
            <Col xs={6} className="p-0">
              <QuotesPage />
            </Col>
            <Col xs={3} className="p-0">
              <TrendingTopics />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default App;
