import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
