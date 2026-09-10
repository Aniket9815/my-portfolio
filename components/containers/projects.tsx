import { getProjects } from "@/actions/project.actions";
import { isProjectUnlocked } from "@/actions/project-auth.actions";
import React from "react";
import ProjectsList from "./projects-list";

export default async function Projects() {
  const projects = await getProjects();

  // Check which protected projects are already unlocked for the user
  const initialUnlocked: Record<string, boolean> = {};
  for (const project of projects) {
    if (project.is_protected) {
      initialUnlocked[project.slug] = await isProjectUnlocked(project.slug);
    }
  }

  return (
    <section id="work" className="container py-12 lg:py-20">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 lg:mb-16">
        <div className="w-12 sm:w-20 lg:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#F4805C]/60" />
        <h2 className="text-[#F4805C] font-outfit text-[22px] sm:text-[26px] lg:text-[30px] leading-normal font-medium font-[500] tracking-normal">
          Explore my projects
        </h2>
        <div className="w-12 sm:w-20 lg:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#F4805C]/60" />
      </div>

      {/* Projects List with Overlay Dialog Support */}
      <ProjectsList projects={projects} initialUnlocked={initialUnlocked} />
    </section>
  );
}
