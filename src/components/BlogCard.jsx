// src/components/BlogCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{post.category}</p>
        <p className="text-gray-700 dark:text-gray-200 line-clamp-3">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
