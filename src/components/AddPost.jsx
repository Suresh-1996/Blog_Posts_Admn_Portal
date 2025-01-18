import React, { useState } from "react";
import axios from "axios";

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/post", {
        title,
        content,
      });
      alert("Post added succesfully");
      setTitle("");
      setContent("");
      onPostAdded(Response.data);
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
      <button type="submit"> Add Post</button>
    </form>
  );
};

export default AddPost;
