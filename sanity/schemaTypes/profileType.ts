import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title to display on your Hero Section.",
      type: "string",
    }),
  ],
});
