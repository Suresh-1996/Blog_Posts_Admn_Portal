import React, { useState } from "react";
import AddPost from "./components/AddPost";
import ManagePost from "./components/ManagePosts";

function App() {
  const [newPostAdded, setNewPostAdded] = useState(false);

  const handlePostAdded = () => {
    setNewPostAdded(!newPostAdded);
  };

  return (
    <div>
      <h1>Welcome Blog Post Admin</h1>
      <AddPost onPostAdded={handlePostAdded} />

      <ManagePost />
    </div>
  );
}

export default App;
