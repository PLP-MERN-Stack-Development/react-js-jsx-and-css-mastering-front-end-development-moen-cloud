import { useParams } from "react-router-dom";
import { mockPosts } from "../api/mockPosts";
import TaskManager from "../components/TaskManager";

function PostDetail() {
  const { id } = useParams();
  const post = mockPosts.find((p) => p.id === parseInt(id));

  if (!post) return <div className="p-4">Post not found</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto dark:text-white">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        By {post.author} | {post.date} | Category: {post.category}
      </p>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4 rounded" />
      <p className="mb-6">{post.content}</p>

      {/* Task Manager for this post */}
      <TaskManager postTasks={post.tasks} />
    </div>
  );
}

export default PostDetail;
