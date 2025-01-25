import React, { useState } from "react";
import AddPost from "./components/AddPost";
import ManagePost from "./components/ManagePosts";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoutes";
import CreateAdmin from "./components/CreateAdmin";

function App() {
  const [newPostAdded, setNewPostAdded] = useState(false);
  console.log(newPostAdded);

  const handlePostAdded = () => {
    setNewPostAdded(!newPostAdded);
  };

  return (
    <Router>
      <Routes>
        //public route
        <Route path="/" element={<AdminLogin />} />
        Authenticated routes
        <Route
          path="/createAdmin"
          element={
            <ProtectedRoute>
              <CreateAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Home />
                <AddPost />
                <ManagePost />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>

    // <div>
    // {/* <Home />
    // <AddPost onPostAdded={handlePostAdded} />

    // <ManagePost newPostAdded={newPostAdded} /> */}

    // <AdminLogin />
    // </div>
  );
}

export default App;
