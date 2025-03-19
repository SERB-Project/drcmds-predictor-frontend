"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdown1Open || dropdown2Open) {
        const dropdown1Button = document.getElementById('dropdownMenuButton1');
        const dropdown2Button = document.getElementById('dropdownMenuButton2');
        const dropdown1Menu = document.querySelector(`#dropdownMenuButton1 + ul`);
        const dropdown2Menu = document.querySelector(`#dropdownMenuButton2 + ul`);

        if (
          dropdown1Button &&
          dropdown2Button &&
          dropdown1Menu &&
          dropdown2Menu &&
          !dropdown1Button.contains(event.target as Node) &&
          !dropdown2Button.contains(event.target as Node) &&
          !dropdown1Menu.contains(event.target as Node) &&
          !dropdown2Menu.contains(event.target as Node)
        ) {
          setDropdown1Open(false);
          setDropdown2Open(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown1Open, dropdown2Open]);

  const handleDropdownToggle = (dropdown: 'dropdown1' | 'dropdown2') => {
    if (dropdown === 'dropdown1') {
      setDropdown2Open(false);
      setDropdown1Open(!dropdown1Open);
    } else {
      setDropdown1Open(false);
      setDropdown2Open(!dropdown2Open);
    }
  };

  return (
    <nav className="flex justify-between bg-[#123265] py-4 shadow-md text-white">
      <div className="ml-4">
        <img src="/logos/sricity.ico" alt="Sricity Icon" className="h-12 w-12" />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative inline-block text-left">
          <button
            className="inline-flex items-center text-white px-6 py-3 rounded-lg bg-[#123265] hover:bg-[#1a2f6f] border border-white"
            id="dropdownMenuButton1"
            aria-expanded={dropdown1Open}
            onClick={() => handleDropdownToggle('dropdown1')}
          >
            Models
          </button>
          <ul
            className={`absolute left-0 mt-2 w-64 bg-[#123265] border border-white rounded-lg shadow-lg ${dropdown1Open ? 'block' : 'hidden'}`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 1</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 2</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 3</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 4</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 5</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Model 6</a>
            </li>
          </ul>
        </div>

        <div className="relative inline-block text-left">
          <button
            className="inline-flex items-center text-white px-6 py-3 rounded-lg bg-[#123265] hover:bg-[#1a2f6f] border border-white"
            id="dropdownMenuButton2"
            aria-expanded={dropdown2Open}
            onClick={() => handleDropdownToggle('dropdown2')}
          >
            Interact
          </button>
          <ul
            className={`absolute left-0 mt-2 w-64 bg-[#123265] border border-white rounded-lg shadow-lg ${dropdown2Open ? 'block' : 'hidden'}`}
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">FAQs</a>
            </li>
            <li>
              <a className="block px-4 py-3 text-sm text-white hover:bg-[#1a2f6f]" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mr-4">
        <img src="/logos/sricity.ico" alt="Sricity Icon" className="h-12 w-12" />
      </div>
    </nav>
  );
};

export default Navbar;

