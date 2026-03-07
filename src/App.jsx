import "./App.css";
import Counter from "./Component/Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="小明" />
      <Counter step={6} />
    </div>
  );
}

export default App;
