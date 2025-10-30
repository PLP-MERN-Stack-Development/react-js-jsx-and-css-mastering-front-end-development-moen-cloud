# HealthSphere

HealthSphere is a responsive health blog web application built with **React.js**, **Tailwind CSS**, and **React Router**. The app displays articles on various health topics, including nutrition, fitness, mental health, immunity, diet, exercise, lifestyle, and wellness. Users can view a summary of articles on the home page and click each article to read the full content. The application supports **dark mode and light mode** toggling.

---

## Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Available Scripts](#available-scripts)
* [Future Enhancements](#future-enhancements)
* [License](#license)

---

## Features

* Responsive and mobile-friendly layout
* Dark mode / light mode toggle
* Display articles by category
* Clickable articles to view full content
* Uniform card layout for all articles
* Fully functional routing with React Router

---

## Technologies

* **React.js** – Front-end library for building UI components
* **Tailwind CSS** – Utility-first CSS framework for styling
* **React Router** – For page navigation
* **Vite** – Build tool and development server
* **JavaScript (ES6+)**

---

## Getting Started

### Prerequisites

* Node.js v18 or higher
* npm (comes with Node.js)
* Modern web browser (Chrome, Firefox, Edge, etc.)


## Project Structure

```
src/
├── api/             # Mock data and API functions
│   └── mockPosts.js
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── BlogCard.jsx
│   └── Button.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── PostDetail.jsx
├── hooks/           # Custom React hooks (if any)
├── context/         # React context providers (if any)
├── utils/           # Utility functions (if any)
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

---

## Future Enhancements

* Add Node.js backend to serve posts from a database
* Implement category-based filtering
* Add user authentication and commenting system
* Add search functionality for articles
* Deploy full-stack version on Vercel / Heroku

---

## License

This project is open-source and available under the [MIT License](LICENSE).
