import { getProjects } from "@/actions/project.actions";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="container py-12">
      <div></div>
      <div className="grid border-y divide-y py-[64px] lg:py-[90px]">
        {projects.map((item) => (
          <div
            key={item._id}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-24 py-[64px] first:pt-0 last:pb-0 lg:py-[90px] lg:first:pt-0 lg:last:pb-0"
          >
            <div className="w-full lg:w-1/2 flex lg:flex-col max-md:items-end max-md:justify-between gap-12">
              <div className="space-y-2">
              <div>
                <p className="text-xs lg:text-base text-primary-500">
                  {new Date(item.creation_date).getFullYear()}
                </p>
                <p className="text-xs lg:text-[32px] text-muted lg:leading-[42px]">
                  {item.category}
                </p>
              </div>
              <h3 className="">{item.title}</h3>
              </div>
              <Link
                href={`/${item.slug}`}
                className={`${buttonVariants()} w-[91px] h-[37px] lg:w-[146px] lg:h-[52px] text-xs lg:text-base`}
              >
                View Project
              </Link>
            </div>
            <Image
              src={item.featured_image.url}
              alt={item.featured_image.alt}
              width={510}
              height={605}
              className="w-full h-[218px] lg:w-[510px] lg:h-[605px] rounded-[20px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
