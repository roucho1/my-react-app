import "./App.css";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="小明" />
      <Greeting />
      <Greeting name="React初學者" />
    </div>
  );
}

export default App;
