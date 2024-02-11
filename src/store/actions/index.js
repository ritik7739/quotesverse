import axios from 'axios';

// Action Types
export const FETCH_QUOTES = 'FETCH_QUOTES';
export const LIKE_QUOTE = 'LIKE_QUOTE';
export const UNLIKE_QUOTE = 'UNLIKE_QUOTE';
export const FETCH_TAGS = 'FETCH_TAGS';

// Action Creators
export const fetchQuotes = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes');
      dispatch({ type: FETCH_QUOTES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const likeQuote = (quoteId) => ({
  type: LIKE_QUOTE,
  payload: quoteId,
});

export const unlikeQuote = (quoteId) => ({
  type: UNLIKE_QUOTE,
  payload: quoteId,
});

export const fetchTags = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://api.quotable.io/tags');
      dispatch({ type: FETCH_TAGS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};