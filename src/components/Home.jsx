import { motion } from 'framer-motion';
import { FaDownload, FaLaptopCode } from 'react-icons/fa'; // ⬅️ Added FaLaptopCode icon!

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Hero Text */}
      <motion.h1
        className="flex items-center gap-2 text-4xl md:text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Deeksha <FaLaptopCode className="text-blue-500" />
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Web Developer | MERN Stack Enthusiast | Coding Enthusiast
      </motion.h2>

      {/* Short Intro */}
      <motion.p
        className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl text-center mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Currently pursuing B.Tech in Information Technology at KIET Group of Institutions. 
        I have a deep passion for creating dynamic and responsive websites, building full-stack applications, 
        and solving complex problems through Data Structures and Algorithms. 
        Always curious, always coding. 🚀
      </motion.p>

      {/* Download Resume Button */}
      <motion.a
        href="/DEEKSHA_RESUME_.pdf"
        download
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaDownload /> Download Resume
      </motion.a>
    </section>
  );
}

export default Home;
