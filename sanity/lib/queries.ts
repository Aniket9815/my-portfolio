import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(`
    *[_type=='profile'][0]{
        _id,
        "profile_image": {
            "url": profile_image.asset->url,
            "alt": profile_image.alt,
        },
        social_links
    }
`);

export const PROJECTS_QUERY = defineQuery(`
    *[_type=='project']{
        _id,
        "slug":slug.current,
        title
    }
`);

export const PROJECT_QUERY = defineQuery(`
    *[_type=='project' && slug.current == $slug][0]{
        _id,
        "slug":slug.current,
        title
    }
`);
