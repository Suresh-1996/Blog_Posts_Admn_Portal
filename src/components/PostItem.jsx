import React from "react";

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div className=" flex  justify-evenly  mt-5">
      <div className="    m-1  p-2 rounded-md shadow-md max-w-sm   ">
        {post.image && (
          <img
            src={`http://localhost:5000${post.image}`}
            alt={post.title}
            style={{ width: "400px", height: "200px" }}
            className="rounded-lg shadow-md "
          />
        )}
        <div className="min-h-20">
          <h3 className=" font-semibold text-balance text-sm p-1 mt-3 ">
            {post.title}
          </h3>
        </div>
        <div className="flex justify-between mt-5">
          <button
            className="bg-amber-700 border  hover:bg-amber-800   py-1 px-3 text-sm rounded-lg  "
            onClick={() => onEdit(post)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 border hover:bg-red-700 py-1 px-3 text-sm rounded-lg  "
            onClick={() => onDelete(post._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
