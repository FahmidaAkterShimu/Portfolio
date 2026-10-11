import { SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose, SiGit, SiGithub, SiVercel, SiNetlify, SiVite, SiPython, SiC, SiCplusplus, SiDaisyui, SiPostman, SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FiCode } from "react-icons/fi";

const icons = {
  CSS3: SiCss,
  "JavaScript": SiJavascript,
  "JavaScript (ES6+)": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Next.js (App Router)": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": SiHtml5,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "JWT": SiJsonwebtokens,
  "JWT/JWKS": SiJsonwebtokens,
  "MongoDB": SiMongodb,
  "MongoDB Atlas": SiMongodb,
  "Mongoose": SiMongoose,
  "Git": SiGit,
  "Git and GitHub": SiGit,
  "GitHub": SiGithub,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  "Vite": SiVite,
  "Python": SiPython,
  "C": SiC,
  "C++": SiCplusplus,
  "DaisyUI": SiDaisyui,
  "Postman": SiPostman,
  "LeetCode": SiLeetcode,
  "Codeforces": SiCodeforces,
  "CodeChef": SiCodechef,
};
export const getIcon = (name) => icons[name] || FiCode;
export const hasIcon = (name) => name in icons;
