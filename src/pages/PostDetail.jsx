// src/pages/PostDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { mockPosts } from "../api/mockPosts";

const PostDetail = () => {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === parseInt(id));

  if (!post)
    return (
      <p className="text-center dark:text-white mt-10">Post not found</p>
    );

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {post.category} | {post.date} | By {post.author}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
};

export default PostDetail;
