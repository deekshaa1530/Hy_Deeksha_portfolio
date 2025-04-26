import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact, FaJava, FaCuttlefish, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus } from "react-icons/si";

function Skills() {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={40} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-white" size={40} /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: "Java", icon: <FaJava className="text-red-500" size={40} /> },
    { name: "C", icon: <FaCuttlefish className="text-blue-400" size={40} /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" size={40} /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500" size={40} /> },
  ];

  const softSkills = [
    "Interpersonal Skills",
    "Communication Skills",
    "Leadership",
    "Team Membership",
    "Quick Learner"
  ];

  return (
    <section id="skills" className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      {/* Technical Skills */}
      <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center font-medium text-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
