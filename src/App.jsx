import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./Component/Counter";
import FruitList from "./Component/FruitList";
import Greeting from "./Component/Greeting";
import LoginForm from "./Component/LoginForm";
import NameInput from "./Component/NameInput";
import TodoList from "./Component/TodoList";
import ContactForm from "./pages/ContactForm";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

function App() {
  return (
    <div>
      {/*<Greeting name="小明" />
      <Counter step={6} />
      <NameInput />
      <LoginForm />
      <FruitList />
      <TodoList />
      <PostList />*/}
      <nav>
        <Link to="/">首頁</Link>
        <Link to="/posts">文章</Link>
        <Link to="/about">關於我</Link>
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
