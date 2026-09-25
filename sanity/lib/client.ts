import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return await client.fetch(query, params, {
    next: {
      revalidate:
        revalidate !== undefined
          ? revalidate
          : tags.length
            ? false
            : 86400,
      tags,
    },
  });
}
