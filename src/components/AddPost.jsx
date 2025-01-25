import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

      onPostAdded(" ");
    } catch (error) {
      console.error(error);
      alert("Error adding post");
    }
  };

  return (
    <div className="flex  w-full  items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col m-5 space-y-4  w-full max-w-2xl  shadow-xl p-3 bg-slate-50"
      >
        <h2 className="text-center font-medium text-xl text-slate-700">
          Add New Post
        </h2>
        <div className="relative z-0 w-full mb-5 group ">
          <input
            type="text"
            name="floating_titile"
            id="floating_titile"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          {/* <textarea
            placeholder=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
            className=" resize-none block py-2.5 px-2 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  text-slate-900  focus:border-blue-500 focus:outline-none  peer"
          /> */}
          <label className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Content
          </label>
        </div>
        <div className="flex  items-center   justify-between">
          <input
            type="file"
            accept="image/"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className=" bg-green-500 rounded-md border py-1 px-2 text-sm shrink   "
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
