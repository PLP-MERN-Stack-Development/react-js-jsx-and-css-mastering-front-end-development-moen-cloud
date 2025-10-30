import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
