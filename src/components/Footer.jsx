const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-4 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} HealthSphere. All rights reserved.</p>
        <p>Contact us: info@healthsphere.com</p>
      </div>
    </footer>
  );
};

export default Footer;
