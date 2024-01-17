import React, {  useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import QuoteComponent from "../components/Quotes";
import { fetchQuotes , initializeLikedQuotes, setSelectedQuote, setSelectedTag } from "../redux/action";
import "./QuotePage.css";
import QuoteDetail from "./QuoteDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const QuotesPage = () => {
  const dispatch = useDispatch();
  const selectedQuote =useSelector((state)=> state.selectedQuote)
  const selectedTag =useSelector((state)=> state.selectedTag)
  const likedQuotes =useSelector((state)=> state.likedQuotes)
  
  const quotes = useSelector((state) => {
    return state.heartIconClicked
      ? state.likedQuotes 
      : state.quotes;
  });
   

  const handleTagClick = ()=>{
    
    dispatch(fetchQuotes());
    setTimeout(() => {
      dispatch(setSelectedTag(null));
    }, 500);
    
  }
   

  useEffect(() => {
    dispatch(fetchQuotes());
    dispatch(initializeLikedQuotes());
    console.log(likedQuotes);
  }, [dispatch]);

  
  

   

  return (
    <Container fluid>
      {quotes.length === 0 && !selectedQuote ? (
        <Row className="quote-row">
          <Col xs={6} className="quote-col">
            <p className="pt-3">No quotes available.</p>
          </Col>
        </Row>
      ) : selectedQuote  ? (
        <Row className="quote-row">
          <Col xs={6} className="quote-col p-0">
            <QuoteDetail
              quote={selectedQuote}
              onClick={() => dispatch(setSelectedQuote(null))}
            />
          </Col>
        </Row>
      ) : ( 

        <Row className="quote-row">
        <Col xs={6} className="quote-col">
        {selectedTag && (
          <div className="tag-headline" onClick={handleTagClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <h5 className="comments-headline">{selectedTag.name}</h5>
          </div>
        )}
        {quotes.map((quote, index) => (
         <Row key={
          index
         }  className="quote-row">
         <Col xs={6} className="quote-comp-col">
              <QuoteComponent
                quote={quote}
                onClick={() => dispatch(setSelectedQuote(quote))}
              />
            </Col>
          </Row>
        ))}
       </Col>
          </Row>
      
      )}
    </Container>
  );
};

export default QuotesPage;
