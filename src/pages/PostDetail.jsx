import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>文章詳情</h1>
      <p>目前文章 id：{id}</p>
    </div>
  );
}

export default PostDetail;
