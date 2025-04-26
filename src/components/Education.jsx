function Education() {
    const educationData = [
      {
        title: "B.Tech in Information Technology",
        institution: "KIET Group of Institutions, Ghaziabad",
        year: "2022 - Expected June 2026",
        result: "CGPA: 8.65",
      },
      {
        title: "Senior Secondary (12th)",
        institution: "Mahatma Hansraj Modern School, Jhansi",
        year: "Passed in 2021",
        result: "Percentage: 92.4%",
      },
      {
        title: "Secondary (10th)",
        institution: "St. Thomas School, Chitrakoot",
        year: "Passed in 2019",
        result: "Percentage: 92.8%",
      },
    ];
  
    return (
      <section
        id="education"
        className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:ring-2 hover:ring-cyan-400"
            >
              <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{edu.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
              <p className="mt-2 text-gray-800 dark:text-gray-100 font-medium">{edu.result}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Education;
  