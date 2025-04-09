"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  image?: string;
}

export default function ProjectCard({ title, description, tech, repo, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl shadow-lg border border-gray-700 p-6 bg-[#1e293b] flex flex-col gap-4"
    >
      {image && (
        <div className="w-full h-48 relative overflow-hidden rounded-md">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        {tech.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-blue-600 text-white rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-blue-400 hover:underline"
      >
        View
      </a>
    </motion.div>
  );
}
