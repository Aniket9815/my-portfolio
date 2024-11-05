import { getProjectBySlug, getProjects } from "@/actions/project.actions";
import { PortableText } from "next-sanity";
import Image from "next/image";

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

  return (
    <main>
      <section className="container py-12">
        <div>
          <div>
            <p className="text-xs lg:text-base text-primary-500">
              {new Date(project.creation_date).getFullYear()}
            </p>
            <p className="text-xs lg:text-[32px] text-muted lg:leading-[42px]">
              {project.category}
            </p>
          </div>
          <h3 className="">{project.title}</h3>
        </div>
        <article className="max-w-full prose lg:prose-xl">
          <PortableText
            value={project.body}
            components={myPortableTextComponents}
          />
        </article>
      </section>
    </main>
  );
}
