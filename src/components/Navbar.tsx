"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Jerome.dev
        </Link>
        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {/* Desktop Menu */}
        <div className="space-x-6 text-white font-medium hidden md:flex">
          <Link href="#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md">
          <Link href="#about" className="block px-6 py-3 text-white hover:text-blue-400 transition">About</Link>
          <Link href="#projects" className="block px-6 py-3 text-white hover:text-blue-400 transition">Projects</Link>
          <Link href="#contact" className="block px-6 py-3 text-white hover:text-blue-400 transition">Contact</Link>
        </div>
      )}
    </motion.nav>
  )
}
