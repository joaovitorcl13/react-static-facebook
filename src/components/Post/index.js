import React from 'react';
import './styles.css'

import Comment from '../Comment'

function Post({ post }) {
  return (
    <div className="container-post">
      <div className="author">

        <img className="post-author-avatar" src={post.author.avatar} />
        <div className="post-author-info">
          <text className="post-author-name" >{post.author.name}</text>
          <text className="post-author-date" >{post.date}</text>
        </div>

      </div>

      <div className="post-content">
        <text className="post-content-text">{post.content}</text>
      </div>
      <div className="line"/>
      <div className="comments">
        {post.comments.map(comment => <Comment  key={comment.id}comment={comment} />)}
      </div>
    </div>
  );
}
export default Post;