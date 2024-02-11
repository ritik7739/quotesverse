import { FETCH_QUOTES, LIKE_QUOTE, UNLIKE_QUOTE, FETCH_TAGS } from '../actions';

const initialState = {
  quotes: [],
  likedQuotes: [],
  tags: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return { ...state, quotes: action.payload };
    case LIKE_QUOTE:
      return { ...state, likedQuotes: [...state.likedQuotes, action.payload] };
    case UNLIKE_QUOTE:
      return { ...state, likedQuotes: state.likedQuotes.filter(quoteId => quoteId !== action.payload) };
    case FETCH_TAGS:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
}