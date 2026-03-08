import { Link } from "react-router-dom";

// src/pages/Home.jsx
function Home() {
  return (
    <div>
      <h1>首頁</h1>
      <Link to="/posts">查看文章列表</Link>
    </div>
  );
}
export default Home;
