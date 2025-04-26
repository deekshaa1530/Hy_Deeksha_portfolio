function Certifications() {
    const certifications = [
      {
        title: "Data Structures and Algorithms in Java",
        provider: "Infosys SpringBoard",
        date: "Sept 2024",
         // Replace with real links
      },
      {
        title: "Course on JavaScript",
        provider: "Infosys SpringBoard",
        date: "Nov 2023",

      },
      {
        title: "The Complete Full Stack Web Development Bootcamp",
        provider: "Udemy",
        date: "January 2023"
      },
      {
        title: "MongoDB Node.js Developer Path",
        provider: "SmartBridge",
        date: "August 2024",
      },
      {
        title: "Web Designing & Technologies Workshop",
        provider: "KIET",
        date: "May 2024",
      },
      {
        title: "Alpha: DSA with Java",
        provider: "Apna College",
        date: "April 2023",
      },
      {
        title:"Introduction to Internet of things: NPTEL",
        provider:"NPTEL",
        date: "January 2023-April 2023",

      },
      {
      title:"Advance your skills in HTML",
      provider:"Linkedin",
      date:"August 2023",
      },

    ];
  
    return (
      <section id="certifications" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          📜 Certifications & Workshops
        </h2>
  
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-3xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-medium">Provider:</span> {cert.provider}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Date:</span> {cert.date}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
  }
  
  export default Certifications;
  