import {
  businessData,
  changeData,
  characterData,
  competitionData,
  courageData,
  educationData,
  quoteData,
} from "../dummy data/quoteData";

export const setHeartIconClicked = (clicked) => ({
  type: 'SET_HEART_ICON_CLICKED',
  payload: clicked,
});

export const setLikedQuotes = (likedQuotes) => ({
  type: 'SET_LIKED_QUOTES',
  payload: likedQuotes,
});

export const toggleLike = (quoteId) => ({
  type: 'TOGGLE_LIKE',
  payload: quoteId,
});

// Modify the fetchQuotes action to use the appropriate dummy data based on the selected tag
export const fetchQuotes = (selectedTag) => async (dispatch) => {
  try {
     

    // Use the dummy data based on the selected tag
    let data;
    switch (selectedTag) {
      case "business":
        data = businessData;
        break;
      case "character":
        data = characterData;
        break;
      case "change":
        data = changeData;
        break;
      case "education":
        data = educationData;
        break;
      case "competition":
        data = competitionData;
        break;
      case "courage":
        data = courageData;
        break;
      default:
        data = quoteData;
    }

    dispatch({ type: "SET_QUOTES", payload: data.results });
  } catch (error) {
    console.error("Error fetching quotes:", error.message);
  }
};
