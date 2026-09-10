import { UserIcon, ProjectsIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Profile")
        .id("profile")
        .icon(UserIcon)
        .child(S.document().schemaType("profile").documentId("profile")),
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        icon: ProjectsIcon,
        S,
        context,
      }),
    ]);
