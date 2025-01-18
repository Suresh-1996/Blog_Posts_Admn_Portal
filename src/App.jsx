import React, { useState } from "react";
import AddPost from "./components/AddPost";
import ManagePost from "./components/ManagePosts";

function App() {
  const [newPostAdded, setNewPostAdded] = useState(false);
  console.log(newPostAdded);
  const handlePostAdded = () => {
    setNewPostAdded(!newPostAdded);
  };

  return (
    <div>
      <h1>Welcome Blog Post Admin</h1>
      <AddPost onPostAdded={handlePostAdded} />

      <ManagePost newPostAdded={newPostAdded} />
    </div>
  );
}

export default App;
