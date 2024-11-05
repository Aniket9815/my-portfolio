import { getProjects } from "@/actions/project.actions";
import Link from "next/link";

export default async function Home() {
  const projects: ProjectType[] = await getProjects();

  if (!projects.length) return <div>No projects to display!</div>;

  return (
    <main className="min-h-screen">
      {projects.map((item) => (
        <div key={item._id} className="my-5">
          <p>{item.title}</p>
          <Link href={`/${item.slug}`}>Details</Link>
        </div>
      ))}
    </main>
  );
}
