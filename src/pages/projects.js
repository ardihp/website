import React from "react";
import dynamic from "next/dynamic";
import projects from "@/data/projects";
import { motion } from "framer-motion";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"));

Projects.title = "Project's - Ardi";
Projects.route = "projects";

function Projects() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col pt-8 pb-4 space-y-6 w-full"
    >
      <div className="flex flex-col space-y-2">
        <p className="font-fredoka font-medium text-4xl lg:text-5xl dark:text-white text-sky-500/50">
          Projects
        </p>
        <p className="font-manrope font-bold dark:text-slate-300 text-gray-600/70">
          Place for my projects collection about frontend development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} idx={i} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
