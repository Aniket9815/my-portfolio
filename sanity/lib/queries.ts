import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(`
    *[_type=='profile'][0]{
        _id,
        "profile_image": {
            "url": profile_image.asset->url,
            "alt": profile_image.alt,
        },
        social_links,
        skills,
        "resume": resume.asset->url,
        email
    }
`);

export const PROJECTS_QUERY = defineQuery(`
    *[_type=='project']{
        _id,
        "slug":slug.current,
        title,
        category,
        description,
        "featured_image": {
            "url": featured_image.asset->url,
            "alt": featured_image.alt,
        },
        creation_date
    }
`);

export const PROJECT_QUERY = defineQuery(`
    *[_type=='project' && slug.current == $slug][0]{
        _id,
        "slug":slug.current,
        title,
        category,
        description,
        "featured_image": {
            "url": featured_image.asset->url,
            "alt": featured_image.alt,
        },
        "body": body[]{
            _type == "image" => {
                _key,
                "url": asset->url,
                _type,
                alt,
                caption,
            },
            _type != "image" => @
        },
        creation_date
    }
`);
