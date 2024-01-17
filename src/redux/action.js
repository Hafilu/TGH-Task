
import axios from "axios";

export const setHeartIconClicked = (clicked) => ({
  type: 'SET_HEART_ICON_CLICKED',
  payload: clicked,
});

export const setSelectedQuote = (quote) => ({
  type: 'SET_SELECTED_QUOTE',
  payload: quote,
});
export const setSelectedTag = (tag) => ({
  type: 'SET_SELECTED_TAG',
  payload: tag,
});

 
export const toggleLike = (quote) => ({
  type: 'TOGGLE_LIKE',
  payload: quote,
});

 
export const initializeLikedQuotes = () => {
  const storedLikedQuotes = localStorage.getItem('likedQuotes');
  const initialLikedQuotes = storedLikedQuotes ? JSON.parse(storedLikedQuotes) : [];
  console.log("from local strg",initialLikedQuotes);
  return {
    type: 'INITIALIZE_LIKED_QUOTES',
    payload: initialLikedQuotes,
  };
};


export const fetchQuotes = (selectedTag) => async (dispatch) => {
  try {
    // Define the API endpoint and parameters
    const apiUrl = 'https://api.quotable.io/quotes';
    const params = selectedTag ? { tags: selectedTag } : {};

    // Fetch quotes from the quotable API
    const response = await axios.get(apiUrl, { params });

    // Extract the quotes from the response
    const quotes = response.data.results;

    // Dispatch the quotes to the store
    dispatch({ type: 'SET_QUOTES', payload: quotes });
  } catch (error) {
    console.error('Error fetching quotes:', error.message);
  }
};