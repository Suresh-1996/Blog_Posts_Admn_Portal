import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import EditPost from "./EditPost";

const ManagePost = ({ newPostAdded }) => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [newPostAdded]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");

      setPosts(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching posts");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);

      alert("Post delete successfully!");
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error(error);
      alert("Error deleting post");
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(
      posts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
    );
    setEditingPost(null);
  };
  return (
    <>
      {editingPost ? (
        <EditPost post={editingPost} onPostUpdated={handlePostUpdated} />
      ) : (
        <div className="grid md:grid-cols-2  lg:grid-cols-3">
          {posts.map((post) => (
            <PostItem
              key={post._id}
              post={post}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ManagePost;
