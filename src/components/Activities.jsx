function Activities() {
    const activities = [
      {
        title: "EY Techathon 5.0 Participant",
        description:
          "Proposed AI-based solutions to enhance communication of government schemes in rural areas.",
      },
      {
        title: "Participation in Innotech'24 at KIET Group of Institutions",
        description:
          "Developed a craft e-commerce website to empower artisans to sell their original creations.",
      },
      {
        title: "Coding Practice",
        description:
          "Solved 150+ coding problems on LeetCode and GeeksforGeeks, strengthening DSA skills.",
      },
    ];
  
    return (
      <section
        id="activities"
        className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16 px-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          🏆 Co-curricular Activities
        </h2>
  
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-2 border-transparent hover:border-indigo-500 dark:hover:border-indigo-400 rounded-3xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-md text-gray-800 dark:text-gray-300">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Activities;
  