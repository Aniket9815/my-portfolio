import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { profileType } from "./profileType";
import { chartType } from "./chartType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, profileType, chartType],
};
