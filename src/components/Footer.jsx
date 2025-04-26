import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold">📬 Contact Me</h2>

        <div className="flex space-x-6 text-2xl">
          <a href="https://www.linkedin.com/in/deeksha-srivastava1530/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/deekshaa1530" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
            <FaGithub />
          </a>
          <a href="mailto:deekshasrivastava469@gmail.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-center">&copy; 2025 Deeksha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
