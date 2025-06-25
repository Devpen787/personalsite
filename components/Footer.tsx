export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Devinson Peña. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:devinsonpena@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/devinsonpena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/Devinson_Pena_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 