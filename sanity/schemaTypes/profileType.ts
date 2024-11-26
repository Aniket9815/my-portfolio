import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "profile_image",
      title: "Profile Image",
      description: "Image to be shown in the hero section.",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessiblity.",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Title to display on your Hero Section.",
      type: "string",
    }),
    defineField({
      name: "resume",
      title: "Resume",
      description: "Upload your resume file.",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx", // Restrict to common resume formats
      },
    }),
    defineField({
      name: "email",
      title: "Email Address",
      description: "Email address to open when clicking 'Let's connect'.",
      type: "string",
      validation: (Rule) =>
        Rule.email().error("Please enter a valid email address."),
    }),
    defineField({
      name: "social_links",
      title: "Social Links",
      description: "Social links to navigate from your website.",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          placeholder: "https://instagram.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          placeholder: "https://linkedin.com/",
        },
        {
          name: "behance",
          title: "Behance URL",
          type: "url",
          placeholder: "https://behance.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 3,
      },
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    }),
  ],
});
