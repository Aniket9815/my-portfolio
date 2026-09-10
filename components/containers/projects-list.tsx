"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiLockClosed } from "react-icons/hi2";
import ProjectUnlockDialog from "@/components/shared/project-unlock-dialog";

interface ProjectsListProps {
  projects: ProjectType[];
  initialUnlocked?: Record<string, boolean>;
}

export default function ProjectsList({
  projects,
  initialUnlocked = {},
}: ProjectsListProps) {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>(initialUnlocked);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleOpenUnlock = (item: ProjectType) => {
    setSelectedProject(item);
  };

  const handleUnlockSuccess = (slug: string) => {
    setUnlocked((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <>
      {/* Stacked Cards Container */}
      <div className="relative flex flex-col items-center">
        {projects.map((item, index) => {
          const isLocked = item.is_protected && !unlocked[item.slug];

          return (
            <div
              key={item._id}
              className="sticky w-full mb-12 sm:mb-16 lg:mb-20 last:mb-0"
              style={{
                top: `calc(135px + ${index * 45}px)`,
                zIndex: 10 + index,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full bg-[#F3E6E2] rounded-[28px] sm:rounded-[34px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10 min-h-[460px] lg:min-h-[500px]"
              >
                {/* Left Column */}
                <div className="w-full lg:w-[48%] flex flex-col justify-center self-stretch py-2 lg:py-4">
                  <div>
                    {item.is_protected && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-black mb-4 w-fit select-none">
                        <HiLockClosed className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="font-outfit text-xs font-medium leading-none">
                          This project is password protected
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-medium text-[#898989]">
                        {item.creation_date
                          ? new Date(item.creation_date).getFullYear()
                          : "2024"}
                      </span>
                    </div>
                    <p className="text-base sm:text-xl lg:text-2xl font-medium text-[#F4805C] mt-1 mb-3 lg:mb-4 tracking-tight">
                      {item.category || "UI/UX Case study"}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-normal font-outfit text-black lg:leading-tight tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-[15px] text-[#656565] leading-relaxed max-w-[440px] mb-6 lg:mb-8">
                      {item.description}
                    </p>
                  </div>

                  {isLocked ? (
                    <button
                      type="button"
                      onClick={() => handleOpenUnlock(item)}
                      className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-black/85 transition-colors shadow-sm w-fit cursor-pointer"
                    >
                      View project
                    </button>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-black/85 transition-colors shadow-sm w-fit"
                    >
                      View project
                    </Link>
                  )}
                </div>

                {/* Right Column - Media Preview */}
                {isLocked ? (
                  <div
                    onClick={() => handleOpenUnlock(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenUnlock(item);
                      }
                    }}
                    className="w-full lg:w-[50%] block group self-stretch flex items-center cursor-pointer"
                  >
                    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] xl:h-[440px] rounded-[20px] lg:rounded-[26px] overflow-hidden bg-[#0A8A8A] flex items-center justify-center shadow-inner">
                      {item.featured_content?.content_type === "image" &&
                        item.featured_content.image_url && (
                          <Image
                            src={item.featured_content.image_url}
                            alt={item.featured_content.alt || item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      {item.featured_content?.content_type === "video" && (
                        <video
                          src={item.featured_content.video_url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/${item.slug}`}
                    className="w-full lg:w-[50%] block group self-stretch flex items-center"
                  >
                    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] xl:h-[440px] rounded-[20px] lg:rounded-[26px] overflow-hidden bg-[#0A8A8A] flex items-center justify-center shadow-inner">
                      {item.featured_content?.content_type === "image" &&
                        item.featured_content.image_url && (
                          <Image
                            src={item.featured_content.image_url}
                            alt={item.featured_content.alt || item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      {item.featured_content?.content_type === "video" && (
                        <video
                          src={item.featured_content.video_url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </Link>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Password Unlock Overlay Dialog */}
      <ProjectUnlockDialog
        isOpen={!!selectedProject}
        project={
          selectedProject
            ? {
                slug: selectedProject.slug,
                title: selectedProject.title,
                category: selectedProject.category,
              }
            : null
        }
        onClose={() => setSelectedProject(null)}
        onSuccess={handleUnlockSuccess}
      />
    </>
  );
}
