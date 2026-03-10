import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

// src/pages/About.jsx
function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="font-bold text-sm p-32 bg-gray-700 flex ">
      <h1 className="text-gray-300">關於我</h1>
    </div>
  );
}
export default About;
