import { mockPosts } from "../api/mockPosts";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Welcome to HealthSphere</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
