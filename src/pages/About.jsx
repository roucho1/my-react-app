import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// src/pages/About.jsx
function About() {
  const user = useContext(UserContext);
  console.log(UserContext);
  return (
    <div>
      <h1>關於我</h1>
      <p>使用者：{user.name}</p>
      <p>身份：{user.role}</p>
    </div>
  );
}
export default About;
