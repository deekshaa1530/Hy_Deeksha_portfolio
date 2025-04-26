import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.img
        src="/your-profile-photo.jpg"  // 📸 <-- Replace this with your image path
        alt="Deeksha's Profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-bold mb-4 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Deeksha 👋
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a passionate Web Developer and MERN Stack enthusiast, currently pursuing B.Tech in Information Technology from KIET Group of Institutions. 
        I love building beautiful, responsive, and performant websites and applications. I also enjoy solving Data Structures and Algorithms problems to sharpen my problem-solving skills.
      </motion.p>

      <motion.a
        href="public\DEEKSHA_RESUME_.pdf" // 📄 <-- Replace this with your actual resume file path
        download
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
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
