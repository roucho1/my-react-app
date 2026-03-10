import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    console.log(input.trim());
    console.log(Date.now());
    setInput("");
  }
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    console.log("todos 更新了：", todos);
  }, [todos]);

  return (
    <div>
      <h2>待辦清單</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入待辦事項"
      />
      <button onClick={handleAdd}>新增</button>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>刪除</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>目前沒有待辦事項</p>
      )}
    </div>
  );
}

export default TodoList;
