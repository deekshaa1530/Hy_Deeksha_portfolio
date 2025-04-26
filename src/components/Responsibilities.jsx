function Responsibilities() {
    const responsibilities = [
      {
        role: "Core Member, STC-ConnectX KIET",
        description: "Contributed to curating placement prep materials and sharing coding resources.",
        date: "April 2023- present",
      },
      {
        role: "Core Member, Kavyanjali (Poetry Club) - KIET",
        description: "Engaged in organizing literary events and creating creative content for the poetry club.",
        date: "May 2023 - December 2024",
      },
    ];
  
    return (
      <section
        id="responsibilities"
        className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16 px-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          🎯 Roles & Responsibilities
        </h2>
  
        <div className="max-w-5xl mx-auto grid gap-8">
          {responsibilities.map((resp, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-2 border-transparent hover:border-blue-500 dark:hover:border-cyan-400 rounded-3xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {resp.role}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                📅 {resp.date}
              </p>
              <p className="text-md text-gray-800 dark:text-gray-400">
                {resp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Responsibilities;
  