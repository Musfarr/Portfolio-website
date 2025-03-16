import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-sm z-10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">SM</div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;