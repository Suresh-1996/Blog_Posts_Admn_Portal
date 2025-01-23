import React, { useState } from "react";
import AddPost from "./components/AddPost";
import ManagePost from "./components/ManagePosts";
import Home from "./components/Home";

function App() {
  const [newPostAdded, setNewPostAdded] = useState(false);
  console.log(newPostAdded);

  const handlePostAdded = () => {
    setNewPostAdded(!newPostAdded);
  };

  return (
    <div>
      <Home />
      <AddPost onPostAdded={handlePostAdded} />

      <ManagePost newPostAdded={newPostAdded} />
    </div>
  );
}

export default App;
