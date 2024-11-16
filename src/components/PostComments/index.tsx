import React, { useState } from 'react';

const PostComment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          data-testid="comment-input" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
        />
        <button type="submit" data-testid="submit-button">Comentar</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} data-testid="comment-item">{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComment;