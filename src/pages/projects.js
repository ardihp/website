import React from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

Projects.title = "Project's - Ardi";
Projects.route = "projects";

function Projects() {
  return (
    <div className="flex flex-col py-6 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-fredoka text-4xl lg:text-5xl dark:text-white text-sky-500/50"
        >
          Projects
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="font-manrope font-bold dark:text-slate-400 text-gray-600/70"
        >
          Place for my projects collection about frontend development.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} idx={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
