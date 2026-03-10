import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

// src/pages/Home.jsx
function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">首頁</h1>
      <Link to="/posts" className="text-gray-600 text-sm mx-1">
        查看文章列表
      </Link>
      <Link to="/posts" className="text-gray-600 text-sm mx-1">
        查看文章列表
      </Link>
    </div>
  );
}
export default Home;
