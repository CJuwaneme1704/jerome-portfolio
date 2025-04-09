"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"; // Import icons
import ProjectCard from "@components/ProjectCard";

const projects = [
  {
    title: "CourseMix",
    description:
      "Modern course registration platform with email auth, smart conflict detection, analytics, and role-based access. Built with Next.js 15.1, React 19, Tailwind CSS, and Supabase.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    repo: "coursemix.ca",
    image: "/CourseMixLogo.png",
  },
  {
    title: "Connect Four Multiplayer",
    description:
      "Multiplayer Java-based Connect Four game with real-time terminal and Swing GUI support. Supports GUI vs Terminal matchups and player move validation.",
    tech: ["Java", "Swing", "OOP"],
    repo: "https://github.com/CJuwaneme1704/Terminal-and-GUI-Connect-4-game",
    image: "/e80686db-b0fb-4f2c-bd2f-3a89734f102a.avif",
  },
];

export default function Home() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 text-center sm:text-left font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white pt-20 sm:pt-32">
      {/* Hero Section */}
      <main className="max-w-3xl space-y-8 sm:space-y-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Hey, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Jerome</span>👋
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I build interactive, accessible web experiences — blending creativity
          and code to bring ideas to life. Full-stack. User-first. Always evolving.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link
            href="/Software_Engineer_Resume_Latest.pdf"
            target="_blank"
            className="inline-block rounded-lg bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            View Resume
          </Link>
          <button
            onClick={toggleContactInfo}
            className="inline-block rounded-lg border border-blue-500 text-blue-400 px-6 py-3 font-medium hover:bg-blue-950 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </main>

      {/* Hero Image */}
      <div className="mt-16 group relative">
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-90 transition duration-500"></div>
        <Image
          src="/118835052.jpg"
          alt="Jerome profile"
          width={180}
          height={180}
          className="relative rounded-full shadow-xl transform group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Contact Info Modal */}
      {showContactInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1e293b] text-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center gap-4 mb-4">
              <FiMail className="text-blue-400" size={24} />
              <a href="mailto:chidubemuwaneme@gmail.com" className="hover:underline">
                chidubemuwaneme@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FiGithub className="text-blue-400" size={24} />
              <a href="https://github.com/CJuwaneme1704" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FiLinkedin className="text-blue-400" size={24} />
              <a href="https://www.linkedin.com/in/jerome-uwaneme-571372215" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <button
              onClick={toggleContactInfo}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="w-full px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">
          About
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          I’m a 4th-year Computer Science student passionate about software development, with experience in JavaScript, HTML, CSS, Java, Python, React, MongoDB, Tailwind CSS, Node.js, and Express.js. I enjoy solving challenges and building user-friendly applications. Outside of programming, you’ll find me exploring the outdoors and playing video games.
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I’m looking to contribute to a mission-driven company where I can grow and make an impact. Connect with me at{" "}
          <a
            href="mailto:chidubemuwaneme@gmail.com"
            className="text-blue-400 hover:underline"
          >
            chidubemuwaneme@gmail.com
          </a>.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
