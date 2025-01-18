import React, { useState } from "react";
import axios from "axios";

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Post added succesfully");
      setTitle("");
      setContent("");
      setImage(null);

      onPostAdded();
    } catch (error) {
      console.error(error);
      alert("Error adding post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <div>
        <label>Image</label>
        <input
          type="file"
          accept="image/"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit"> Add Post</button>
    </form>
  );
};

export default AddPost;
