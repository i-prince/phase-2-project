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
      <div className="input-group mb-3">
        <textarea
          className="form-control"
          placeholder="Add your comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
