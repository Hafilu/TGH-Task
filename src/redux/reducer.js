 
const initialState = {
  quotes: [],
  likedQuotes: [],
  heartIconClicked: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUOTES':
      return { ...state, quotes: action.payload };
    case 'TOGGLE_LIKE':
      const likedQuoteId = action.payload;
      const isLiked = state.likedQuotes.includes(likedQuoteId);
      const updatedLikedQuotes = isLiked
        ? state.likedQuotes.filter((id) => id !== likedQuoteId)
        : [...state.likedQuotes, likedQuoteId];

      return { ...state, likedQuotes: updatedLikedQuotes };
    case 'SET_HEART_ICON_CLICKED':
      return { ...state, heartIconClicked: action.payload };
    case 'SET_LIKED_QUOTES':
      return { ...state, likedQuotes: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
