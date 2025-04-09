"use client";

import ProjectCard from "@components/ProjectCard";

const projects = [
  {
    title: "CourseMix",
    description:
      "Modern course registration platform with email auth, smart conflict detection, analytics, and role-based access. Built with Next.js 15.1, React 19, Tailwind CSS, and Supabase.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    repo: "https://github.com/CJuwaneme1704", // Replace with actual repo if different
    image: "/images/coursemix.png", // Optional if you add visuals later
  },
  {
    title: "Connect Four Multiplayer",
    description:
      "Multiplayer Java-based Connect Four game with real-time terminal and Swing GUI support. Supports GUI vs Terminal matchups and player move validation.",
    tech: ["Java", "Swing", "OOP"],
    repo: "https://github.com/CJuwaneme1704", // Replace with actual repo if different
    image: "/images/connect4.png", // Optional
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center sm:text-left">
        Projects
      </h1>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
