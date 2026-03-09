import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme === "light" ? "#ffffff" : "#1a1a1a",
      }}
    >
      <nav style={{ color: theme === "light" ? "#000000" : "#ffffff" }}>
        <Link to="/">首頁</Link>
        <Link to="/posts">文章</Link>
        <Link to="/about">關於我</Link>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 深色" : "☀️ 淺色"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<h1>404 not fount</h1>} />
      </Routes>
    </div>
  );
}

export default App;
