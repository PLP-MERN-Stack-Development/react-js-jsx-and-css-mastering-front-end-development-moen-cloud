// src/pages/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { mockPosts } from "../api/mockPosts";
import BlogCard from "../components/BlogCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const postsInCategory = mockPosts.filter(
    post => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Category: {categoryName}
      </h1>
      {postsInCategory.length === 0 ? (
        <p className="dark:text-gray-200">No posts found in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsInCategory.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
