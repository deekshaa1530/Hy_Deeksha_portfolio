import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // import hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#responsibilities" className="hover:text-cyan-400">Roles</a>
          <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
          <a href="#activities" className="hover:text-cyan-400">Activities</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <a href="#home" onClick={toggleMenu} className="block hover:text-cyan-400">Home</a>
          <a href="#education" onClick={toggleMenu} className="block hover:text-cyan-400">Education</a>
          <a href="#skills" onClick={toggleMenu} className="block hover:text-cyan-400">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-cyan-400">Projects</a>
          <a href="#responsibilities" onClick={toggleMenu} className="block hover:text-cyan-400">Roles</a>
          <a href="#certifications" onClick={toggleMenu} className="block hover:text-cyan-400">Certifications</a>
          <a href="#activities" onClick={toggleMenu} className="block hover:text-cyan-400">Activities</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
