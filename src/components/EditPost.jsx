import React, { useState } from "react";
import axios from "axios";

const EditPost = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/posts/${post._id}",
        { title, content }
      );
      alert("Post updated Successfully!");
      onPostUpdated(response.data);
    } catch (error) {
      console.error(error);
      alert("Error updating post");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit"> Update Post</button>
    </form>
  );
};

export default EditPost;
