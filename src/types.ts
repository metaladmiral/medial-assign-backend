export type Post = {
  title: string;
  content: string;
  postid: string;
  img?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type ogImageData = {
  title: string;
  content: string;
  img?: string;
};
