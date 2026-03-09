import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

// src/pages/Home.jsx
function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ color: theme === "light" ? "#000000" : "#ffffff" }}>
      <h1>首頁</h1>
      <Link to="/posts">查看文章列表</Link>
    </div>
  );
}
export default Home;
