export type Post = {
  title: string;
  content: string;
  postid: string;
  img?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type ogImageData = {
  title: string;
  content: string;
  img?: string;
};

export type OgImgCompiledHTMLObj = {
  title: string;
  content: string;
  styles: string;
  img?: string;
};
