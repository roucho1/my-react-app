import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

// src/pages/About.jsx
function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ color: theme === "light" ? "#000000" : "#ffffff" }}>
      <h1>關於我</h1>
    </div>
  );
}
export default About;
