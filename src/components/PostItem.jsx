import React from "react";

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{post.title}</h3>

      <p>{post.content}</p>
      {post.image && (
        <img
          src={`http://localhost:5000${post.image}`}
          alt={post.title}
          style={{ width: "200px" }}
        />
      )}
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
};

export default PostItem;
