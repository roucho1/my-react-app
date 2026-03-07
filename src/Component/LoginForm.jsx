import { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log("送出：", form);
  }

  return (
    <div>
      <input name="username" value={form.username} onChange={handleChange} />
      <input name="password" value={form.password} onChange={handleChange} />
      <button onClick={handleSubmit}>送出</button>
    </div>
  );
}

export default LoginForm;
