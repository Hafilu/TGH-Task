import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import tagsData from '../dummy data/tagData';
import { useDispatch } from 'react-redux';
import { fetchQuotes } from '../redux/action';
import "./TagPage.css";

const TrendingTopics = () => {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    dispatch(fetchQuotes(tag));  
  };

  return (
    <div className="trending-topics">
      <div className="heading-with-settings">
        <h5>Trending Topics</h5>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
      </div>
      <div className="show-all-link">
        <a href="#" className="blue-link">
          show all quotes
        </a>
      </div>
      <div className="trending-items">
        <ul>
          {tagsData.map((tag) => (
            <li key={tag._id}>
              <div className={`tag-line ${selectedTag === tag ? 'active' : ''}`}>
                <span >{tag.name}</span>
                <a href= "#" onClick={() => handleTagClick(tag.slug)}>{`#${tag.slug}`}</a>
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
