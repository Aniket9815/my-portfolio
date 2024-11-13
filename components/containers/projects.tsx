import { getProjects } from "@/actions/project.actions";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default async function Projects() {
  const projects = await getProjects();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const aniItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="work" className="container py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-[42px] lg:mb-[52px]"
      >
        <motion.h2 variants={aniItem} className="font-medium ">
          Explore my
          <br /> projects
        </motion.h2>
        <motion.p
          variants={aniItem}
          className="w-[42%] text-xs lg:text-xl text-muted"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </motion.p>
      </motion.div>
      <div className="grid border-y divide-y py-[64px] lg:py-[90px]">
        {projects.map((item) => (
          <div
            key={item._id}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-24 py-[64px] first:pt-0 last:pb-0 lg:py-[90px] lg:first:pt-0 lg:last:pb-0"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex lg:flex-col max-md:items-end max-md:justify-between gap-12"
            >
              <div className="space-y-2">
                <div>
                  <motion.p
                    variants={aniItem}
                    className="text-xs lg:text-base text-primary-500"
                  >
                    {new Date(item.creation_date).getFullYear()}
                  </motion.p>
                  <motion.p
                    variants={aniItem}
                    className="text-xs lg:text-[32px] text-muted lg:leading-[42px]"
                  >
                    {item.category}
                  </motion.p>
                </div>
                <motion.h3 variants={aniItem}>{item.title}</motion.h3>
              </div>
              <motion.div variants={aniItem}>
                <Link
                  href={`/${item.slug}`}
                  className={`${buttonVariants()} w-[91px] h-[37px] lg:w-[146px] lg:h-[52px] text-xs lg:text-base`}
                >
                  View Project
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={aniItem}
              viewport={{ once: true }}
              className="relative w-full h-[218px] lg:w-[510px] lg:h-[605px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={item.featured_image.url}
                alt={item.featured_image.alt}
                fill
                className="object-cover hover:scale-105 transition-all ease-in-out"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
