export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Audio {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl: string;
  url: string;
  provider_metadata: ProviderMetadata;
  provider: string;
  width?: any;
  height?: any;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface Formats {
  thumbnail: Thumbnail;
  large: Large;
  medium: Medium;
  small: Small;
}

export interface Image {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  provider_metadata: ProviderMetadata;
  formats: Formats;
  provider: string;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Category {
  _id: string;
  Title: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface DisplayTemplate {
  _id: string;
  Title: string;
  Description: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Lesson {
  _id: string;
  lessonNo: number;
  description: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: Image;
  level: string;
  key: string;
  levelNo: number;
  id: string;
  pages: Page[];
}

export interface Page {
  _id: string;
  slug: string;
  pageNo: number;
  title: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  category: Category;
  display_template: DisplayTemplate;
  content: string;
  lesson: Lesson;
  lessonNo: number;
  levelNo: number;
  id: string;
  audio: Audio;
  image: Image;
  subtitles: Subtitles;
  video: Video;
}

export interface Video {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl: string;
  url: string;
  provider_metadata: ProviderMetadata;
  provider: string;
  width?: any;
  height?: any;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Subtitles {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider_metadata: ProviderMetadata;
  provider: string;
  width?: any;
  height?: any;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  formats: Formats;
  id: string;
}

export interface Level {
  _id: string;
  levelNo: number;
  description: string;
  image: Image;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface RootObject {
  _id: string;
  slug: string;
  pageNo: number;
  title: string;
  content: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  audio: Audio;
  image: Image;
  category: Category;
  display_template: DisplayTemplate;
  lesson: Lesson;
  lessonNo: number;
  levelNo: number;
  id: string;
}
