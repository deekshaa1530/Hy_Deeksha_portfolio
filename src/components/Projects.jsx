function Projects() {
    const projects = [
      {
        title: "Chit-Chat – Social Media Web App",
        techStack: "MongoDB, Express.js, React.js, Node.js, Firebase, Socket.io",
        description: [
          "Built a full-stack web app used by 50+ users, with secure JWT authentication and responsive UI.",
          "Used Firebase to store and manage over 100+ user-generated posts and stories.",
          "Reduced backend response time by 40% through route optimization and MongoDB query tuning.",
          "Enabled real-time chat (1:1 and group) via Socket.io with 99% uptime.",
          "Enhanced interaction by 60% with comments, post reactions, and story view tracking."
        ],
        link: "https://github.com/deekshaa1530/Chit-Chat-Social-media-App--Deeksha.git" // <-- Your actual link
      },
      {
        title: "FoodieClub – Online Food Ordering Website",
        techStack: "HTML5, CSS, JavaScript, Bootstrap",
        description: [
          "Developed a responsive food ordering platform with 100+ menu items and cart integration.",
          "Ensured 100% responsiveness across mobile and desktop."
        ],
        link: "https://github.com/deekshaa1530/miniproject.git" // <-- Your actual link
      }
    ];
  
    return (
      <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          🚀 My Projects
        </h2>
  
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-500 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Tech Stack: </span>{project.techStack}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
  
              <div className="mt-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-blue-600 dark:text-cyan-400 transition-colors duration-300 ease-out border-2 border-blue-600 dark:border-cyan-400 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-blue-600 dark:bg-cyan-400 transition-all duration-300 transform scale-0 group-hover:scale-100 group-hover:opacity-100"></span>
                    <span className="relative">View Project</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  