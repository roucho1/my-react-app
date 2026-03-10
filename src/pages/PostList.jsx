import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostList() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  if (loading) return <p className="text-center mt-8">載入中...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-8">錯誤：{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">文章列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            to={`/posts/${post.id}`}
            key={post.id}
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow transition min-h-[80px] flex items-center justify-center text-center"
          >
            <h2 className="font-semibold mb-1">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;
