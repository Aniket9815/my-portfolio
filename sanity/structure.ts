import { UserIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Profile")
        .id("profile")
        .icon(UserIcon)
        .child(S.document().schemaType("profile").documentId("profile")),
      S.documentTypeListItem("project").title("Projects"),
    ]);
