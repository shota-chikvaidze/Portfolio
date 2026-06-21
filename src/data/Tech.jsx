import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

// Compact stack list, rendered as inline chips, not a hero-sized section.
const Tech = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default Tech;
