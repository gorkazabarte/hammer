export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Align left */}
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-blue-900">DevOps</span>
        </div>

        {/* Align right */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="text-blue-500 hover:text-blue-1000">About</a></li>
          <li><a href="#skills" className="text-blue-500 hover:text-blue-1000">Skills</a></li>
          <li><a href="#certifications" className="text-blue-500 hover:text-blue-1000">Certifications</a></li>
          <li><a href="#projects" className="text-blue-500 hover:text-blue-1000">Projects</a></li>
          <li><a href="#contact" className="text-blue-500 hover:text-blue-1000">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

