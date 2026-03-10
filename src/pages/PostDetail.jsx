import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../config";

function PostDetail() {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`${API_URL}/posts/${id}`);

  if (loading) return <p className="text-center mt-8">載入中...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-8">錯誤：{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  );
}

export default PostDetail;
