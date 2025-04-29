import React, { useState } from 'react';
import './Navbar.css'; // Optional if you have additional styles


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#333] text-white z-50 h-16 px-4 flex items-center justify-between">
      {/* Hamburger Icon with hover effect */}
      <div
        className="cursor-pointer hover:scale-110 hover:opacity-80 transition-all duration-200"
        onClick={toggleDropdown}
      >
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-[#444] p-4 rounded-md shadow-lg animate-fade-in">
          <ul>
            <li className="text-white p-2 hover:bg-[#555] rounded">Hjem</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
