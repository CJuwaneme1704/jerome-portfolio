"use client";

import Link from "next/link";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"; // Import icons

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-700 mt-20 px-6 py-8 text-sm text-gray-400 bg-[#0f172a]">
      <div id="contact" className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-center sm:text-left">
          &copy; {year} Jerome.dev. Built with ❤️ & Next.js.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-white">
          <Link
            href="https://github.com/CJuwaneme1704"
            target="_blank"
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FiGithub size={20} />
            GitHub
          </Link>
          <Link
            href="mailto:chidubemuwaneme@gmail.com"
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FiMail size={20} />
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/jerome-uwaneme-571372215"
            target="_blank"
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <FiLinkedin size={20} />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
