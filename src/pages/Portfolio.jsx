import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { Sun, Moon, Download } from "lucide-react";
import { motion } from "framer-motion";
import AboutMe from "./portfolio/AboutMe";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/contact";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="bg-white dark:bg-dark text-gray-900 dark:text-base">
      <div className="container mx-auto p-6 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gradient">About Me</h1>
          <Button onClick={toggleTheme} variant="outline">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>

        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
