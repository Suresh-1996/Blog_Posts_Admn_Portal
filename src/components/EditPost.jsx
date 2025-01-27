import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    <div className="flex  w-full  items-center justify-center ">
      <form
        onSubmit={handleUpdate}
        className=" flex flex-col m-5 space-y-9  w-full max-w-2xl  shadow-xl p-3 bg-slate-50"
      >
        <h2 className="text-center font-medium text-xl text-slate-700">
          Edit Post
        </h2>
        <div className="relative z-0 w-full mb-5 group ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=""
            required
            className="block py-2.5 px-2 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  text-slate-900  focus:border-blue-500 focus:outline-none  peer "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">
            Titile
          </label>
        </div>
        <div className=" relative z-0 w-full mb-5 group ">
          <ReactQuill
            value={content}
            onChange={setContent}
            className=" resize-none block py-2.5 px-2 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  text-slate-900  focus:border-blue-500 focus:outline-none  peer"
          />
          <label className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Content
          </label>
        </div>
        {post.image && (
          <div className="flex items-center justify-center p-2 flex-col gap-y-2 cursor-pointer">
            <p className=" text-sm   text-gray-500">Current Image</p>
            <img
              src={`http://localhost:5000${post.image}`}
              alt={post.title}
              style={{ width: "400px" }}
              className=" shadow-md  cursor-none"
            />
          </div>
        )}
        <div className="flex  items-center   justify-between">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className=" bg-blue-500 rounded-md border py-1 px-2 text-sm shrink   "
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
