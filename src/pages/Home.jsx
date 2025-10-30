// src/pages/Home.jsx
import React from "react";
import BlogCard from "../components/BlogCard";
import { mockPosts } from "../api/mockPosts";

const Home = () => {
  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">
        Latest Health Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
