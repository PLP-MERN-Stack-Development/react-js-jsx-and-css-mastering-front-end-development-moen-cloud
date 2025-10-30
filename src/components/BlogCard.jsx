import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{post.content.slice(0, 100)}...</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          By {post.author} | {post.date} | Category: {post.category}
        </p>
        <Link
          to={`/post/${post.id}`}
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
