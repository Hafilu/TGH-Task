 

const initialState = {
  quotes: [],
  likedQuotes: [],
  heartIconClicked: false,
  selectedQuote:null,
  selectedTag:null,
};
 

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUOTES':
      return { ...state, quotes: action.payload };
    case 'TOGGLE_LIKE':
      const likedQuote = action.payload;
      const isLiked = state.likedQuotes.includes(likedQuote);
      const updatedLikedQuotes = isLiked
        ? state.likedQuotes.filter((quote) => quote !== likedQuote)
        : [...state.likedQuotes, likedQuote];

        localStorage.setItem('likedQuotes', JSON.stringify(updatedLikedQuotes));

      return { ...state, likedQuotes: updatedLikedQuotes };
    case 'SET_HEART_ICON_CLICKED':
      return { ...state, heartIconClicked: action.payload };
    case 'SET_SELECTED_QUOTE':
      return { ...state, selectedQuote: action.payload };
    case 'SET_SELECTED_TAG':
      return { ...state, selectedTag: action.payload };
    case 'INITIALIZE_LIKED_QUOTES':
      console.log("from reducer",action.payload);
     console.log("red obj",{ ...state, likedQuotes: action.payload }); return { ...state, likedQuotes: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
