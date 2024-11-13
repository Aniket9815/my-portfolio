declare type ProfileType = {
  _id: string;
  profile_image: {
    url: string;
    alt: string;
  };
  social_links: {
    behance: string;
    instagram: string;
    linkedin: string;
  };
  skills: string[];
  resume: string;
  email: string;
};

declare type ProjectType = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  featured_image: { url: string; alt: string };
  body: TypedObject | TypedObject[];
  creation_date: string;
};
