import "./App.css";
import Counter from "./Component/Counter";
import FruitList from "./Component/FruitList";
import Greeting from "./Component/Greeting";
import LoginForm from "./Component/LoginForm";
import NameInput from "./Component/NameInput";
import PostList from "./Component/PostList";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div>
      {/*<Greeting name="小明" />
      <Counter step={6} />
      <NameInput />
      <LoginForm />
      <FruitList />
      <TodoList />*/}
      <PostList />
    </div>
  );
}

export default App;
