import React from 'react'


export default function Footer() {
return (
<footer className="mt-12 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
<div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
© {new Date().getFullYear()} Health Blog — Built with React and Tailwind
</div>
</footer>
)
}