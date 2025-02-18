'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from 'next/navigation'

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close
     const router = useRouter();
     const pathName = usePathname();

     const handleNavigation = (path) => {
          router.push(path);
          setIsOpen(false); // Close the menu after navigation
     };

     // Navbar links
     const navLinks = [
          { name: "About", path: "/about" },
          { name: "Packages", path: "/package" },
          { name: "Hire Items", path: "/hire" },
          { name: "Contact", path: "/contact" }
     ];

     const getLinkClass = (href) => {
          return pathName.includes(href)
               ? "text-[#e3b97f] font-medium border-b-2 border-[#e3b97f] transition-all duration-300 " // Active link style (dark)
               : "text-white"; // Default link style
     };

     return (
          <div className="bg-[#121212]">
               <div className="border-b border-gray-800 flex">
                    <div className="w-full text-center">
                         <p className="text-white text-sm py-2">
                              Brisbane & Gold Coast Event Stylists and Party Decorators
                         </p>
                    </div>
               </div>

               <nav className="text-white px-7 py-4 flex items-center justify-between relative">
                    {/* Hamburger Menu (visible on small screens) */}
                    <button
                         className="lg:hidden text-white p-2"
                         onClick={() => setIsOpen(!isOpen)}
                    >
                         {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>

                    {/* Logo (Centered) */}
                    <div className="flex justify-center lg:justify-start w-full">
                         <Image
                              src="/logo2.png"
                              height={180}
                              width={180}
                              alt="Logo"
                              className="cursor-pointer"
                              onClick={() => handleNavigation("/")}
                         />

                         <ul className="ml-10 items-center hidden lg:flex space-x-8">
                              {navLinks.map((link) => (
                                   <li key={link.name}>
                                        <a
                                             href="#"
                                             // 
                                             className={`hover:text-[#e3b97f] font-extralight hover:cursor-pointer hover:border-b-2 border-[#e3b97f] ${getLinkClass(link.path)}`}
                                             onClick={() => handleNavigation(link.path)}
                                        >
                                             {link.name}
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* Social Icons (hidden on small screens, aligned right on large screens) */}
                    <div className="flex gap-3 pr-3 items-center">
                         <a href="https://www.instagram.com/ultraeventsgroup/" target="_blank" rel="noopener noreferrer">
                              <div className="hover:cursor-pointer">
                                   <FaInstagram size={20} />
                              </div>
                         </a>
                    </div>
               </nav>

               {/* Mobile Menu (Expanded when hamburger icon is clicked) */}
               <div
                    className={`fixed top-0 left-0 w-full h-full bg-[#121212] text-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                         } flex flex-col items-center justify-center space-y-4 shadow-lg z-50`}
               >
                    <button
                         className="lg:hidden text-white p-2"
                         onClick={() => setIsOpen(!isOpen)}
                    >
                         {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                    <ul className="text-lg font-semibold text-center space-y-4">
                         {navLinks.map((link) => (
                              <li key={link.name}>
                                   <a
                                        href="#"
                                        className={`hover:text-[#e3b97f] font-extralight hover:cursor-pointer hover:border-b-2 border-[#e3b97f] ${getLinkClass(link.path)}`}
                                        onClick={() => handleNavigation(link.path)}
                                   >
                                        {link.name}
                                   </a>
                              </li>
                         ))}
                         {/* Social Icons for Mobile */}
                         <div className="flex gap-3 justify-center">
                              <a href="https://www.instagram.com/ultraeventsgroup/" target="_blank" rel="noopener noreferrer">
                                   <div className="hover:cursor-pointer">
                                        <FaInstagram size={20} />
                                   </div>
                              </a>
                         </div>
                    </ul>
               </div>
          </div>
     );
};

export default Navbar;
