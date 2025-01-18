import React, { useState } from "react";
import axios from "axios";

const EditPost = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image); // Append the new image if provided
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${post._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Post updated Successfully!");
      onPostUpdated(response.data);
    } catch (error) {
      console.error(error);
      alert("Error updating post");
    }
  };

  return (
    <div>
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
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {post.image && (
            <div>
              <p>Current Image:</p>
              <img
                src={`http://localhost:5000${post.image}`}
                alt={post.title}
                style={{ width: "200px" }}
              />
            </div>
          )}
        </div>

        <button type="submit"> Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
