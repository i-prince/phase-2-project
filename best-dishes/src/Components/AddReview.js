import React, { useState } from 'react';

function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onCommentSubmit(comment);
    setComment(''); // Clear the comment input field after submission
  };

  return (
    <div>
      <textarea
        placeholder="Add your comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CommentForm;
