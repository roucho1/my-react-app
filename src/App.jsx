import "./App.css";
import Counter from "./Component/Counter";
import Greeting from "./Component/Greeting";
import LoginForm from "./Component/LoginForm";
import NameInput from "./Component/NameInput";

function App() {
  return (
    <div>
      <Greeting name="小明" />
      <Counter step={6} />
      <NameInput />
      <LoginForm />
    </div>
  );
}

export default App;
