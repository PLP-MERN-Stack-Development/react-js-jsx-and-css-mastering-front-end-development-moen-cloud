import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Contact HealthSphere</h1>
      <p className="mb-6 dark:text-gray-300">
        Have questions or feedback? Reach out to us at{" "}
        <strong>info@healthsphere.com</strong> or use the contact form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
