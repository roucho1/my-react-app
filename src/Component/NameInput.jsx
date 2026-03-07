import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>你輸入了：{name}</p>
    </div>
  );
}

export default NameInput;
