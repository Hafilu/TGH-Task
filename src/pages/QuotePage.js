import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import QuoteComponent from "../components/Quotes";
import { fetchQuotes } from "../redux/action";
import "./QuotePage.css";
import QuoteDetail from "./QuoteDetails";

const QuotesPage = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => {
    return state.heartIconClicked
      ? state.likedQuotes.map((likedId) =>
          state.quotes.find((quote) => quote._id === likedId)
        )
      : state.quotes;
  });
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <Container fluid>
      {quotes.length === 0 && !selectedQuote ? (
        <Row className="quote-row">
          <Col xs={6} className="quote-col">
            <p className="pt-3">No liked quotes available.</p>
          </Col>
        </Row>
      ) : selectedQuote ? (
        <Row className="quote-row">
          <Col xs={6} className="quote-col p-0">
            <QuoteDetail
              quote={selectedQuote}
              onClick={() => setSelectedQuote(null)}
            />
          </Col>
        </Row>
      ) : (
        quotes.map((quote, index) => (
          <Row key={index} className="quote-row">
            <Col xs={6} className="quote-col">
              <QuoteComponent
                quote={quote}
                onClick={() => setSelectedQuote(quote)}
              />
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default QuotesPage;
