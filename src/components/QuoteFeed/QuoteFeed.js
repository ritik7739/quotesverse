import React, { useEffect, useState } from 'react';
import Quote from '../Quote/Quote';
import './QuoteFeed.css';

const QuoteFeed = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const quotesWithLikesAndComments = data.results.map((quote, index) => ({ 
          ...quote, 
          comments: [], 
          username: `User ${index + 1}` // Add arbitrary username
        }));
        setQuotes(quotesWithLikesAndComments);
      })
      .catch(error => {
        console.log('Fetch error: ', error);
      });
  }, []);

  const handleLike = (quoteId) => {
    setQuotes(quotes.map(quote => 
      quote._id === quoteId ? { ...quote, likes: quote.likes} : quote
    ));
  };

  const handleComment = (quoteId, comment) => {
    setQuotes(quotes.map(quote => 
      quote._id === quoteId ? { ...quote, comments: [...quote.comments, comment] } : quote
    ));
  };

  console.log(quotes);

  return (
    <div className="quoteFeed">
      {Array.isArray(quotes) && quotes.map((quote) => (
        <div key={quote._id}>
          <h2>{quote.username}</h2>
          <Quote quoteData={quote} onLike={() => handleLike(quote._id)} onComment={handleComment} />
        </div>
      ))}
    </div>
  );
};

export default QuoteFeed;