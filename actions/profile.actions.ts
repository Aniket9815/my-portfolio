import { sanityFetch } from "@/sanity/lib/client";
import { PROFILE_QUERY } from "@/sanity/lib/queries";

export async function getProfile(): Promise<ProfileType> {
  return await sanityFetch({
    query: PROFILE_QUERY,
    tags: ["profile"],
  });
}
