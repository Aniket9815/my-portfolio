import { getProjectBySlug, getProjects } from "@/actions/project.actions";
import { PortableText } from "next-sanity";
import Image from "next/image";
import * as motion from "framer-motion/client";
import ScrollProgress from "@/components/shared/scroll-progress";

export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const projects: ProjectType[] = await getProjects();

  return projects.map((project) => ({
    slug: String(project.slug),
  }));
}

export default async function ProjectDescription({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project: ProjectType = await getProjectBySlug((await params).slug);

  if (!project) return null;

  const myPortableTextComponents = {
    types: {
      image: ({ value }: { value: { url: string } }) => (
        <Image
          src={value.url}
          alt="img"
          width={1440}
          height={500}
          className="w-full h-[218px] lg:h-[500px] rounded-[20px] object-cover"
        />
      ),
    },
  };

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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <main>
      {/* <ScrollProgress /> */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="container py-12"
      >
        <div className="space-y-2">
          <div className="space-y-1">
            <motion.p
              variants={item}
              className="text-xs lg:text-base text-primary-500"
            >
              {new Date(project.creation_date).getFullYear()}
            </motion.p>
            <motion.p
              variants={item}
              className="text-xs lg:text-[32px] text-muted lg:leading-[42px]"
            >
              {project.category}
            </motion.p>
          </div>
          <motion.h3 variants={item} className="max-lg:text-2xl">
            {project.title}
          </motion.h3>
        </div>
        <motion.article
          variants={item}
          className="max-w-full prose lg:prose-xl"
        >
          <PortableText
            value={project.body}
            components={myPortableTextComponents}
          />
        </motion.article>
      </motion.section>
    </main>
  );
}
