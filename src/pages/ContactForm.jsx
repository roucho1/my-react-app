import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (form.name.trim() === "") newErrors.name = "姓名不能為空";
    if (form.email.trim() === "") {
      newErrors.email = "Email 不能為空";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email 格式不正確";
    }
    return newErrors;
  }

  function handleSubmit() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("送出：", form);
    navigate("/about"); // 送出成功跳回首頁
  }

  if (submitted) return <p>送出成功！</p>;

  return (
    <div>
      <h2>聯絡表單</h2>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="姓名"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button onClick={handleSubmit}>送出</button>
    </div>
  );
}

export default ContactForm;
