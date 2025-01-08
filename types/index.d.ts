declare type ProfileType = {
  _id: string;
  profile_image: {
    url: string;
    alt?: string;
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
  description: string;
  featured_content: {
    content_type: "image" | "video";
    alt: string;
    video_url?: string;
    image_url?: string;
  };
  body: TypedObject | TypedObject[];
  creation_date: string;
};
