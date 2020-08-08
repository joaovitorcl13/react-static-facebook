import React from 'react';
import './styles.css'
function Comment({ comment }) {
  return (
    <div className="comment">
      <img className="comment-author-avatar" src={comment.author.avatar}/>
      <div className="comment-content">
        <text className="comment-content-author" >{comment.author.name} </text>
        <text className="comment-content-text" >{comment.content}</text>

      </div>

    </div>
  );
}
export default Comment;
