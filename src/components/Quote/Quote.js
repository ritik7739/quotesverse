import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';

const Quote = ({ quoteData, onLike, onComment }) => {
  const [commentInput, setCommentInput] = useState('');
  const [isLiked, setIsLiked] = useState(false); // New state variable

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onComment(quoteData._id, commentInput);
    setCommentInput('');
  };

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`"${quoteData.content}" - ${quoteData.author}`);
    const url = encodeURIComponent('http://your-website.com');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent('http://your-website.com');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the isLiked state
    onLike(quoteData._id);
  };

  return (
    <div>
      <p>{quoteData.content}</p>
      <button onClick={handleLike}>
        <FontAwesomeIcon icon={isLiked ? fasHeart : farHeart} style={{ color: isLiked ? 'red' : 'black' }} /> ({quoteData.likes})
      </button>
      <button onClick={handleTwitterShare}>
        <FontAwesomeIcon icon={faShareSquare} />
      </button>
      <button onClick={handleFacebookShare}>
        <FontAwesomeIcon icon={faShareSquare} />
      </button>
      <form onSubmit={handleCommentSubmit}>
        <input 
          type="text" 
          value={commentInput} 
          onChange={(e) => setCommentInput(e.target.value)} 
          placeholder="Add a comment" 
        />
        <button type="submit">
          <FontAwesomeIcon icon={faComment} />
        </button>
      </form>
      {quoteData.comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
};

export default Quote;