import React from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

Projects.title = "Project's - Ardi";

function Projects() {
  return (
    <div className="flex flex-col py-6 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <p className="font-fredoka text-4xl lg:text-5xl text-sky-500/50">
          Projects
        </p>
        <p className="font-manrope font-bold text-gray-600/70">
          Place for my projects collection about frontend development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
