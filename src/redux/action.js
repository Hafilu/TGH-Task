import axios from "axios";

export const setHeartIconClicked = (clicked) => ({
  type: "SET_HEART_ICON_CLICKED",
  payload: clicked,
});

export const setSelectedQuote = (quote) => ({
  type: "SET_SELECTED_QUOTE",
  payload: quote,
});
export const setSelectedTag = (tag) => ({
  type: "SET_SELECTED_TAG",
  payload: tag,
});

export const toggleLike = (quote) => ({
  type: "TOGGLE_LIKE",
  payload: quote,
});

export const initializeLikedQuotes = () => {
  const storedLikedQuotes = localStorage.getItem("likedQuotes");
  const initialLikedQuotes = storedLikedQuotes
    ? JSON.parse(storedLikedQuotes)
    : [];
  console.log("from local strg", initialLikedQuotes);
  return {
    type: "INITIALIZE_LIKED_QUOTES",
    payload: initialLikedQuotes,
  };
};

export const fetchQuotes = (selectedTag) => async (dispatch) => {
  try {
    const apiUrl = "https://api.quotable.io/quotes";
    const params = selectedTag ? { tags: selectedTag } : {};

    const response = await axios.get(apiUrl, { params });

    const quotes = response.data.results;

    dispatch({ type: "SET_QUOTES", payload: quotes });
  } catch (error) {
    console.error("Error fetching quotes:", error.message);
  }
};
