// src/pages/Contact.jsx
import React from "react";

const Contact = () => (
  <div className="container mx-auto p-4 space-y-6">
    <h1 className="text-4xl font-bold mb-4 dark:text-white">Contact Us</h1>

    <p className="dark:text-gray-300">
      Have questions, suggestions, or feedback? We'd love to hear from you!
    </p>

    <p className="dark:text-gray-300">
      Email: <a href="mailto:contact@healthsphere.com" className="text-blue-500">contact@healthsphere.com</a>
    </p>
  </div>
);

export default Contact;
