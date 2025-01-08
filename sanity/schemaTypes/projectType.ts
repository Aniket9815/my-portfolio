import { ProjectsIcon, ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      description: "Title for your project.",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "A Slug string representing your project uniquely.",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "category",
      title: "Project Category",
      description: "Category of your project.",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      description: "Short description on your project.",
      type: "text",
    }),
    defineField({
      name: "featured_content",
      title: "Featured Content",
      description:
        "Choose between an image or a video for your featured content.",
      type: "object",
      fields: [
        defineField({
          name: "content_type",
          title: "Content Type",
          type: "string",
          options: {
            list: [
              { title: "Image", value: "image" },
              { title: "Video", value: "video" },
            ],
            layout: "radio",
          },
        }),
        defineField({
          name: "image",
          title: "Featured Image",
          type: "image",
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.content_type !== "image",
        }),
        defineField({
          name: "video",
          title: "Featured Video",
          type: "file",
          options: {
            accept: "video/*",
          },
          hidden: ({ parent }) => parent?.content_type !== "video",
        }),
        defineField({
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessibility.",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Project Details",
      description: "Content to describe your project. (Can import Images)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
        {
          type: "image",
          icon: ImageIcon,
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              title: "Image Caption",
              description: "Caption displayed below the image.",
              type: "string",
            },
            {
              name: "alt",
              title: "Alternative Text",
              description: "Important for SEO and accessiblity.",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "creation_date",
      title: "Project Creation Date",
      description: "Project creation date.",
      type: "date",
    }),
  ],
});
