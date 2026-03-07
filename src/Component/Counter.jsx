import { useState } from "react";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);
  //     ^現在的值  ^更新的函式      ^初始值
  console.log(step);
  console.log({ step });

  return (
    <div>
      <p>目前數字：{count}</p>
      <button onClick={() => setCount(count + step)}>+{step}</button>
    </div>
  );
}

export default Counter;
