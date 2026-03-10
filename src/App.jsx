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
  console.log(theme);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex gap-6">
          <Link to="/">首頁</Link>
          <Link to="/posts">文章</Link>
          <Link to="/about">關於我</Link>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            color: theme === "dark" ? "#ffffff" : "#111827",
            backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
          }}
          className={`px-4 py-2 rounded border ${theme === "dark" ? "border-gray-600 hover:!bg-gray-800" : "border-gray-300 hover:!bg-gray-100"}`}
        >
          {theme === "light" ? "🌙 深色" : "☀️ 淺色"}
        </button>
      </nav>

      <main className="max-w-5xl mx-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
