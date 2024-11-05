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
};

declare type ProjectType = {
  _id: string;
  slug: string;
  title: string;
};
