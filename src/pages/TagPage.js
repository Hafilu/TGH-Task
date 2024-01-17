import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useDispatch  } from 'react-redux';
import { fetchQuotes, setSelectedQuote, setSelectedTag } from '../redux/action';
import { setHeartIconClicked } from '../redux/action';
import axios from 'axios';
import './TagPage.css';

const TrendingTopics = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
   

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/tags');
        const filteredTags = response.data.filter(tag => tag.quoteCount > 5);
        setTags(filteredTags);
      } catch (error) {
        console.error('Error fetching tags:', error.message);
      }
    };

    fetchTags();
  }, []);

  const handleTagClick = (tag) => {
    
    
    dispatch(fetchQuotes(tag.slug));
    
    setTimeout(() => {
      dispatch(setHeartIconClicked(false));
      dispatch(setSelectedQuote(null));
     
    }, 1000);
    setTimeout(() => {
       dispatch(setSelectedTag(tag));
    }, 500);
    
  };

  const handleShowAllQuotes = () => {
    dispatch(fetchQuotes(null));  
    setTimeout(() => {
      dispatch(setHeartIconClicked(false));
    }, 1000);
    setTimeout(() => {
      dispatch(setSelectedTag(null));
    }, 500);
  };

  return (
    <div className="trending-topics">
      <div className="heading-with-settings">
        <h5>Trending Topics</h5>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
      </div>
      <div className="show-all-link">
        <a href="#" className="blue-link" onClick={handleShowAllQuotes}>
          show all quotes
        </a>
      </div>
      <div className="trending-items">
        <ul>
          {tags.slice(0, 6).map((tag) => (
            <li key={tag._id}>
              <div className={`tag-line`}>
                <span>{tag.name}</span>
                <a href="#" onClick={() => handleTagClick(tag)}>{`#${tag.slug}`}</a>
                <span>{`${tag.quoteCount} quotes`}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingTopics;
